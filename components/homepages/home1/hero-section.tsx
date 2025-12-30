"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./hero-section.css"

const slides = [
  {
    id: 1,
    image: "/assets/img/about/south.webp",
    title: "Digital",
    subtitle: "Marketing",
    tagline: "Welcome to Digital Agency",
    buttonText: "Discover More",
  },
  {
    id: 2,
    image: "/assets/img/about/aboutimg.webp",
    title: "Creative",
    subtitle: "Solutions",
    tagline: "Innovative Digital Strategies",
    buttonText: "Learn More",
  },
  {
    id: 3,
    image: "/assets/img/about/metro-3.jpg",
    title: "Growth",
    subtitle: "Focused",
    tagline: "Driving Business Success",
    buttonText: "Get Started",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [zoomKey, setZoomKey] = useState(0)
  const [textKey, setTextKey] = useState(0)

  const changeSlide = (getNextIndex: (prev: number) => number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(getNextIndex)
    setZoomKey(prev => prev + 1) // Force animation restart
    setTextKey(prev => prev + 1) // Force text animation restart
  }

  const nextSlide = () => changeSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => changeSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToSlide = (index: number) => {
    if (index !== currentSlide) changeSlide(() => index)
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1200)
    return () => clearTimeout(timer)
  }, [currentSlide])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <div className="relative h-screen min-h-[600px] max-h-[900px] md:h-screen overflow-hidden bg-gray-900">
      {/* Backgrounds */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={`${slide.id}-${index === currentSlide ? zoomKey : 'inactive'}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 hero-image-zoom" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Text */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-left">
            {slides.map((slide, index) => (
              <div key={slide.id} className={index === currentSlide ? "block" : "hidden"}>
                <div className="space-y-4 sm:space-y-6">
  <p 
    key={`tagline-${index === currentSlide ? textKey : 'inactive'}`}
    className={`text-sm sm:text-base lg:text-lg text-gray-300 font-medium ${
      index === currentSlide ? 'hero-text-slide hero-text-delay-1' : ''
    }`}
  >
    {slide.tagline}
  </p>

  <div className="space-y-1 sm:space-y-2">
    <h1 
      key={`title-${index === currentSlide ? textKey : 'inactive'}`}
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight ${
        index === currentSlide ? 'hero-text-slide hero-text-delay-2' : ''
      }`}
    >
      {slide.title}
      <span className="text-yellow-500 ml-1 sm:ml-2">*</span>
    </h1>
    <h2 
      key={`subtitle-${index === currentSlide ? textKey : 'inactive'}`}
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight ${
        index === currentSlide ? 'hero-text-slide hero-text-delay-3' : ''
      }`}
    >
      {slide.subtitle}
    </h2>
  </div>

  <div className="pt-2 sm:pt-4">
    <Button
      key={`button-${index === currentSlide ? textKey : 'inactive'}`}
      size="lg"
      className={`bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg ${
        index === currentSlide ? 'hero-text-slide hero-text-delay-4' : ''
      }`}
    >
      {slide.buttonText}
    </Button>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-400" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-400" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-yellow-500" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
