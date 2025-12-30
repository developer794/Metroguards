"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";


// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const services = [
  {
    title: "Private SecurityGuard",
    image: "/assets/img/case-study/s4.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="50" height="50">
        <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3zm0 2.18l6 2.25v4.82c0 4.35-2.95 8.54-6 9.92-3.05-1.38-6-5.57-6-9.92V6.43l6-2.25z"/>
        <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"/>
      </svg>
    ),
    href: "/services/security",
  },
  {
    title: "Mobile PatrolSecurity",
    image: "/assets/img/case-study/s7.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="50" height="50">
        <path d="M20.5 11l-1.5-4.5C18.6 5.6 17.9 5 17 5H7c-.9 0-1.6.6-2 1.5L3.5 11H2v2h1v6h2v-2h14v2h2v-6h1v-2h-1.5zM7 7h10l1.33 4H5.67L7 7zm0 9c-.8 0-1.5-.7-1.5-1.5S6.2 13 7 13s1.5.7 1.5 1.5S7.8 16 7 16zm10 0c-.8 0-1.5-.7-1.5-1.5S16.2 13 17 13s1.5.7 1.5 1.5S17.8 16 17 16z"/>
      </svg>
    ),
    href: "/services/cleaning",
  },
  {
    title: "Construction SiteSecurity",
    image: "/assets/img/case-study/s3.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="50" height="50">
        <path d="M20 21H4a2 2 0 01-2-2V9h20v10a2 2 0 01-2 2zm0-12H4V5a2 2 0 012-2h12a2 2 0 012 2v4z"/>
      </svg>
    ),
    href: "/services/maintenance",
  },
  {
    title: "Warehouse SecuritySystem",
    image: "/assets/img/case-study/s5.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="50" height="50">
        <path d="M3 21V8l9-6 9 6v13H3zm9-15L5 9.74V19h14V9.74L12 6z"/>
      </svg>
    ),
    href: "/services/alarm",
  },
  {
    title: "Retail Security",
    image: "/assets/img/blog/retail.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="50" height="50">
        <path d="M3 4h18v2H3V4zm2 4h14l1.5 12h-17L5 8zm7 2a2 2 0 100 4 2 2 0 000-4z"/>
      </svg>
    ),
    href: "/services/facility",
  },
  {
    title: "Event Security",
    image: "/assets/img/blog/event security.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="50" height="50">
        <path d="M12 2l4 8h8l-6 6 2 8-8-5-8 5 2-8-6-6h8z"/>
      </svg>
    ),
    href: "/services/emergery",
  },
  {
    title: "K9 Security",
    image: "/assets/img/case-study/s1.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="50" height="50">
        <path d="M12 4C9.79 4 8 5.79 8 8v2H6a2 2 0 00-2 2v6h2v2h12v-2h2v-6a2 2 0 00-2-2h-2V8c0-2.21-1.79-4-4-4z"/>
      </svg>
    ),
    href: "/services/consultation",
  },
  {
    title: "Gatehouse Security",
    image: "/assets/img/case-study/s6.webp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="50" height="50">
        <path d="M4 20V8l8-5 8 5v12H4zm8-13l-6 4v9h12v-9l-6-4z"/>
      </svg>
    ),
    href: "/services/technology",
  },
];


