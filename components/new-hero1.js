"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function NewHero() {
  const phoneNumber = "+61000000000"; // ← replace with your real number

  const slides = [
    {
      id: 1,
      image: "/assets/img/banner/metro-2-copy.jpg",
      kicker: "Welcome to Metro Guards",
      titleTop: "Security",
      titleBottom: " Services",
      cta: { label: "Call Now", href: `tel:${phoneNumber}` },
    },
    {
      id: 2,
      image: "/assets/img/banner/metro-3.jpg",
      kicker: "Welcome to Metro Guards",
      titleTop: "Security",
      titleBottom: "Services",
      cta: { label: "Call Now", href: `tel:${phoneNumber}` },
    },
    {
      id: 3,
      image: "/assets/img/banner/metro-2-copy.jpg",
      kicker: "Welcome to Metro Guards",
      titleTop: "Security",
      titleBottom: "Services",
      cta: { label: "Call Now", href: `tel:${phoneNumber}` },
    },
  ];

  const SLIDE_DURATION = 6500;
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => timerRef.current && clearTimeout(timerRef.current);
  }, [index]);

  const current = slides[index];

  const groupEnter = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, y: -40, transition: { duration: 0.6 } },
  };

  const line = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.2 + i * 0.12, duration: 0.7, ease: "easeOut" },
    }),
  };

  const bgPanClass = useMemo(() => "nh-bg-pan", []);

  return (
    <section
      className="relative w-full h-[500px] sm:h-[600px] md:h-[450px] lg:h-[450px] xl:h-[650px] overflow-hidden z-0"
      style={{
        fontFamily:
          "'Satoshi', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className={`absolute inset-0 ${bgPanClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={current.image}
              alt="Background"
              fill
              priority
              className="object-cover object-center grayscale-[80%]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Grey Shape 1 – bottom left */}
        

        {/* Yellow Shape 2 – top right */}
        {/* Yellow Shape 2 – top right */}
        <motion.img
          src="/assets/img/banner/Asset1.png"
          alt="Shape 2"
          className="absolute bottom-5 right-1 w-[30vw]  md:w-[35vw] lg:w-[40vw] xl:w-[35vw] opacity-60"
          initial={{ x: 0 }}
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        {/* Black Shape 3 – bottom right */}
        <motion.img
          src="/assets/img/banner/main-slider-shape-3.webp"
          alt="Shape 3"
          className="absolute bottom-0 right-2 w-[25vw] sm:w-[20vw] md:w-[30vw] lg:w-[20vw] opacity-80"
          initial={{ x: 0 }}
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </div>

      {/* Global Overlay Layer for ALL images (background + shapes) */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${current.id}`}
          variants={groupEnter}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative z-20 h-full w-full"
        >
          <div className="container h-full mx-auto px-6 lg:px-10 flex items-center">
            <div className="max-w-6xl">
              {/* kicker */}
              <motion.div
                custom={0}
                variants={line}
                className="mb-6 inline-block text-white/90 text-[clamp(16px,2.4vw,24px)] tracking-wide"
              >
                <span className="relative inline-block">
                  <span className="nh-underline font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[5px] xl:text-[20px]">
                    {current.kicker}
                  </span>
                </span>
              </motion.div>

              {/* main heading */}
<div className="leading-[1.05] tracking-tight">
  <motion.h1
    custom={1}
    variants={line}
    className="text-white font-extrabold text-[clamp(42px,8vw,196px)]"
  >
    {current.titleTop}
  </motion.h1>
  <motion.h2
    custom={2}
    variants={line}
    className="text-white font-extrabold text-[clamp(42px,8vw,196px)]"
  >
    {current.titleBottom}
  </motion.h2>
</div>


              {/* CTA */}
              <motion.div custom={3} variants={line} className="mt-8">
                <Link
                  href={current.cta.href}
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-semibold tracking-wide px-14 h-[44px] min-w-[240px] rounded-md hover:bg-yellow-300 transition"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots / pager */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 z-30">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`nh-dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Styles */}
      <style jsx global>{`
        @keyframes nhPan {
          0% {
            transform: scale(1.05) translateX(-2%);
          }
          100% {
            transform: scale(1.12) translateX(2%);
          }
        }
        .nh-bg-pan img {
          animation: nhPan 6.2s ease-in-out forwards;
        }

        .nh-underline {
          text-decoration-line: underline;
          text-decoration-color: #fdc51a;
          text-decoration-thickness: 3px;
          text-underline-offset: 6px;
          margin-right: 6px;
        }

        .nh-dot {
          width: 11px;
          height: 11px;
          border-radius: 999px;
          border: 2px solid #ffffffbf;
          background: transparent;
          transition: all 0.25s ease;
        }
        .nh-dot.active {
          background: #fdc51a;
          border-color: #fdc51a;
          transform: scale(1.1);
        }
        .nh-dot:hover {
          border-color: #fdc51a;
        }
      `}</style>
    </section>
  );
}
