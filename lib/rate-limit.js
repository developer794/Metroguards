/**
 * Simple In-Memory Rate Limiter
 * 
 * For production, consider using:
 * - Upstash Redis (@upstash/ratelimit)
 * - Vercel KV for serverless edge
 * 
 * This implementation uses LRU cache with time-based expiration
 */

class RateLimiter {
  constructor(options = {}) {
    this.interval = options.interval || 60 * 1000; // Default: 1 minute
    this.maxRequests = options.maxRequests || 10; // Default: 10 requests per interval
    this.cache = new Map();
    
    // Clean up old entries every minute
    setInterval(() => this.cleanup(), 60 * 1000);
  }

  /**
   * Check if request is allowed
   * @param {string} identifier - IP address or user identifier
   * @returns {Object} { allowed: boolean, remaining: number, reset: number }
   */
  check(identifier) {
    const now = Date.now();
    const key = identifier;
    
    // Get or create entry for this identifier
    let entry = this.cache.get(key);
    
    if (!entry || now > entry.resetTime) {
      // Create new entry or reset expired one
      entry = {
        count: 0,
        resetTime: now + this.interval,
      };
      this.cache.set(key, entry);
    }
    
    // Increment request count
    entry.count++;
    
    const allowed = entry.count <= this.maxRequests;
    const remaining = Math.max(0, this.maxRequests - entry.count);
    const reset = Math.ceil(entry.resetTime / 1000);
    
    return {
      allowed,
      remaining,
      reset,
      limit: this.maxRequests,
    };
  }

  /**
   * Clean up expired entries
   */
  cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.resetTime) {
        this.cache.delete(key);
      }
    }
  }

  /**
   * Reset rate limit for specific identifier (useful for testing)
   */
  reset(identifier) {
    this.cache.delete(identifier);
  }

  /**
   * Get cache size (for monitoring)
   */
  size() {
    return this.cache.size;
  }
}

// Create rate limiter instances for different use cases

// Strict limiter for authentication (5 requests per minute)
export const authLimiter = new RateLimiter({
  interval: 60 * 1000, // 1 minute
  maxRequests: 5,
});

// Standard limiter for form submissions (10 requests per minute)
export const formLimiter = new RateLimiter({
  interval: 60 * 1000, // 1 minute
  maxRequests: 10,
});

// Lenient limiter for general API requests (30 requests per minute)
export const apiLimiter = new RateLimiter({
  interval: 60 * 1000, // 1 minute
  maxRequests: 30,
});

/**
 * Helper function to get client IP from request
 * @param {Request} request - Next.js API request
 * @returns {string} IP address
 */
export function getClientIp(request) {
  // Try various headers where IP might be stored
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const cfConnecting = request.headers.get('cf-connecting-ip'); // Cloudflare
  
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwarded.split(',')[0].trim();
  }
  
  if (real) {
    return real.trim();
  }
  
  if (cfConnecting) {
    return cfConnecting.trim();
  }
  
  // Fallback to connection remote address (may not be available in all environments)
  return 'unknown';
}

/**
 * Apply rate limit and return response if exceeded
 * @param {RateLimiter} limiter - Rate limiter instance
 * @param {string} identifier - IP or user identifier
 * @returns {Object|null} Error response object or null if allowed
 */
export function checkRateLimit(limiter, identifier) {
  const result = limiter.check(identifier);
  
  if (!result.allowed) {
    return {
      error: 'Too many requests. Please try again later.',
      retryAfter: result.reset,
      limit: result.limit,
      remaining: 0,
      reset: result.reset,
    };
  }
  
  return null;
}

export default RateLimiter;