export default function ServicesSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="section-padding2 pt-20 pb-12" id="services" style={{marginTop:"190px"}}>
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="row">
          <div className="col-md-4 m-auto">
            <div className="heading2 text-center">
              
              <h2 data-aos="fade-up" data-aos-duration={800} className="text-gray-800">
                <span className="text-blue-600">Our</span> Services
              </h2>
            </div>
          </div>
        </div>
        
        <div className="mt-12 relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
            }}
            className="services-swiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <Link href={service.href} className="block group">
                  <div className="service-card relative overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                    {/* Background image covering the whole card */}
                    <div className="relative h-80 w-full overflow-hidden service-image-container">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-all duration-700"
                      />
                    </div>
                    
                    {/* Content overlay - aligned to bottom-left */}
                    <div className="absolute inset-0 flex flex-col justify-end z-20 p-6 service-content ml-3" style={{marginLeft:"20px"}}>
                    {/* Icon above text */}
                    <div className="service-icon w-10 h-10 mb-3 mt-3 flex items-center justify-center bg-transparent">
                    {service.icon}
                    </div>
                    {/* Title at bottom-left */}
                    <h3 className="service-title text-lg font-bold text-white leading-tight">
                        {service.title.replace(/ /g, "\n")}
                    </h3>
                    </div>

                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation arrows - centered with proper spacing using image icons */}
          <div className="flex justify-center items-center  space-x-6 navigation-container" style={{marginTop:"80px"}}>
            <button className="swiper-button-prev-custom p-2 transition-all duration-300" style={{marginRight:"10px"}}>
              <Image 
                src="/assets/img/icons/back.png" 
                alt="Previous" 
                width={20} 
                height={20} 
                className="hover:opacity-80 transition-opacity"
              />
            </button>
            <button className="swiper-button-next-custom p-2 transition-all duration-300">
              <Image 
                src="/assets/img/icons/next.png" 
                alt="Next" 
                width={20} 
                height={20} 
                className="hover:opacity-80 transition-opacity"
              />
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .service-card {
          cursor: pointer;
          will-change: transform;
          border-radius: 1rem;
          height: 270px;
        }
        
        .services-swiper {
          padding-bottom: 20px;
        }
        
        /* Service image container with rounded corners */
        .service-image-container {
          border-radius: 1rem;
        }
        
        /* Service card image */
        .service-card .service-image-container img {
          opacity: 1;
  transition: opacity 0.6s ease-in-out; /* smooth fade */
  border-radius: 1rem;
        }
        
        .service-card:hover .service-image-container :global(img) {
  opacity: 0;
  pointer-events: none;
}
        
        /* Slight dark overlay on image only (not affecting text) */
        .service-card .service-image-container::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(0, 0, 0, 1) 0%,   /* very dark at bottom */
                rgba(0, 0, 0, 0.2) 40%,  /* mid-dark lower */
                rgba(0, 0, 0, 0.1) 70%,  /* lighter */
                rgba(0, 0, 0, 0) 100%   /* transparent at top */
            );
            border-radius: 1rem;
            z-index: 2;
            transition: background 0.5s ease-in-out;
        }
        
        /* Next.js puts the img inside a span — fade it out */
            .service-image-container :global(img) {
            opacity: 1;
            transition: opacity 0.6s ease-in-out;
            border-radius: 1rem;
            }



        /* Hover effect for service card - golden gradient */

        .service-card:hover .service-image-container::before {
          background: linear-gradient(
                to top,
                rgba(0, 0, 0, 1) 0%,   /* keep dark bottom for text visibility */
                rgba(0, 0, 0, 0.5) 40%,  /* strong golden */
                rgba(253,197,26, 0.7) 70%,  /* fade */
                rgba(253,197,26,1) 100%  /* light top */
            );
        }
        
        /* Hover border effect */
        .service-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          border-radius: 1rem;
          z-index: 15;
          transition: all 0.5s ease;
          pointer-events: none;
        }
        
        .service-card:hover::after {
          border-color: #fdc51a;
          opacity: 1;
        }
        
        /* Enhanced content styling for better visibility */
        .service-icon {
          filter: drop-shadow(0 3px 6px rgba(21, 21, 21, 0.7));
        }
        
        .service-title {
          filter: drop-shadow(0 3px 6px rgba(0,0,0,0.8));
          text-shadow: 0 2px 8px rgba(0,0,0,0.9);
          font-weight: 700;
          white-space: pre-line;     /* preserve line breaks */
  display: block;
        }
        
        /* Icons are white by default with stronger contrast */
        .service-icon img {
          filter: brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.7));
          background: transparent !important;
        }
        
        /* Change to black on hover */
        .service-card:hover .service-content {
          color: black;
        }
        .service-content {
        position: relative;
        z-index: 5; /* keep text & icons above the overlay */
        }
        
        
        .service-card:hover .service-indicator {
          background: black;
        }
        
        
        .service-card:hover .service-indicator {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Navigation button styles - centered with no borders */
        .navigation-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 2.5rem;
        }
        
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          position: relative;
          z-index: 50; 
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: linear-gradient(135deg, #27293bff, #fdc51a); /* classic deep gradient */
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 1);
            cursor: pointer;
        }
        
        .swiper-button-prev-custom:focus,
        .swiper-button-next-custom:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        
        .swiper-button-prev-custom::after,
        .swiper-button-next-custom::after {
          content: none;
        }
        
        @media (max-width: 768px) {
          .service-card {
            margin: 0 4px;
          }
          
          .service-card .absolute.inset-0.flex {
            padding: 1rem;
          }
          
          .service-card h3 {
            font-size: 1.4rem;
          }
          
          .service-card .service-icon {
            width: 40px;
            height: 40px;
          }
          
          /* Adjust navigation spacing on mobile */
          .navigation-container {
            margin-top: 2rem;
          }
          
          .space-x-6 {
            column-gap: 1.2rem;
          }
          

          /* Smaller navigation icons on mobile */
          .swiper-button-prev-custom img,
          .swiper-button-next-custom img {
           filter: brightness(0) invert(1) drop-shadow(0 0 4px rgba(255,255,255,0.6));
            width: 22px;
            height: 22px;
            transition: transform 0.3s ease, filter 0.3s ease;
          
        }
        /* Hover effect - golden glow */
        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
        background: linear-gradient(135deg, #fdc51a, #e6a400);
        box-shadow: 0 6px 16px rgba(253, 197, 26, 0.5);
        transform: scale(1.1);
        }
        .swiper-button-prev-custom:hover img,
        .swiper-button-next-custom:hover img {
        filter: brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.9));
        transform: scale(1.2);
        }
        /* Custom animations */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .service-card:hover {
          /*animation: slideInUp 0.3s ease-out;*/
        }
        
        /* Smooth scroll behavior */
        .services-swiper {
          scroll-behavior: smooth;
        }
        
        /* Swiper navigation adjustments */
        .services-swiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .services-swiper .swiper-button-disabled img {
          opacity: 0.3;
        }
        .swiper-wrapper {
        display: flex !important;
        }

      `}</style>
    </section>
  );
}