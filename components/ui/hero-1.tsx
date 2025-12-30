"use client"

import { ChevronRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface HeroProps {
  eyebrow?: string
  title: string | string[]
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "Metro Guards Security Services",
  title,
  subtitle,
  ctaLabel = "Contact Us Now",
  ctaHref = "/contact-us",
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel images array
  const carouselImages = [
    '/assets/img/banner/metro-2.jpg',
    '/assets/img/banner/metro-3.jpg',
    '/assets/img/banner/metro-2-copy.jpg',
    '/assets/img/case-study/case-1.jpg',
    '/assets/img/case-study/case-2.jpg'
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16 px-3 sm:px-5 md:pl-12 md:pr-6 lg:pl-32 lg:pr-20
      h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden z-0
      rounded-b-xl flex flex-col justify-center items-start"
    >
      {/* Carousel Background Images */}
      {carouselImages.map((image, index) => (
        <div
          key={`${index}-${currentSlide}`}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(135deg,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.5) 25%,rgba(0,0,0,0.6) 50%,rgba(0,0,0,0.7) 75%,rgba(30,34,71,0.8) 100%), url('${image}')`,
            zIndex: index === currentSlide ? 1 : 0,
            animation: index === currentSlide ? 'slowZoomIn 8s ease-out' : 'none',
          }}
        />
      ))}

      {/* CSS Animation for slow zoom effect */}
      <style jsx>{`
        @keyframes slowZoomIn {
          0% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }
        
          

        /* Small devices (phones, up to 640px) */
        @media (max-width: 640px) {
          .ContentContainer {
          margin-top: 80px;
            margin-left: 0px;
            padding: 0px;
          }
        }

        /* Medium devices (tablets, 641px–1024px) */
        @media (min-width: 641px) and (max-width: 1024px) {
          .ContentContainer {
            margin-top: 50px;
            padding: 0px;
          }
        }

        /* Large devices (desktops, 1025px–1440px) */
        @media (min-width: 1025px) and (max-width: 1440px) {
          .ContentContainer {
            margin-left: 60px;
            padding: 60px;
          }
        }

        /* Extra large screens (1441px and up) */
        @media (min-width: 1441px) {
          .ContentContainer {
            margin-left: 100px;
            padding: 100px;
          }
        }
      `}</style>
      

      

             {/* Content Container */}
       <div
         className="ContentContainer flex flex-col space-y-4 sm:space-y-6 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl relative z-30 
         ml-3 sm:ml-5 md:ml-6 lg:ml-10 
         px-4 sm:px-6 md:px-8 lg:px-12 
         py-8 sm:py-12 md:py-16 lg:py-24"
         
      >
        

        {/* Title */}
        <h1
          className={`text-white font-semibold leading-tight tracking-tighter 
          text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
          transition-all duration-1500 ease-out lg:-ml-44
          ${
            isLoaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-24"
          }`}
          style={{ 
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
          }}
        >
          {Array.isArray(title) ? (
            title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))
          ) : (
            title
          )}
        </h1>

        {/* Subtitle */}
        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl
          transition-all duration-1300 ease-out delay-400 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
        >
          {subtitle}
        </p>

        {/* CTA */}
        {ctaLabel && (
          <div
            className={`flex transition-all duration-1200 ease-out delay-700 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            <Button
              asChild
              className="w-full sm:w-auto font-geist tracking-tight text-center text-sm sm:text-base md:text-lg
              bg-[#fdc51a] text-black border-2 border-[#fdc51a] 
              hover:bg-transparent hover:border-yellow-400 hover:!text-white
              transition-all duration-300 ease-in-out transform
              hover:shadow-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
              style={{ minHeight: "44px" }}
            >
              <a href={ctaHref} className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                {ctaLabel}
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
