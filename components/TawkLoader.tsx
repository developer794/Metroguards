// components/TawkLoader.tsx
"use client";
import { useEffect } from "react";

export default function TawkLoader() {
  useEffect(() => {
    // prevent duplicate inserts on hot reload/navigation
    if (document.getElementById("tawk-script")) return;

    // define Tawk_API before loading the script
    (function () {
      // @ts-ignore
      window.Tawk_API = window.Tawk_API || {};
      // @ts-ignore
      window.Tawk_API.onLoad = function () {
        // keep widget minimized on page load
        // @ts-ignore
        window.Tawk_API.minimize();
      };
    })();

    const s1 = document.createElement("script");
    s1.id = "tawk-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/689f7046ed02831924d242b7/1j2nct5nj";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0?.parentNode?.insertBefore(s1, s0);

    // optional cleanup on unmount
    return () => {
      s1.remove();
      // @ts-ignore
      delete window.Tawk_API;
    };
  }, []);

  return null;
}
