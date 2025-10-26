"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }
      router.push("/dashboard");
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

    return (
        <>
            <div style={{
                minHeight: '100vh',
                background: `url('https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Crowd%20Controller%20Services/660438D5-A405-4A12-A141-34F598A00D3E_1_105_c%20(1).webp') center/cover no-repeat`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.95) 0%, rgba(30, 34, 71, 0.85) 50%, rgba(30, 34, 71, 0.95) 100%)',
                    zIndex: 1
                }}></div>

                {/* Decorative Background Elements */}
                <div style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-100px',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(253, 197, 26, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: 1
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-150px',
                    left: '-150px',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(253, 197, 26, 0.12) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div style={{
                                background: '#ffffff',
                                borderRadius: '20px',
                                padding: '50px 40px',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Top Accent Bar */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '5px',
                                    background: 'linear-gradient(90deg, #fdc51a 0%, #1e2247 50%, #fdc51a 100%)'
                                }}></div>

                                {/* Logo */}
                                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                    <Link href="/">
                                        <img 
                                            src="/assets/img/logo/metroguards logo 2.png" 
                                            alt="Metro Guards Logo" 
                                            style={{ 
                                                maxWidth: '180px', 
                                                height: 'auto',
                                                marginBottom: '20px'
                                            }} 
                                        />
                                    </Link>
                                    <h2 style={{
                                        color: '#1e2247',
                                        fontSize: '1.8rem',
                                        fontWeight: '700',
                                        marginBottom: '10px',
                                        fontFamily: 'serif'
                                    }}>
                                        Welcome Back
                                    </h2>
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '0.95rem',
                                        marginBottom: '0'
                                    }}>
                                        Sign in to access your dashboard
                                    </p>
                                </div>

                                {/* Sign In Form */}
                                <form onSubmit={handleSubmit}>
                                    {/* Email Field */}
                                    <div style={{ marginBottom: '25px' }}>
                                        <label 
                                            htmlFor="email" 
                                            style={{
                                                display: 'block',
                                                color: '#1e2247',
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            <i className="bi bi-envelope" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                            Email Address
                                        </label>
                                        <input 
                                            type="email"  
                                            id="email" 
                                            placeholder="Enter your email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '14px 18px',
                                                border: '2px solid #e9ecef',
                                                borderRadius: '10px',
                                                fontSize: '1rem',
                                                transition: 'all 0.3s ease',
                                                outline: 'none'
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.borderColor = '#fdc51a';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.borderColor = '#e9ecef';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        />
                                    </div>

                                    {/* Password Field */}
                                    <div style={{ marginBottom: '20px' }}>
                                        <label 
                                            htmlFor="password" 
                                            style={{
                                                display: 'block',
                                                color: '#1e2247',
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            <i className="bi bi-lock" style={{ marginRight: '8px', color: '#fdc51a' }}></i>
                                            Password
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <input 
                                                type={showPassword ? "text" : "password"}
                                                name="password" 
                                                id="password" 
                                                placeholder="Enter your password" 
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} 
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '14px 50px 14px 18px',
                                                    border: '2px solid #e9ecef',
                                                    borderRadius: '10px',
                                                    fontSize: '1rem',
                                                    transition: 'all 0.3s ease',
                                                    outline: 'none'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#fdc51a';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(253, 197, 26, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#e9ecef';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                style={{
                                                    position: 'absolute',
                                                    right: '15px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    background: 'none',
                                                    border: 'none',
                                                    color: '#6c757d',
                                                    cursor: 'pointer',
                                                    fontSize: '1.2rem',
                                                    padding: '0',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remember Me & Forgot Password */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '30px',
                                        flexWrap: 'wrap',
                                        gap: '10px'
                                    }}>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            userSelect: 'none'
                                        }}>
                                            <input 
                                                 type="checkbox"
                                                id="keep-logged-in"
                                                checked={remember}
                                                onChange={(e) => setRemember(e.target.checked)}
                                                style={{
                                                    width: '18px',
                                                    height: '18px',
                                                    marginRight: '8px',
                                                    cursor: 'pointer',
                                                    accentColor: '#fdc51a'
                                                }}
                                            />
                                            <span style={{
                                                color: '#1e2247',
                                                fontSize: '0.9rem',
                                                fontWeight: '500'
                                            }}>
                                                Keep me logged in
                                            </span>
                                        </label>
                                        <Link 
                                            href="/forgot"
                                            style={{
                                                color: '#fdc51a',
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#1e2247';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = '#fdc51a';
                                            }}
                                        >
                                            Forgot Password?
                                        </Link>
                                            </div>

                                    {/* Error Message */}
                                    {error && (
                                        <div style={{
                                            background: 'rgba(220, 53, 69, 0.1)',
                                            border: '2px solid rgba(220, 53, 69, 0.3)',
                                            borderRadius: '10px',
                                            padding: '12px 15px',
                                            marginBottom: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}>
                                            <i className="bi bi-exclamation-circle" style={{ color: '#dc3545', fontSize: '1.2rem' }}></i>
                                            <span style={{ color: '#dc3545', fontSize: '0.9rem', fontWeight: '500' }}>{error}</span>
                                        </div>
                                    )}

                                    {/* Sign In Button */}
                                    <button 
                                        type="submit" 
                                        disabled={loading}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            background: loading ? '#6c757d' : 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
                                            color: '#1e2247',
                                            border: 'none',
                                            borderRadius: '10px',
                                            fontSize: '1rem',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            cursor: loading ? 'not-allowed' : 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: loading ? 'none' : '0 6px 20px rgba(253, 197, 26, 0.4)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!loading) {
                                                e.target.style.transform = 'translateY(-2px)';
                                                e.target.style.boxShadow = '0 8px 25px rgba(253, 197, 26, 0.5)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!loading) {
                                                e.target.style.transform = 'translateY(0)';
                                                e.target.style.boxShadow = '0 6px 20px rgba(253, 197, 26, 0.4)';
                                            }
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                <span>Signing In...</span>
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-box-arrow-in-right"></i>
                                                <span>Sign In</span>
                                            </>
                                        )}
                                        </button>
                                    </form>

                                {/* Sign Up Link */}
                                <div style={{
                                    textAlign: 'center',
                                    marginTop: '30px',
                                    paddingTop: '25px',
                                    borderTop: '2px solid #e9ecef'
                                }}>
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '0.95rem',
                                        marginBottom: '0'
                                    }}>
                                        Don't have an account?{' '}
                                        <Link 
                                            href="/signup"
                                            style={{
                                                color: '#1e2247',
                                                fontWeight: '700',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#fdc51a';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = '#1e2247';
                                            }}
                                        >
                                            Create Account
                                        </Link>
                                    </p>
                                </div>

                                {/* Home Link */}
                                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                    <Link 
                                        href="/"
                                        style={{
                                            color: '#6c757d',
                                            fontSize: '0.9rem',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#1e2247';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#6c757d';
                                        }}
                                    >
                                        <i className="bi bi-arrow-left"></i>
                                        <span>Back to Home</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}