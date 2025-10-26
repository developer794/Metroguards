'use client';
import { useState } from 'react';
import { Shield, Eye, Users, Clock, User, Zap, CheckCircle, Award, Phone, MapPin, Building, Home, Book, Calendar, Landmark, Wrench, AlertTriangle, UserX, Search, Lock, Target, Camera, Bell, UserCheck, Flame, Star } from 'lucide-react';
import Layout from "@/components/layout/Layout"
import Gallery4 from "@/components/ui/gallery4"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe';

export default function StaticSecurityPage() {
    const [activeService, setActiveService] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeFeature, setActiveFeature] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const toggleFeature = (index) => {
        setActiveFeature(activeFeature === index ? null : index);
    };

    const services = [
        {
            title: "15+ Years of Experience",
            icon: <Building size={24} />,
            iconSymbol: <Building size={24} />,
            description: "Securing Melbourne's buildings with consistency and care.",
        },
        {
            title: "Fully Licensed", 
            icon: <Home size={24} />,
            iconSymbol: <Home size={24} />,
            description: "Compliant with all Victorian security and labour hire laws.",
        },
        {
            title: "ISO Certified",
            icon: <CheckCircle size={24} />,
            iconSymbol: <CheckCircle size={24} />,
            description: "Meeting international standards for quality, safety, and environment.",
        },
        {
            title: "CM3 & ASIAL Approved",
            icon: <Award size={24} />,
            iconSymbol: <Award size={24} />,
            description: "Independently verified for compliance and professionalism.",
        },
        {
            title: "Award-Winning Service",
            icon: <Star size={24} />,
            iconSymbol: <Star size={24} />,
            description: "Recognised for reliability and outstanding client support.",
        },
        {
            title: "Local Management",
            icon: <MapPin size={24} />,
            iconSymbol: <MapPin size={24} />,
            description: "Melbourne-based supervisors who respond quickly when you need them.",
        },
    ];

    const securityFeatures = [
        {
            title: "On-site Patrols",
            icon: <Target size={24} />,
            iconSymbol: <Target size={24} />,
            description: "Regular patrols of building surroundings to provide safety and deter criminal activities",
            details: "Our guards monitor the building by regularly patrolling the surroundings to provide safety and deter criminal activities. Our security guards also ensure the safety of the expensive materials and supplies on the construction sites, and they monitor and protect all tools and machinery to prevent business losses."
        },
        {
            title: "Static Guards",
            icon: <User size={24} />,
            iconSymbol: <User size={24} />,
            description: "Dedicated guards managing entry points and monitoring visitors 24/7",
            details: "Hiring static guards is also a practical option for businesses and commercial complexes. Our static building guards manage the entry points and gate access and monitor the visitors and surroundings 24/7. They are highly trained to respond to and control unexpected incidents and protect people."
        },
        {
            title: "CCTV Surveillance",
            icon: <Camera size={24} />,
            iconSymbol: <Camera size={24} />,
            description: "24/7 monitoring of visitors and identification of unusual activity",
            details: "Our security integrates technology to provide 24/7 commercial and residential building surveillance. Our building security guards in Melbourne monitor visitors, trespassers, and guests to identify unusual activity and ensure safety."
        },
        {
            title: "Alarm & Emergency Response",
            icon: <Bell size={24} />,
            iconSymbol: <Bell size={24} />,
            description: "Immediate response to fire, medical, or security alarms",
            details: "Our guards immediately respond to any fire, medical, smoke, or threat alarm and evacuate the building's tenants, employees, workers, and others under strict security protocol. They are well-disciplined and manage unexpected situations with calm and exceptional attention."
        },
        {
            title: "Visitor Management",
            icon: <UserCheck size={24} />,
            iconSymbol: <UserCheck size={24} />,
            description: "Professional handling of visitor logs, ID checks, and access control",
            details: "Our guards are highly trained to manage visitors at the building's entry and exit points. They maintain a visitors' log, check IDs, and manage controlled access to commercial, residential and industrial building premises."
        },
        {
            title: "Fire Safety and Evacuation",
            icon: <Flame size={24} />,
            iconSymbol: <Flame size={24} />,
            description: "Trained evacuation procedures and special needs assistance",
            details: "Our building security guards are swift in making decisions and taking action. They are professionally trained to handle people with special needs efficiently in such situations. Once, a fire broke out in an apartment complex. Our guards managed the safe evacuation of the residents and alerted the authorities immediately, resulting in no loss."
        }
    ];

    const faqData = [
        {
            question: "What types of building security services do you provide?",
            answer: "We provide comprehensive building security services including commercial building security, residential building security, on-site patrols, static guards, CCTV surveillance, alarm response, visitor management, and fire safety evacuation services."
        },
        {
            question: "Are your building security guards licensed and trained?",
            answer: "Yes, all our building security guards are licensed and undergo rigorous training in emergency response, crowd control, first aid, and property-related security protocols. They also undergo extensive background checks before being hired."
        },
        {
            question: "Do you provide 24/7 building security services?",
            answer: "Yes, we provide 24/7 surveillance and safety services for both commercial and residential buildings. Our guards are available around the clock to ensure continuous protection of your property and people."
        },
        {
            question: "What technology do you use for building security?",
            answer: "We integrate cutting-edge technology including CCTV surveillance systems, modern communication tools, and advanced surveillance equipment to provide comprehensive building security with real-time monitoring and incident reporting."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="STATIC SECURITY GUARDS"
                mainTitle="STATIC SECURITY GUARDS IN MELBOURNE"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Static%20Secuirty%20Guards/AF728EFE-11D1-4965-8948-52919A2FEB8C_1_105_c.webp"
                
            >
                <div>
                    {/*===== Modern Hero Section =====*/}
                    <div className="hero-section position-relative" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-6">
                                    <div className="hero-content" style={{textAlign: 'left'}}>
                                        <div className="subtitle mb-4">
                                            <span 
                                                className="badge px-4 py-2" 
                                                style={{
                                                    backgroundColor: '#fdc51a', 
                                                    color: '#1e2247', 
                                                    fontWeight: '600',
                                                    fontSize: '0.85rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    borderRadius: '25px'
                                                }}
                                            >
                                                PROFESSIONAL PROTECTION
                                            </span>
                                        </div>
                                        <h1 
                                            className="display-3 fw-bold mb-4" 
                                            style={{
                                                color: '#1e2247',
                                                lineHeight: '1.1',
                                                fontSize: '3rem'
                                            }}
                                        >
                                           Protection That Feels Personal  <br />
                                            <span style={{color: '#fdc51a'}}>Luxury</span>
                                        </h1>
                                        <p 
                                            className="lead mb-4" 
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem', 
                                                lineHeight: '1.6',
                                                maxWidth: '500px'
                                            }}
                                        >
                                           You trust us with what matters most, your people, your property, your peace of mind. At Metro Guards, we take that responsibility as personally as family. We protect your site the way we would protect our own, with patience, precision, and pride.
                                            <br/><br/>Every decision we make carries your long-term safety in mind. Not just for today’s shift, but for every night after, every contract renewed through trust, not convenience. When our static security guards stand post, they represent your calm, your reputation, and your standards.
                                            </p>
                                        
                                        <div className="hero-buttons d-flex flex-wrap gap-3 flex-column flex-md-row">
                                                <a 
                                                    href="/get-quotation" 
                                                className="btn btn-primary px-5 py-3"
                                                    style={{
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                        border: 'none',
                                                    borderRadius: '10px',
                                                        textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 15px rgba(253, 197, 26, 0.3)'
                                                }}
                                            >
                                                GET QUOTATION
                                                </a>
                                                <a 
                                                    href="tel:1300731173" 
                                                className="btn btn-outline-dark px-5 py-3"
                                                    style={{
                                                    borderColor: '#1e2247',
                                                    color: '#1e2247',
                                                    borderRadius: '10px',
                                                        textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.3s ease',
                                                    borderWidth: '2px'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#1e2247';
                                                    e.target.style.color = 'white';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.color = '#1e2247';
                                                }}
                                            >
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <Phone size={16}/> 1300731173
                                                </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div className="col-lg-6">
                                    <div className="hero-image position-relative mt-5 mt-lg-0">
                                        <div 
                                            className="image-container position-relative"
                                            style={{
                                                borderRadius: '25px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                                            }}
                                        >
                                            <img 
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Static%20Secuirty%20Guards/FF0D3949-7DA9-4A0F-8B9D-B24F71BAE8D2_1_105_c.webp" 
                                                alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: '700px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Decorative Elements */}
                                        <div 
                                            className="decoration-circle position-absolute"
                                            style={{
                                                top: '-20px',
                                                left: '-20px',
                                                width: '100px',
                                                height: '100px',
                                                backgroundColor: '#fdc51a',
                                                borderRadius: '50%',
                                                opacity: '0.1',
                                                zIndex: '-1'
                                            }}
                                        ></div>
                                        <div 
                                            className="decoration-square position-absolute"
                                            style={{
                                                bottom: '-30px',
                                                right: '-30px',
                                                width: '80px',
                                                height: '80px',
                                                backgroundColor: '#1e2247',
                                                borderRadius: '15px',
                                                opacity: '0.1',
                                                zIndex: '-1'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*=====  Services Section =====*/}
                    <div className="services-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 15% 25%, rgba(253, 197, 26, 0.05) 0%, transparent 50%),
                                radial-gradient(circle at 85% 75%, rgba(30, 34, 71, 0.03) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '120px',
                            height: '120px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '8%',
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row align-items-center g-5">
                                {/* Left Column - Enhanced Image Section */}
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="services-image-section">
                                        <div className="image-container position-relative">
                                            {/* Main Image */}
                                            <div style={{
                                                position: 'relative',
                                                borderRadius: '25px',
                                                overflow: 'hidden',
                                                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                                                transform: 'perspective(1000px) rotateY(-5deg)',
                                                transition: 'all 0.4s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
                                                e.currentTarget.style.boxShadow = '0 35px 70px rgba(0,0,0,0.2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)';
                                                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                                            }}>
                                            <img 
                                                src="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Static%20Secuirty%20Guards/B2A740BC-4957-41CE-9820-9D0F8AD63CC2_1_105_c.webp" 
                                                alt="Professional Building Security Guards" 
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                        height: '550px',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />
                                                
                                                {/* Image Overlay */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1) 0%, transparent 50%, rgba(253, 197, 26, 0.1) 100%)',
                                                    zIndex: 1
                                                }}></div>
                                </div>

                                            {/* Floating Stats Cards */}
                                            
                                           
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Enhanced Content Section */}
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="services-content">
                                        {/* Header Section */}
                                        <div className="section-header mb-5">
                                            <h2 style={{ 
                                                color: "#1e2247", 
                                                fontSize: "3.2rem",
                                                fontWeight: "800",
                                                marginBottom: "25px",
                                                lineHeight: "1.2",
                                                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                            }}>
                                                Security That Serves, Not Sells
                                            </h2>
                                            
                                            <p style={{ 
                                                color: "#6c757d", 
                                                fontSize: "1.2rem",
                                                lineHeight: "1.8",
                                               
                                            }}>
                                                We don’t ask you to choose Metro Guards. We ask you to choose the right security partner. Whether that’s us or someone else, the right choice is the one that listens, understands, and truly aligns with your needs.
                                                <br/><br/>Our static security services are designed around people, not packages. We invite you to reach out, talk about your site, and explore solutions, even if you don’t end up hiring us. Because real security begins with understanding, not obligation.

                                                </p>
                                            
                                        </div>

                                      

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

					{/*===== Quiet Strength Section =====*/}
					<div className="quiet-strength-section section-padding" style={{
						background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
						position: 'relative',
						overflow: 'hidden'
					}}>
						{/* Background Pattern */}
						<div style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundImage: `
								radial-gradient(circle at 20% 30%, rgba(253, 197, 26, 0.08) 0%, transparent 50%),
								radial-gradient(circle at 80% 70%, rgba(30, 34, 71, 0.06) 0%, transparent 50%)
							`,
							zIndex: 1
						}}></div>

						{/* Decorative Elements */}
						<div style={{
							position: 'absolute',
							top: '10%',
							right: '6%',
							width: '110px',
							height: '110px',
							background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.12), transparent)',
							borderRadius: '50%',
							zIndex: 1
						}}></div>
						<div style={{
							position: 'absolute',
							bottom: '12%',
							left: '8%',
							width: '85px',
							height: '85px',
							background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1), transparent)',
							borderRadius: '50%',
							zIndex: 1
						}}></div>

						<div className="container" style={{ position: 'relative', zIndex: 2 }}>
							<div className="row justify-content-center g-4">
								<div className="col-lg-6">
									<div style={{
										background: '#ffffff',
										borderRadius: '20px',
										padding: '45px 40px',
										border: '2px solid rgba(30, 34, 71, 0.1)',
										boxShadow: '0 20px 45px rgba(30, 34, 71, 0.08)'
									}}>
										<h2 style={{
											color: '#1e2247',
											fontSize: '3rem',
											fontWeight: 800,
											lineHeight: 1.2,
											marginBottom: '18px'
										}}>
											The Quiet Strength of <span style={{color: '#fdc51a'}}>Static Protection</span>
										</h2>
										<p style={{
											color: '#6c757d',
											fontSize: '1.15rem',
											lineHeight: 1.8,
											margin: 0
										}}>
											Static security isn’t about standing still. It’s about staying aware, a presence that protects without pressing, that reassures without restricting. Our static security guards in Melbourne are trained to blend discipline with empathy. They notice what others overlook, act when others hesitate, and hold composure when pressure peaks. They don’t just occupy space, they uphold safety as a living, breathing standard.
										</p>
									</div>
								</div>
								<div className="col-lg-6">
									<div style={{
										background: '#ffffff',
										borderRadius: '20px',
										padding: '45px 40px',
										border: '2px solid rgba(253, 197, 26, 0.25)',
										boxShadow: '0 20px 45px rgba(253, 197, 26, 0.12)'
									}}>
										<h2 style={{
											color: '#1e2247',
											fontSize: '3rem',
											fontWeight: 800,
											lineHeight: 1.2,
											marginBottom: '18px'
										}}>
											15 Years of <span style={{color: '#fdc51a'}}>Steady Eyes</span> and Reliable Hands
										</h2>
										<p style={{
											color: '#6c757d',
											fontSize: '1.15rem',
											lineHeight: 1.8,
											margin: 0
										}}>
											For over 15 years, Metro Guards has stood watch across Melbourne, from high-rise offices and construction sites to logistics yards and private facilities. We’ve seen what makes a site secure and what makes a client stay. Experience taught us that the best protection is quiet consistency, guards who adapt, anticipate, and never lose focus no matter the hour or environment. Every guard we deploy carries that same discipline. Every shift, that same standard.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/*===== Standards Section =====*/}
                    <div className="standards-section section-padding" style={{
                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 20% 30%, rgba(253, 197, 26, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(253, 197, 26, 0.08) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '150px',
                            height: '150px',
                            background: 'rgba(253, 197, 26, 0.1)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Section Header */}
                            <div className="row mb-5">
                                <div className="col-lg-10 mx-auto text-center">
                                    <div style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "15px",
                                        marginBottom: "30px"
                                    }}>
                                        <div style={{
                                            width: "50px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                                            borderRadius: "2px"
                                        }}></div>
                                        <span className="badge px-4 py-2" style={{
                                            background: "linear-gradient(135deg, #fdc51a, #ffdb5c)",
                                            color: "#1e2247",
                                            fontWeight: 700,
                                            fontSize: "0.85rem",
                                            borderRadius: "30px",
                                            textTransform: "uppercase",
                                            letterSpacing: "2px",
                                            boxShadow: "0 8px 25px rgba(253, 197, 26, 0.3)"
                                        }}>
                                            <i className="fas fa-award me-2"></i>
                                            Proven Excellence
                                        </span>
                                        <div style={{
                                            width: "50px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #ffdb5c, #fdc51a)",
                                            borderRadius: "2px"
                                        }}></div>
                                    </div>

                                    <h2 style={{
                                        color: '#ffffff',
                                        fontSize: '3rem',
                                        fontWeight: '800',
                                        marginBottom: '25px',
                                        lineHeight: '1.2'
                                    }}>
                                        Built on Integrity,  <span style={{color: '#fdc51a'}}>Backed by Evidence</span>
                                    </h2>

                                    <p style={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: '1.2rem',
                                        lineHeight: '1.8',
                                        maxWidth: '750px',
                                        margin: '0 auto'
                                    }}>
                                        From the first briefing to the final handover, every action is accountable, every guard verified, every report traceable. And   <strong style={{color: '#fdc51a'}}>our standards</strong>include:.
                                    </p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="row g-4">
                                {/* Feature 1 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(253, 197, 26, 0.2)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-route" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            GPS-tracked patrols
                                        </h3>

                                        
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(30, 34, 71, 0.15)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-file-alt" style={{color: '#fdc51a', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                             Real-time incident reporting
                                        </h3>

                                       
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(253, 197, 26, 0.2)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-user-tie" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                           Supervisor inspections
                                        </h3>

                                        
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(30, 34, 71, 0.15)';
                                        e.currentTarget.style.borderColor = '#1e2247';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(30, 34, 71, 0.3)'
                                        }}>
                                            <i className="fas fa-shield-alt" style={{color: '#fdc51a', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            ISO-certified operations
                                        </h3>

                                        
                                    </div>
                                </div>

                                {/* Feature 5 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(253, 197, 26, 0.2)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-certificate" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            CM3 Prequalification
                                        </h3>

                                        
                                    </div>
                                </div>
                                {/* Feature 6 */}
                                <div className="col-lg-4 col-md-6">
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '20px',
                                        padding: '40px 35px',
                                        height: '100%',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(253, 197, 26, 0.2)';
                                        e.currentTarget.style.borderColor = '#fdc51a';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(253, 197, 26, 0.2)';
                                    }}>
                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '15px',
                                            background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '25px',
                                            boxShadow: '0 10px 25px rgba(253, 197, 26, 0.3)'
                                        }}>
                                            <i className="fas fa-award" style={{color: '#1e2247', fontSize: '32px'}}></i>
                                        </div>

                                        <h3 style={{
                                            color: '#1e2247',
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            ASIAL Membership
                                        </h3>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Relationship Section =====*/}
                    <div className="relationship-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 25% 35%, rgba(253, 197, 26, 0.08) 0%, transparent 50%),
                                radial-gradient(circle at 75% 65%, rgba(30, 34, 71, 0.05) 0%, transparent 50%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '15%',
                            right: '8%',
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.1), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '10%',
                            left: '5%',
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            {/* Section Header */}
                            <div className="row mb-5">
                                <div className="col-lg-10 mx-auto text-center">
                                    <div style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "15px",
                                        marginBottom: "30px"
                                    }}>
                                        <div style={{
                                            width: "50px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #fdc51a, #ffdb5c)",
                                            borderRadius: "2px"
                                        }}></div>
                                        <span className="badge px-4 py-2" style={{
                                            background: "linear-gradient(135deg, #fdc51a, #ffdb5c)",
                                            color: "#1e2247",
                                            fontWeight: 700,
                                            fontSize: "0.85rem",
                                            borderRadius: "30px",
                                            textTransform: "uppercase",
                                            letterSpacing: "2px",
                                            boxShadow: "0 8px 25px rgba(253, 197, 26, 0.3)"
                                        }}>
                                            <i className="fas fa-handshake me-2"></i>
                                            Our Commitment
                                        </span>
                                        <div style={{
                                            width: "50px",
                                            height: "3px",
                                            background: "linear-gradient(90deg, #ffdb5c, #fdc51a)",
                                            borderRadius: "2px"
                                        }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="row g-4">
                                {/* First Block - Full Width Highlighted */}
                                <div className="col-lg-12">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e2247 0%, #2c3e50 100%)',
                                        borderRadius: '25px',
                                        padding: '50px 45px',
                                        border: '2px solid rgba(30, 34, 71, 0.2)',
                                        boxShadow: '0 25px 50px rgba(30, 34, 71, 0.15)'
                                    }}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-2 text-center mb-4 mb-lg-0">
                                                <div style={{
                                                    width: '90px',
                                                    height: '90px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto',
                                                    boxShadow: '0 15px 35px rgba(253, 197, 26, 0.4)'
                                                }}>
                                                    <i className="fas fa-users" style={{color: '#1e2247', fontSize: '42px'}}></i>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <h2 style={{
                                                    color: '#ffffff',
                                                    fontSize: '2.8rem',
                                                    fontWeight: 800,
                                                    lineHeight: 1.2,
                                                    marginBottom: '20px'
                                                }}>
                                                    A Relationship, Not a <span style={{color: '#fdc51a'}}>Roster</span>
                                                </h2>
                                                <p style={{
                                                    color: 'rgba(255, 255, 255, 0.95)',
                                                    fontSize: '1.15rem',
                                                    lineHeight: 1.8,
                                                    margin: 0
                                                }}>
                                                    You're never just another client. Every site has a pulse, a rhythm, a story, and our guards learn it. They adapt to your environment, work in harmony with your people, and build familiarity that turns vigilance into comfort.
                                                    <br/><br/>
                                                    We don't measure success by how many incidents we stop, but by how steady your workplace feels. <strong style={{color: '#fdc51a'}}>Calm is our product; protection is our craft.</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Block - Feature Cards */}
                                <div className="col-lg-12">
                                    <div style={{
                                        background: '#ffffff',
                                        borderRadius: '25px',
                                        padding: '45px 40px',
                                        border: '2px solid rgba(253, 197, 26, 0.2)',
                                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
                                    }}>
                                        <h2 style={{
                                            color: '#1e2247',
                                            fontSize: '2.8rem',
                                            fontWeight: 800,
                                            lineHeight: 1.2,
                                            marginBottom: '35px',
                                            textAlign: 'center'
                                        }}>
                                            Why Businesses Stay With <span style={{color: '#fdc51a'}}>Metro Guards</span>
                                        </h2>
                                        
                                        <div className="row g-4">
                                            <div className="col-lg-4 col-md-6">
                                                <div style={{
                                                    background: '#f8f9fa',
                                                    borderRadius: '15px',
                                                    padding: '30px 25px',
                                                    textAlign: 'center',
                                                    height: '100%',
                                                    transition: 'all 0.3s ease',
                                                    border: '2px solid rgba(30, 34, 71, 0.1)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                                    e.currentTarget.style.borderColor = '#fdc51a';
                                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.3)';
                                                    e.currentTarget.style.background = '#ffffff';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.1)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                    e.currentTarget.style.background = '#f8f9fa';
                                                }}>
                                                    <div style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        borderRadius: '12px',
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 20px',
                                                        boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="fas fa-shield-alt" style={{color: '#1e2247', fontSize: '28px'}}></i>
                                                    </div>
                                                    <h4 style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.3rem',
                                                        fontWeight: 700,
                                                        marginBottom: '12px'
                                                    }}>
                                                        Reliability
                                                    </h4>
                                                    <p style={{
                                                        color: '#6c757d',
                                                        fontSize: '1rem',
                                                        lineHeight: 1.6,
                                                        margin: 0
                                                    }}>
                                                        Consistent service that doesn't need reminders or excuses
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div style={{
                                                    background: '#f8f9fa',
                                                    borderRadius: '15px',
                                                    padding: '30px 25px',
                                                    textAlign: 'center',
                                                    height: '100%',
                                                    transition: 'all 0.3s ease',
                                                    border: '2px solid rgba(30, 34, 71, 0.1)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                                    e.currentTarget.style.borderColor = '#fdc51a';
                                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.3)';
                                                    e.currentTarget.style.background = '#ffffff';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.1)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                    e.currentTarget.style.background = '#f8f9fa';
                                                }}>
                                                    <div style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        borderRadius: '12px',
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 20px',
                                                        boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="fas fa-heart" style={{color: '#1e2247', fontSize: '28px'}}></i>
                                                    </div>
                                                    <h4 style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.3rem',
                                                        fontWeight: 700,
                                                        marginBottom: '12px'
                                                    }}>
                                                        Respect
                                                    </h4>
                                                    <p style={{
                                                        color: '#6c757d',
                                                        fontSize: '1rem',
                                                        lineHeight: 1.6,
                                                        margin: 0
                                                    }}>
                                                        Guards who greet with warmth and act with professionalism
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6">
                                                <div style={{
                                                    background: '#f8f9fa',
                                                    borderRadius: '15px',
                                                    padding: '30px 25px',
                                                    textAlign: 'center',
                                                    height: '100%',
                                                    transition: 'all 0.3s ease',
                                                    border: '2px solid rgba(30, 34, 71, 0.1)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                                    e.currentTarget.style.borderColor = '#fdc51a';
                                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(253, 197, 26, 0.3)';
                                                    e.currentTarget.style.background = '#ffffff';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.borderColor = 'rgba(30, 34, 71, 0.1)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                    e.currentTarget.style.background = '#f8f9fa';
                                                }}>
                                                    <div style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        borderRadius: '12px',
                                                        background: 'linear-gradient(135deg, #fdc51a, #ffdb5c)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 20px',
                                                        boxShadow: '0 8px 20px rgba(253, 197, 26, 0.3)'
                                                    }}>
                                                        <i className="fas fa-star" style={{color: '#1e2247', fontSize: '28px'}}></i>
                                                    </div>
                                                    <h4 style={{
                                                        color: '#1e2247',
                                                        fontSize: '1.3rem',
                                                        fontWeight: 700,
                                                        marginBottom: '12px'
                                                    }}>
                                                        Quiet Excellence
                                                    </h4>
                                                    <p style={{
                                                        color: '#6c757d',
                                                        fontSize: '1rem',
                                                        lineHeight: 1.6,
                                                        margin: 0
                                                    }}>
                                                        Quality that shows up even when no one's watching
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{
                                            marginTop: '35px',
                                            padding: '25px 30px',
                                            background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                                            borderRadius: '15px',
                                            borderLeft: '4px solid #fdc51a'
                                        }}>
                                            <p style={{
                                                color: '#1e2247',
                                                fontSize: '1.15rem',
                                                lineHeight: 1.7,
                                                margin: 0,
                                                fontStyle: 'italic'
                                            }}>
                                                <strong style={{color: '#fdc51a'}}>Professionalism isn't loud. It's consistent.</strong> And that consistency is what makes safety sustainable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    {/*===== Call to Action Section =====*/}
                    <div className="cta-section section-padding" style={{
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 20% 30%, rgba(30, 34, 71, 0.08) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(253, 197, 26, 0.12) 0%, transparent 50%),
                                radial-gradient(circle at 50% 50%, rgba(30, 34, 71, 0.03) 0%, transparent 70%)
                            `,
                            zIndex: 1
                        }}></div>

                        {/* Floating Shapes */}
                        <div style={{
                            position: 'absolute',
                            top: '8%',
                            left: '3%',
                            width: '140px',
                            height: '140px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.1), rgba(253, 197, 26, 0.05))',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '12%',
                            right: '5%',
                            width: '180px',
                            height: '180px',
                            background: 'linear-gradient(135deg, rgba(253, 197, 26, 0.15), rgba(30, 34, 71, 0.05))',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            right: '15%',
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, rgba(30, 34, 71, 0.08), transparent)',
                            borderRadius: '50%',
                            zIndex: 1,
                            transform: 'translateY(-50%)'
                        }}></div>

                        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="row justify-content-center">
                                <div className="col-lg-10 col-xl-8">
                                    <div className="cta-content text-center">
                                        {/* Header */}
                                        <div className="cta-header mb-5">
                                            <div style={{ 
                                                display: "inline-flex", 
                                                alignItems: "center", 
                                                gap: "15px", 
                                                marginBottom: "30px",
                                                justifyContent: "center"
                                            }}>
                                                <div style={{
                                                    width: "60px",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, #1e2247, #2c3e50)",
                                                    borderRadius: "2px"
                                                }}></div>
                                                <span className="badge px-4 py-2" style={{ 
                                                    background: "linear-gradient(135deg, #1e2247, #2c3e50)", 
                                                    color: "#fdc51a", 
                                                    fontWeight: 700,
                                                    fontSize: "0.9rem",
                                                    borderRadius: "25px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "1px",
                                                    boxShadow: "0 6px 20px rgba(30, 34, 71, 0.25)"
                                                }}>
                                                    <i className="fas fa-store me-2"></i>
                                                    Melbourne's Trusted Choice
                                                </span>
                                                <div style={{
                                                    width: "60px",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, #1e2247, #2c3e50)",
                                                    borderRadius: "2px"
                                                }}></div>
                                            </div>
                                            
                                            <h2 style={{
                                                color: '#1e2247',
                                                fontSize: '3.5rem',
                                                fontWeight: '800',
                                                marginBottom: '25px',
                                                lineHeight: '1.2',
                                                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                            }}>
                                                Let’s Talk About <span style={{color: '#fdc51a'}}>Your Site</span>
                                            </h2>
                                            
                                            <p style={{
                                                color: '#6c757d',
                                                fontSize: '1.2rem',
                                                lineHeight: '1.8',
                                                marginBottom: '40px',
                                                maxWidth: '800px',
                                                margin: '0 auto 40px'
                                            }}>
                                                If you’re considering static security guards in Melbourne, let’s start with a conversation — no pressure, no pitch. Just a clear understanding of what will make your site safer, steadier, and simpler to manage. We believe our quality should speak for itself, not through incentives. That’s the Metro Guards way — clarity, confidence, and care that lasts.
                                            </p>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="cta-buttons mb-5">
                                            <div className="row g-3 justify-content-center">
                                                <div className="col-auto">
                                                    <a href="/get-quotation" className="btn btn-lg px-5 py-3" style={{
                                                        background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                                        color: '#ffffff',
                                                        fontWeight: '700',
                                                        borderRadius: '50px',
                                                        fontSize: '1.1rem',
                                                        border: 'none',
                                                        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)',
                                                        transition: 'all 0.3s ease',
                                                        textDecoration: 'none',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.transform = 'translateY(-3px)';
                                                        e.target.style.boxShadow = '0 12px 35px rgba(30, 34, 71, 0.4)';
                                                        e.target.style.background = 'linear-gradient(135deg, #fdc51a, #ffdb5c)';
                                                        e.target.style.color = '#1e2247';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.3)';
                                                        e.target.style.background = 'linear-gradient(135deg, #1e2247, #2c3e50)';
                                                        e.target.style.color = '#ffffff';
                                                    }}>
                                                        <i className="fas fa-file-alt"></i>
                                                        Get Your Free Quote
                                                    </a>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="tel:1300731173" className="btn btn-lg px-5 py-3" style={{
                                                        background: 'transparent',
                                                        color: '#1e2247',
                                                        fontWeight: '700',
                                                        borderRadius: '50px',
                                                        fontSize: '1.1rem',
                                                        border: '2px solid #1e2247',
                                                        transition: 'all 0.3s ease',
                                                        textDecoration: 'none',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.background = '#1e2247';
                                                        e.target.style.color = '#ffffff';
                                                        e.target.style.transform = 'translateY(-3px)';
                                                        e.target.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.25)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.background = 'transparent';
                                                        e.target.style.color = '#1e2247';
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = 'none';
                                                    }}>
                                                        <i className="fas fa-phone"></i>
                                                        Call 1300 73 11 73
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Benefits Section =====*/}
                                        
                    
                </div>
                    
                
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
            </> ) }