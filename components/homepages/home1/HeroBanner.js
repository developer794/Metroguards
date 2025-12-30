"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";  // 👈 import
import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function HeroBanner({
    
  titleLines = ["Security", "Company", "Melbourne"],
  kicker = "Integrated Business Solutions",
  cta = { label: "Contact Us", href: "/contacts" },
  image = "/assets/img/banner/metro-2-copy.jpg",
}) {
  // Animation variants for stagger effect
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between each line
      },
    },
  };

  const lineVariant = {
    hidden: { x: 100, opacity: 0 },   // start from right
    visible: { x: 0, opacity: 1 },    // move to normal position
  };
const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ marginBottom: "0px" }}
    >
      {/* Background container */}
      <div className="absolute inset-0 -z-10 hero-image-wrapper">
        <Image
          src={isMobile ? "/assets/img/banner/metro-3.jpg" : "/assets/img/banner/metro-2-copy.jpg"}
          alt="Background"
          fill
          priority
          className="object-cover object-center hero-image"
          style={{ zIndex: -1 }}
        />
        
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 items-center gap-10 banner-tittle">
          <motion.div
            style={{ textAlign: "right", marginTop: "200px" }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <h1 className="hero-title"
              style={{
                color:"#fdc51a"
              }}
            >
              {titleLines.map((line, i) => (
                <motion.span
                  key={i}
                  style={{ display: "block" }}
                  variants={lineVariant}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.span
              variants={lineVariant}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                display: "inline-block",
                fontWeight: "bold",
                color: "#0b0a0aff",
                borderRadius: "7px",
                padding: "8px 16px",
                marginBottom: "16px",
              }}
            >
              {kicker}
            </motion.span>

            <motion.div
              variants={lineVariant}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ marginTop: "28px" }}
            >
              <Link
                href={cta.href}
                style={{
                  backgroundColor: "#FDC51A",
                  color: "#000",
                  padding: "14px 28px",
                  borderRadius: "7px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1e2247";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FDC51A";
                  e.currentTarget.style.color = "#000";
                }}
              >
                {cta.label}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
<style jsx>{`
.banner-tittle{
    margin-right:140px;
    }
.hero-title {
    color: "#fdc51a",
    fontWeight: "bold",
    lineHeight: 1.2,
    fontSize: "50px",
    margin: "0 0 20px",
}

@media (max-width: 768px) { /* tablets */
  .hero-title {
    font-size: 32px;
    margin-right:20px;
  }
    .banner-tittle{
    margin-right:20px;
    }
    .hero-image {
    object-position: left center !important; /* focus left */
    transform: translateX(-25%);             /* shift left */
    width: 150% !important;                  /* make image wider */
  }
}

@media (max-width: 480px) { /* mobiles */
  .hero-title {
    font-size: 24px;
    margin-right:20px;
    
  }
    .banner-tittle{
    margin-right:20px;
    }
    .hero-image {
    object-position: left center !important; /* focus left */
    transform: translateX(-25%);             /* shift left */
    width: 150% !important;                  /* make image wider */
  }
}
`}</style>
    </section>
  );
}
