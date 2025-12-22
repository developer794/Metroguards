'use client';

import { useEffect } from 'react';

/**
 * Component to remove BreadcrumbList schema from the page
 * This ensures any BreadcrumbList JSON-LD schema is removed from the DOM
 */
export default function RemoveBreadcrumbSchema() {
  useEffect(() => {
    // Function to remove BreadcrumbList schema
    const removeBreadcrumbSchema = () => {
      // Find all script tags with type="application/ld+json"
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      
      scripts.forEach((script) => {
        try {
          const content = script.textContent || script.innerHTML;
          if (content) {
            const jsonData = JSON.parse(content);
            
            // Check if it's a BreadcrumbList schema
            if (jsonData['@type'] === 'BreadcrumbList' || 
                (Array.isArray(jsonData) && jsonData.some(item => item['@type'] === 'BreadcrumbList'))) {
              // Remove the script element
              script.remove();
            }
          }
        } catch (e) {
          // If JSON parsing fails, check if content contains BreadcrumbList
          const content = script.textContent || script.innerHTML;
          if (content && content.includes('BreadcrumbList')) {
            script.remove();
          }
        }
      });
    };

    // Run immediately
    removeBreadcrumbSchema();

    // Also run after a short delay to catch dynamically added schemas
    const timeoutId = setTimeout(removeBreadcrumbSchema, 100);

    // Use MutationObserver to watch for dynamically added scripts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            if (node.tagName === 'SCRIPT' && node.type === 'application/ld+json') {
              removeBreadcrumbSchema();
            } else if (node.querySelectorAll) {
              const scripts = node.querySelectorAll('script[type="application/ld+json"]');
              if (scripts.length > 0) {
                removeBreadcrumbSchema();
              }
            }
          }
        });
      });
    });

    // Start observing
    observer.observe(document.head, {
      childList: true,
      subtree: true
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null;
}

