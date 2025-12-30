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
      image: "https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Adhoc%20Security%20Services/C38803E5-A7C7-472E-839D-290BBEA65378_1_105_c.webp",
      kicker: "Welcome to Metro Guards",
      titleTop: "Security",
      titleBottom: " Services",
      cta: { label: "Call Now", href: `tel:${phoneNumber}` },
    },
    {
      id: 2,
      image: "https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Events%20Secuirty/51BEE2F0-1C5C-4D14-BE17-7CA4C4DDC7C5_1_105_c.jpeg",
      kicker: "Welcome to Metro Guards",
      titleTop: "Security",
      titleBottom: "Services",
      cta: { label: "Call Now", href: `tel:${phoneNumber}` },
    },
    {
      id: 3,
      image: "https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Gatehouse%20Security%20Guard/5FF0A9F2-0B06-4543-9AC1-2D57F158C07A_1_105_c.webp",
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

  // Wrapper just fades (no vertical motion here so child animations are clear)
  const groupFade = {
     hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9 } }, // was 0.4
  exit:    { opacity: 0, transition: { duration: 0.8 } }, // was 0.25
  };

  // Text slides FROM TOP on each change
  const textFromTop = {
    hidden: { opacity: 0, y: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut", delay }, // was 0.7
  }),
  exit: { opacity: 0, y: -40, transition: { duration: 0.9, ease: "easeIn" } }, // was 0.35
};

  // Button slides FROM BOTTOM on each change
  const buttonFromBottom = {
     hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut", delay }, // was 0.7
  }),
  exit: { opacity: 0, y: 40, transition: { duration: 0.9, ease: "easeIn" } }, // was 0.35
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
        <motion.img
          src="/assets/img/banner/Asset1.png"
          alt="Shape 2"
          className="absolute bottom-5 right-1 w-[30vw] md:w-[35vw] lg:w-[40vw] xl:w-[35vw] opacity-60"
          initial={{ x: 0 }}
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.img
          src="/assets/img/banner/main-slider-shape-3.webp"
          alt="Shape 3"
          className="absolute bottom-0 right-2 w-[25vw] sm:w-[20vw] md:w-[30vw] lg:w-[20vw] opacity-80"
          initial={{ x: 0 }}
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </div>

      {/* Global Overlay Layer */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${current.id}`}
          variants={groupFade}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative z-20 h-full w-full"
        >
          <div className="container h-full mx-auto px-6 lg:px-10 flex items-center">
            <div className="max-w-6xl">
              {/* Kicker — from TOP */}
              <motion.div
                custom={0}
                variants={textFromTop}
                initial="hidden"
                animate={textFromTop.visible(0.05)}
                exit="exit"
                className="mb-6 inline-block text-white/90 tracking-wide nh-kicker"
              >
                <span className="relative inline-block">
                  <span className="nh-underline font-semibold">
                    {current.kicker}
                  </span>
                </span>
              </motion.div>

              {/* Headings — from TOP, with small stagger */}
              <div className="leading-[0.92] tracking-tight">
                <motion.h1
                  custom={1}
                  variants={textFromTop}
                  initial="hidden"
                  animate={textFromTop.visible(0.15)}
                  exit="exit"
                  className="text-white font-extrabold nh-title-top"
                >
                  {current.titleTop}
                </motion.h1>
                <motion.h2
                  custom={2}
                  variants={textFromTop}
                  initial="hidden"
                  animate={textFromTop.visible(0.28)}
                  exit="exit"
                  className="text-white font-extrabold nh-title-bottom"
                >
                  {current.titleBottom}
                </motion.h2>
              </div>

              {/* CTA — from BOTTOM */}
              <motion.div
                custom={3}
                variants={buttonFromBottom}
                initial="hidden"
                animate={buttonFromBottom.visible(0.35)}
                exit="exit"
                className="nh-cta-wrap"
              >
                
                <a 
                  href="tel:1300731173" 
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-semibold tracking-wide px-14 h-[44px] min-w-[240px]  hover:bg-yellow-300 transition" 
                  
                  
              >
                  <i className="fa fa-phone" />
                  Call Now
              </a>
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
        /* Font sizes controlled here */
        .nh-kicker {
          font-size: clamp(10px, 2.0vw, 25px);
          line-height: 1.2;
          margin-bottom: 30px;
        }
        .nh-title-top {
          font-size: clamp(67px, 8vw, 190px);
          line-height: 0.9;
        }
        .nh-title-bottom {
          font-size: clamp(67px, 8vw, 190px);
          line-height: 0.9;
        }
        @media (min-width: 1920px) {
          .nh-title-top { font-size: 12vw; max-font-size: 260px; }
          .nh-title-bottom { font-size: 11vw; max-font-size: 240px; }
        }

        /* Background pan */
        @keyframes nhPan {
          0% { transform: scale(1.05) translateX(-2%); }
          100% { transform: scale(1.12) translateX(2%); }
        }
        .nh-bg-pan img { animation: nhPan 6.2s ease-in-out forwards; }

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
        .nh-dot:hover { border-color: #fdc51a; }

        /* CTA spacing */
.nh-cta-wrap { margin-top: 3.3rem; }          /* ~ mt-14 */
@media (min-width: 1024px) {                   /* lg */
  .nh-cta-wrap { margin-top: 3rem; }           /* ~ mt-16 */
}
@media (max-width: 640px) {                    /* sm and below */
  .nh-cta-wrap { margin-top: 2.3rem; }         /* ~ mt-10 */
}

  @media (max-width: 1440px) {                    /* sm and below */
  .nh-cta-wrap { margin-top: 3.3rem; }         /* ~ mt-10 */
  .nh-title-top { font-size: 12vw; max-font-size: 260px; }
  .nh-title-bottom { font-size: 12vw; max-font-size: 240px; }
}
  @media (min-width: 2000px) {                    /* sm and below */
  .nh-cta-wrap { margin-top: 0rem; }         /* ~ mt-10 */
  .nh-title-top { font-size: 7vw; max-font-size: 260px; }
  .nh-title-bottom { font-size: 7vw; max-font-size: 240px; }
}
      `}</style>
    </section>
  );
}