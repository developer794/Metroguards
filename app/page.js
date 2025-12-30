'use client';
import Layout from "@/components/layout/Layout"
import { Store, ShoppingCart, Warehouse, Gem, Building2, Hospital } from 'lucide-react';

import About from "@/components/homepages/home1/About"
import About2 from "@/components/homepages/home1/About2"
import Blog from "@/components/homepages/home1/Blog"
import CaseStudy from "@/components/homepages/home1/CaseStudy"
//import Pricing from "@/components/homepages/home1/Pricing"

import TaxBusiness from "@/components/homepages/home1/TaxBusiness"
import Testimonial from "@/components/homepages/home1/Testimonial"
import Welcome from "@/components/homepages/home1/Welcome"
import { Hero } from "@/components/ui/hero-1";
import ServicesSlider from "@/components/homepages/home1/Services";
import Services4 from "@/components/ui/services4";
import { MarqueeDemo } from "@/components/ui/marquee-demo";
import Awareness from "@/components/homepages/home1/Awareness";
import Location from "@/components/homepages/home1/Location";

import FindOut from "@/components/homepages/home1/FindOut";
import GoodPeople from "@/components/homepages/home1/GoodPeople";
import HeroSection from "@/components/homepages/home1/hero-section";
import Blog4 from "@/components/blog/Blog4";
import Accreditation from "@/components/accreditation"
import Industry from "@/components/homepages/home1/industry";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import NewHero from "@/components/new-hero";
import WhyTrustUs from "@/components/homepages/home1/WhyTrustUs";
import SecurityChallenges from "@/components/homepages/home1/SecurityChallenges";
import ProcessSteps from "@/components/homepages/home1/ProcessSteps";
import AboutMetroGuards from "@/components/homepages/home1/AboutMetroGuards";
import FAQSection from "@/components/homepages/home1/FAQSection";
import Subscribe from '@/components/homepages/home1/Subscribe';


/*<Hero 
                title={["Protect.", "Secure.", "Trust."]}
                subtitle="SECURITY SERVICES "
                eyebrow="Metro Guards Security Services"
                ctaLabel="Contact Us Now"
                ctaHref="/contact-us"
                />*/

export default function Page() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
               <NewHero />
                
            
                
                <GoodPeople />
                <Services4 />
                <WhyTrustUs />
                <SecurityChallenges />
                <ProcessSteps />
                <Location />
                <AboutMetroGuards />
                <Accreditation />
                <Industry />
                <MarqueeDemo />
                <VideoSection />
                <Blog4 />
                
                <Awareness />
                
                
                
                
                 
                <Testimonials />
                <FAQSection />
                <Subscribe />
            </Layout>
            
            <style jsx>{`
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .industry-card:hover {
                    transform: translateY(-10px) !important;
                }
                
                .industry-card:hover .industry-icon {
                    transform: scale(1.1);
                }
            `}</style>
        </>
    )
}