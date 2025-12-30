'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout"
import WhyChooseUs from "@/components/ui/why-choose-us"
import Accreditation from '@/components/accrediation10'
import Subscribe from '@/components/homepages/home1/Subscribe'  
import "../contacts/contact-styles.css"
import { Shield, Users, Settings, Building, Zap, Star, CheckCircle, Target, Phone, FileText, MapPin, Award, Trophy } from 'lucide-react'

export default function PrivateSecurityPage() {
    const [activeService, setActiveService] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeTraining, setActiveTraining] = useState(null);
    const [activeLegal, setActiveLegal] = useState(null);
    const [activeHiring, setActiveHiring] = useState(null);
    const [activeAdvantage, setActiveAdvantage] = useState(null);

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const toggleTraining = (index) => {
        setActiveTraining(activeTraining === index ? null : index);
    };

    const toggleLegal = (index) => {
        setActiveLegal(activeLegal === index ? null : index);
    };

    const toggleHiring = (index) => {
        setActiveHiring(activeHiring === index ? null : index);
    };

    const toggleAdvantage = (index) => {
        setActiveAdvantage(activeAdvantage === index ? null : index);
    };

    const services = [
        {
            title: "Experienced Security Professionals",
            icon: <Award size={24} />,
            iconSymbol: <Award size={24} />,
            description: "When it comes to safeguarding your assets and ensuring the safety of your business or organization, experienced security professionals are indispensable.",
            details: "These seasoned experts have honed their skills through years of training and practical experience, making them well-equipped to handle a wide range of security challenges. Whether it's protecting your property, managing access control, or responding to emergencies, experienced security professionals are your first line of defense."
        },
        {
            title: "On-Demand Guard Services",
            icon: <Zap size={24} />,
            iconSymbol: <Zap size={24} />,
            description: "In a fast-paced world, security needs can arise at a moment's notice. On-demand guard services offer a flexible solution for businesses and individuals requiring immediate security support.",
            details: "These services allow you to quickly deploy trained security personnel whenever and wherever you need them, providing peace of mind and ensuring the safety of your assets."
        },
        {
            title: "Hire Skilled Security Guards",
            icon: <Users size={24} />,
            iconSymbol: <Users size={24} />,
            description: "When security is paramount, hiring skilled security guards is a wise investment. Skilled guards are trained to assess risks, prevent security breaches, and respond effectively in case of threats.",
            details: "By hiring individuals with the right expertise, you can maintain a secure environment for your property, employees, and visitors."
        },
        {
            title: "Top Security Staffing",
            icon: <Star size={24} />,
            iconSymbol: <Star size={24} />,
            description: "The success of any security operation begins with top-notch staffing. Top security staffing agencies specialize in recruiting, vetting, and placing the best security professionals in the industry.",
            details: "These agencies ensure that your security team consists of highly qualified and capable individuals who can meet your specific security needs."
        },
        {
            title: "Professional Guard Solutions",
            icon: <Shield size={24} />,
            iconSymbol: <Shield size={24} />,
            description: "For a comprehensive and professional security solution, consider enlisting the services of a guard provider. Professional guard solutions go beyond mere security personnel and include strategic planning, risk assessment, and tailored security strategies.",
            details: "These solutions are designed to safeguard your interests effectively with a holistic approach to security management."
        },
        {
            title: "Expert Security Personnel",
            icon: <Target size={24} />,
            iconSymbol: <Target size={24} />,
            description: "Security is a field that demands expertise and a deep understanding of potential threats. Expert security personnel bring a wealth of knowledge and skills to the table.",
            details: "They ensure that your security needs are met with precision and efficiency. Trust in their experience to protect what matters most."
        },
        {
            title: "Reliable Guard Services",
            icon: <CheckCircle size={24} />,
            iconSymbol: <CheckCircle size={24} />,
            description: "Reliability is key when it comes to security services. You need to have confidence that your guards will be there when you need them and that they will perform their duties with the utmost professionalism.",
            details: "Reliable guard services provide the peace of mind that your security is in capable hands."
        },
        {
            title: "Security Staff for Hire",
            icon: <Building size={24} />,
            iconSymbol: <Building size={24} />,
            description: "Hiring dedicated security staff can be a game-changer for businesses seeking to maintain a secure environment. Whether you need permanent or temporary security personnel, you can find the right security staff for hire.",
            details: "These professionals are tailored to suit your unique requirements and provide the security coverage you need."
        },
        {
            title: "Premier Private Security",
            icon: <Star size={24} />,
            iconSymbol: <Star size={24} />,
            description: "When exclusivity and exceptional service are of the essence, look to premier private security providers. These elite services offer customized security solutions for high-net-worth individuals, VIPs, and businesses.",
            details: "They require the highest level of protection with personalized security strategies."
        },
        {
            title: "Trained Guard Personnel",
            icon: <Award size={24} />,
            iconSymbol: <Award size={24} />,
            description: "The effectiveness of a security team is directly linked to the quality of their training. Trained guard personnel are well-versed in security protocols, emergency response, and conflict resolution.",
            details: "They make an invaluable asset in safeguarding your property and people with their comprehensive training and expertise."
        },
        {
            title: "On-Site Guard Experts",
            icon: <MapPin size={24} />,
            iconSymbol: <MapPin size={24} />,
            description: "Having on-site guard experts ensures that security is a proactive, not reactive, endeavor. These professionals are well-versed in the unique security challenges of your location.",
            details: "They are prepared to address any issues as they arise, minimizing risks and potential threats with their specialized knowledge of your specific environment."
        }
    ];

    const faqData = [
        {
            question: "What services do private security guards in Melbourne provide?",
            answer: "Private security guards in Melbourne, such as Metro Guards, provide a wide range of services including access control, patrolling, crowd management, CCTV monitoring, and rapid response to security incidents."
        },
        {
            question: "Are private security guards in Melbourne licensed and trained?",
            answer: "Yes, private security guards in Melbourne must be licensed and undergo extensive training in areas such as conflict resolution, first aid, and emergency response. Metro Guards ensures that all of their security personnel meet these requirements."
        },
        {
            question: "How can I hire private security guards from Metro Guards?",
            answer: "To hire private security guards from Metro Guards, simply contact their office and discuss your security needs. They will work with you to create a tailored security solution and provide well-trained guards to protect your property or event."
        }
    ];

    const trainingData = [
        {
            title: "Initial Training and Qualifications",
            description: "Before we can work as a security guard in Melbourne, we need to undergo the necessary training and obtain the required qualifications.",
            details: "This is crucial to ensure that we have the skills and knowledge needed to perform our job effectively and to the highest standards. Our comprehensive training program covers all essential security protocols, legal requirements, and practical skills necessary for professional security work."
        },
        {
            title: "Ongoing Training and Professional Development",
            description: "Once we have obtained our initial qualifications and secured our license, the learning doesn't stop there.",
            details: "As a security guard, it is important to continuously update our skills and knowledge through ongoing training and professional development. This could involve further certification in areas such as first aid, conflict resolution, and emergency procedures. Staying up-to-date with the latest industry standards and best practices will not only enhance our abilities but also ensure the safety and security of the people we are responsible for protecting."
        }
    ];

    const legalData = [
        {
            title: "Understanding Melbourne's Security Industry Legislation",
            description: "When working as a private security guard in Melbourne, Metro Guards is essential that we have a comprehensive understanding of the legislation that governs the industry.",
            details: "This includes the Private Security Act and the Security Agents Act, which outline the legal requirements for working in the security industry. It is important to stay updated on any changes to legislation, as non-compliance can result in serious legal repercussions for Metro Guard's work. Our team regularly reviews and updates our knowledge of these regulations to ensure full compliance."
        },
        {
            title: "Ethical Standards in Private Security",
            description: "As a private security guard, ethical conduct is paramount in every aspect of your work.",
            details: "This includes respecting the rights and dignity of all individuals, adhering to confidentiality and privacy guidelines, and maintaining a high level of professionalism at all times. By upholding these ethical standards, we not only protect our reputation and the reputation of the security industry, but we also contribute to a safer and more secure community in Melbourne."
        }
    ];

    const hiringData = [
        {
            title: "How to Choose the Right Security Firm",
            description: "When selecting a security firm, you should consider their reputation, experience, and the range of services they offer.",
            details: "Look for a company with a proven track record of delivering effective security solutions and satisfied clients. It is crucial to choose a security firm that has a thorough screening process and provides ongoing training to its guards to ensure they are equipped to handle any situation. Additionally, consider the specific security needs of your business or event and ensure that the firm you choose can provide tailored solutions to meet those needs."
        },
        {
            title: "Contract Guidelines and Expectations",
            description: "Before hiring a private security firm, it's essential to have a clear understanding of the contract guidelines and expectations.",
            details: "You should carefully review the terms and conditions of the contract, including the scope of services, pricing, and any additional costs. It's important to communicate your expectations with the security firm and ensure that they understand your specific security requirements. Discuss emergency response protocols, communication methods, and regular reporting to ensure that the security firm meets your expectations. By having a comprehensive understanding of the contract guidelines and expectations, you can establish a strong partnership with the security firm and ensure the safety and security of your property and assets."
        }
    ];

    const advantageData = [
        {
            title: "Professional & Trained Officers",
            description: "Highly professional and extensively trained security guards with ongoing development programs.",
            details: "Our security officers undergo rigorous training programs that cover all aspects of security work, from basic protocols to advanced threat assessment. We maintain the highest standards of professionalism and continuously invest in our team's development to ensure they remain at the forefront of security best practices."
        },
        {
            title: "Customized Security Solutions",
            description: "Personalized security solutions tailored to each client's specific needs for complete protection.",
            details: "We understand that every client has unique security requirements. Our team works closely with each client to develop customized security strategies that address their specific risks and challenges, ensuring optimal protection for their property, assets, and personnel."
        },
        {
            title: "24/7 Availability",
            description: "Round-the-clock security services ensuring continuous protection for your property and assets.",
            details: "Security threats don't follow a schedule, which is why we provide 24/7 availability for all our clients. Whether you need immediate response to an emergency or ongoing protection, our team is always ready to provide the security coverage you need, whenever you need it."
        }
    ];

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="TOP PRIVATE SECURITY GUARDS IN MELBOURNE"
                mainTitle="Professional Private Security Guards"
                subtitle="Elite Private Security Guards in Melbourne - Protecting What Matters Most"
            >
                <div>
                    {/*===== Modern Hero Section =====*/}
                    <div className="hero-section position-relative" style={{backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="hero-content">
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
                                                 MELBOURNE'S TRUSTED SECURITY PARTNER
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
                                            TOP PRIVATE<br />
                                            <span style={{color: '#fdc51a'}}>SECURITY GUARDS</span>
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
                                           You may not realize it, but when it comes to ensuring the safety and security of your property or event, private security guards play a crucial role in Melbourne. With the rising concerns about theft, vandalism, and violence, having a team of trained, qualified security guards and experienced security professionals can make all the difference. Metro Guards is a leading security company in Melbourne offering bespoke security solutions to meet your needs. By hiring Metro Guards, you can rest assured that your property, assets, and people are in safe hands. Our highly skilled guards are equipped to handle any challenging situation and provide you with peace of mind. Whether you need security for your business, construction site, retail store, or event, Metro Guards has got you covered. With our proactive approach to security, we strive to anticipate and prevent any potential threats, making your safety our top priority. 
                                        </p>
                                        
                                        
                                        <div className="hero-buttons d-flex flex-wrap gap-3">
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
                                            >
                                                 CALL US NOW
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
                                                src="/assets/img/blog/private guard.jpg" 
                                                alt="Professional Private Security Guards" 
                                                className="img-fluid"
                                                style={{
            width: '100%', 
                                                    height: '500px',
            objectFit: 'cover' 
                                                }}
                                            />
                                            
                                            
                                               
                                    </div>
                                            
                                            
            </div>
                                        
                                        
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Our Services Section =====*/}
                    <div className="services-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <div className="services-image-section pe-lg-4">
                                        <div className="image-container position-relative">
                                            <img 
                                                src="/assets/img/blog/private guard.jpg" 
                                                alt="Professional Security Team" 
                                                className="img-fluid"
                                                style={{
                                                    borderRadius: '20px',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    width: '100%',
                                                    height: '500px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 order-1 order-lg-1">
                                    <div className="services-content ps-lg-4">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    <Shield size={16} className="me-2" /> OUR SERVICES
                                                </span>
                                            </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Our Private Security Services
                                            </h2>
                                            <p className="lead" style={{color: '#6c757d'}}>
                                            Considering all points, it is clear that hiring private security guards from Metro Guards in Melbourne is the best decision to ensure the safety and security of your property. With their highly trained and experienced security personnel, you can have peace of mind knowing that your premises are being protected by professionals. Their comprehensive range of services, including crowd control, CCTV monitoring, and mobile patrols, cater to your specific security needs. By choosing Metro Guards, you are investing in the safety and well-being of your staff, customers, and assets. Trust in their expertise and commitment to safeguard your property and maintain a secure environment.
                                            </p>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div className='row'>
                                    
                                <div className="">
                                <div className="services-content ps-lg-4">
                                        
                                        
                                        {/* Services Grid - 3 Columns */}
                                        <div className="services-grid">
                                            <div className="row g-4">
                                                {services.map((service, index) => (
                                                    <div key={index} className="col-lg-4 col-md-6">
                                                        <div 
                                                            className="service-card h-100 p-4"
                                                            style={{
                                                                backgroundColor: '#f8f9fa',
                                                                borderRadius: '12px',
                                                                border: '1px solid #e9ecef',
                                                                borderLeft: '4px solid #fdc51a',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.3s ease',
                                                                boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                                                            }}
                                                            onClick={() => toggleService(index)}
                                                        >
                                                            <div className="service-header mb-3">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <div className="d-flex align-items-center">
                                                                        <div 
                                                                            className="service-icon me-3 d-flex align-items-center justify-content-center"
                                                                            style={{
                                                                                width: '50px',
                                                                                height: '50px',
                                                                                borderRadius: '10px',
                                                                                backgroundColor: '#1e2247',
                                                                                color: '#ffffff'
                                                                            }}
                                                                        >
                                                                            {service.iconSymbol}
                                                                        </div>
                                                                        <div>
                                                                            <h5 className="mb-0 fw-bold" style={{color: '#1e2247', fontSize: '1.1rem'}}>
                                                                                {service.title}
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="expand-icon">
                                                                        <div 
                                                                            className="d-flex align-items-center justify-content-center"
                                                                            style={{
                                                                                width: '35px',
                                                                                height: '35px',
                                                                                backgroundColor: activeService === index ? '#1e2247' : '#e9ecef',
                                                                                borderRadius: '50%',
                                                                                color: activeService === index ? '#ffffff' : '#1e2247',
                                                                                transition: 'all 0.3s ease'
                                                                            }}
                                                                        >
                                                                            <span style={{fontSize: '1rem', fontWeight: 'bold'}}>
                                                                                {activeService === index ? '−' : '+'}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {activeService === index && (
                                                                <div 
                                                                    className="service-details mt-3 pt-3"
                                                                    style={{
                                                                        borderTop: '1px solid #e9ecef',
                                                                        animation: 'slideDown 0.3s ease'
                                                                    }}
                                                                >
                                                                    <p className="mb-3" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                                        {service.description}
                                                                    </p>
                                                                    <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                        {service.details}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>

                    {/*===== Training and Qualifications Section =====*/}
                    <div className="training-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <Award size={16} className="me-2" /> TRAINING & QUALIFICATIONS
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Training and Qualifications
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="training-content">
                                        <div className="training-accordion">
                                            {trainingData.map((item, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                        style={{
                                                            backgroundColor: activeTraining === index ? '#ffffff' : '#f8f9fa',
                                                            borderRadius: activeTraining === index ? '12px 12px 0 0' : '12px',
                                                            border: '1px solid #e9ecef',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            borderLeft: '4px solid #fdc51a'
                                                        }}
                                                        onClick={() => toggleTraining(index)}
                                                    >
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div 
                                                                    className="training-icon me-3 d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '50px',
                                                                        height: '50px',
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#1e2247',
                                                                        color: '#ffffff'
                                                                    }}
                                                                >
                                                                    {index === 0 && <Award size={24} />}
                                                                    {index === 1 && <Target size={24} />}
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{item.title}</h5>
                                                                </div>
                                                            </div>
                                                            <div className="expand-icon">
                                                                <div 
                                                                    className="d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                        backgroundColor: activeTraining === index ? '#1e2247' : '#e9ecef',
                                                                        borderRadius: '50%',
                                                                        color: activeTraining === index ? '#ffffff' : '#1e2247',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                >
                                                                    <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                                        {activeTraining === index ? '−' : '+'}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {activeTraining === index && (
                                                        <div 
                                                            className="accordion-content p-4"
                                                            style={{
                                                                backgroundColor: '#ffffff',
                                                                borderRadius: '0 0 12px 12px',
                                                                border: '1px solid #e9ecef',
                                                                borderTop: 'none',
                                                                borderLeft: '4px solid #fdc51a',
                                                                animation: 'slideDown 0.3s ease'
                                                            }}
                                                        >
                                                            <p className="mb-3" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                                {item.description}
                                                            </p>
                                                            <div className="training-details">
                                                                <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                    {item.details}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Legal and Ethical Considerations Section =====*/}
                    <div className="legal-ethical-section section-padding" style={{background: '#ffffff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <Shield size={16} className="me-2" /> LEGAL & ETHICAL CONSIDERATIONS
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Legal and Ethical Considerations
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="legal-ethical-content">
                                        {/* Introduction Paragraph */}
                                        <div className="row mb-4">
                                            <div className="col-lg-12">
                                                <div className="intro-card p-4" style={{
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '12px',
                                                    border: '1px solid #e9ecef',
                                                    borderLeft: '4px solid #fdc51a'
                                                }}>
                                                    <p className="mb-0 text-center" style={{color: '#6c757d', lineHeight: '1.7', fontSize: '1.1rem'}}>
                                                        <strong style={{color: '#1e2247'}}>For private security guards in Melbourne, it is crucial to have a strong understanding of the legal and ethical considerations that govern the industry.</strong> This ensures that we can operate within the boundaries of the law, while also upholding the highest ethical standards in our work.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="legal-accordion">
                                            {legalData.map((item, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                        style={{
                                                            backgroundColor: activeLegal === index ? '#ffffff' : '#f8f9fa',
                                                            borderRadius: activeLegal === index ? '12px 12px 0 0' : '12px',
                                                            border: '1px solid #e9ecef',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            borderLeft: '4px solid #fdc51a'
                                                        }}
                                                        onClick={() => toggleLegal(index)}
                                                    >
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div 
                                                                    className="legal-icon me-3 d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '50px',
                                                                        height: '50px',
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#1e2247',
                                                                        color: '#ffffff'
                                                                    }}
                                                                >
                                                                    {index === 0 && <FileText size={24} />}
                                                                    {index === 1 && <CheckCircle size={24} />}
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{item.title}</h5>
                                                                </div>
                                                            </div>
                                                            <div className="expand-icon">
                                                                <div 
                                                                    className="d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                        backgroundColor: activeLegal === index ? '#1e2247' : '#e9ecef',
                                                                        borderRadius: '50%',
                                                                        color: activeLegal === index ? '#ffffff' : '#1e2247',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                >
                                                                    <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                                        {activeLegal === index ? '−' : '+'}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {activeLegal === index && (
                                                        <div 
                                                            className="accordion-content p-4"
                                                            style={{
                                                                backgroundColor: '#ffffff',
                                                                borderRadius: '0 0 12px 12px',
                                                                border: '1px solid #e9ecef',
                                                                borderTop: 'none',
                                                                borderLeft: '4px solid #fdc51a',
                                                                animation: 'slideDown 0.3s ease'
                                                            }}
                                                        >
                                                            <p className="mb-3" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                                {item.description}
                                                            </p>
                                                            <div className="legal-details">
                                                                <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                    {item.details}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Hiring Private Security Guards Section =====*/}
                    <div className="hiring-section section-padding" style={{background: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-header text-center mb-5">
                                        <div className="subtitle mb-3">
                                            <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                <Users size={16} className="me-2" /> HIRING PRIVATE SECURITY GUARDS
                                            </span>
                                        </div>
                                        <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                            Hiring Private Security Guards
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="hiring-content">
                                        {/* Introduction Card */}
                                        <div className="row mb-4">
                                            <div className="col-lg-12">
                                                <div className="intro-card p-4" style={{
                                                    backgroundColor: '#ffffff',
                                                    borderRadius: '12px',
                                                    border: '1px solid #e9ecef',
                                                    borderLeft: '4px solid #fdc51a'
                                                }}>
                                                    <p className="text-center mb-0" style={{color: '#6c757d', lineHeight: '1.7', fontSize: '1.1rem'}}>
                                                        <strong style={{color: '#1e2247'}}>Despite the increasing need for private security, not all security companies are created equal.</strong> When it comes to hiring private security guards for your business or event, it's essential to choose a reputable and reliable firm that can meet your specific needs. Metro Guards offers professional security services in Melbourne, with a team of highly trained and experienced guards who are committed to providing the highest level of protection for your property and assets.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hiring-accordion">
                                            {hiringData.map((item, index) => (
                                                <div key={index} className="accordion-item mb-3">
                                                    <div 
                                                        className="accordion-header p-4"
                                                        style={{
                                                            backgroundColor: activeHiring === index ? '#ffffff' : '#f8f9fa',
                                                            borderRadius: activeHiring === index ? '12px 12px 0 0' : '12px',
                                                            border: '1px solid #e9ecef',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s ease',
                                                            borderLeft: '4px solid #fdc51a'
                                                        }}
                                                        onClick={() => toggleHiring(index)}
                                                    >
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div 
                                                                    className="hiring-icon me-3 d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '50px',
                                                                        height: '50px',
                                                                        borderRadius: '10px',
                                                                        backgroundColor: '#1e2247',
                                                                        color: '#ffffff'
                                                                    }}
                                                                >
                                                                    {index === 0 && <Target size={24} />}
                                                                    {index === 1 && <FileText size={24} />}
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-0 fw-bold" style={{color: '#1e2247'}}>{item.title}</h5>
                                                                </div>
                                                            </div>
                                                            <div className="expand-icon">
                                                                <div 
                                                                    className="d-flex align-items-center justify-content-center"
                                                                    style={{
                                                                        width: '40px',
                                                                        height: '40px',
                                                                        backgroundColor: activeHiring === index ? '#1e2247' : '#e9ecef',
                                                                        borderRadius: '50%',
                                                                        color: activeHiring === index ? '#ffffff' : '#1e2247',
                                                                        transition: 'all 0.3s ease'
                                                                    }}
                                                                >
                                                                    <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                                        {activeHiring === index ? '−' : '+'}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {activeHiring === index && (
                                                        <div 
                                                            className="accordion-content p-4"
                                                            style={{
                                                                backgroundColor: '#ffffff',
                                                                borderRadius: '0 0 12px 12px',
                                                                border: '1px solid #e9ecef',
                                                                borderTop: 'none',
                                                                borderLeft: '4px solid #fdc51a',
                                                                animation: 'slideDown 0.3s ease'
                                                            }}
                                                        >
                                                            <p className="mb-3" style={{color: '#6c757d', lineHeight: '1.6', fontSize: '0.95rem'}}>
                                                                {item.description}
                                                            </p>
                                                            <div className="hiring-details">
                                                                <p className="mb-0" style={{color: '#495057', lineHeight: '1.7', fontSize: '0.9rem'}}>
                                                                    {item.details}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Advantages Section =====*/}
                    <div className="advantages-section section-padding" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'}}>
                        <div className="container">
                                        <div className="row">
                                <div className="col-lg-6">
                                    <div className="advantages-content pe-lg-5">
                                        <div className="section-header mb-5">
                                            <div className="subtitle mb-3">
                                                <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                                    <Star size={16} className="me-2" /> WHY CHOOSE US
                                                </span>
                                                    </div>
                                            <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                                Why Choose Metro Guards for Private Security?
                                            </h2>
                                            <p className="lead mb-4" style={{color: '#6c757d'}}>
                                                With rising concerns about theft, vandalism, and violence, our team of trained, qualified security guards makes all the difference.
                                            </p>
                                                </div>
                                        
                                        {/* Advantages List */}
                                        <div className="advantages-list">
                                            <div className="advantage-item d-flex align-items-start mb-4">
                                                <div 
                                                    className="advantage-icon me-3 mt-1 d-flex align-items-center justify-content-center flex-shrink-0"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#1e2247',
                                                        borderRadius: '12px',
                                                        color: '#ffffff'
                                                    }}
                                                >
                                                    <Award size={24} />
                                            </div>
                                                <div>
                                                    <h5 className="mb-2" style={{color: '#1e2247', fontWeight: '700'}}>Professional & Trained Officers</h5>
                                                    <p className="mb-0" style={{color: '#6c757d', fontSize: '0.95rem'}}>
                                                        Highly professional and extensively trained security guards with ongoing development programs.
                                                    </p>
                                                    </div>
                                                </div>
                                            
                                            <div className="advantage-item d-flex align-items-start mb-4">
                                                <div 
                                                    className="advantage-icon me-3 mt-1 d-flex align-items-center justify-content-center flex-shrink-0"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#1e2247',
                                                        borderRadius: '12px',
                                                        color: '#ffffff'
                                                    }}
                                                >
                                                    <Settings size={24} />
                                            </div>
                                                <div>
                                                    <h5 className="mb-2" style={{color: '#1e2247', fontWeight: '700'}}>Customized Security Solutions</h5>
                                                    <p className="mb-0" style={{color: '#6c757d', fontSize: '0.95rem'}}>
                                                        Personalized security solutions tailored to each client's specific needs for complete protection.
                                                    </p>
                                                    </div>
                                                </div>
                                            
                                            <div className="advantage-item d-flex align-items-start mb-4">
                                                <div 
                                                    className="advantage-icon me-3 mt-1 d-flex align-items-center justify-content-center flex-shrink-0"
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: '#1e2247',
                                                        borderRadius: '12px',
                                                        color: '#ffffff'
                                                    }}
                                                >
                                                    ⏰
                                            </div>
                                                <div>
                                                    <h5 className="mb-2" style={{color: '#1e2247', fontWeight: '700'}}>24/7 Protection</h5>
                                                    <p className="mb-0" style={{color: '#6c757d', fontSize: '0.95rem'}}>
                                                        Round-the-clock availability for uninterrupted security services when you need them most.
                                                    </p>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="stats-grid ps-lg-4">
                                        <div className="stats-container">
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div 
                                                        className="stat-card p-4 text-center h-100"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '15px',
                                                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                                            border: '1px solid #f0f0f0'
                                                        }}
                                                    >
                                                        <div 
                                                            className="stat-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                color: '#1e2247',
                                                                fontSize: '1.8rem'
                                                            }}
                                                        >
                                                            <Trophy size={24} />
                                                        </div>
                                                        <div className="stat-number mb-2" style={{color: '#1e2247', fontSize: '2.5rem', fontWeight: '700'}}>
                                                            50+
                                                        </div>
                                                        <div className="stat-label" style={{color: '#6c757d', fontWeight: '500'}}>
                                                            Years Experience
                            </div>
                        </div>
                    </div>
                                                
                                                <div className="col-md-6">
                                                    <div 
                                                        className="stat-card p-4 text-center h-100"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '15px',
                                                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                                            border: '1px solid #f0f0f0'
                                                        }}
                                                    >
                                                        <div 
                                                            className="stat-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                color: '#1e2247',
                                                                fontSize: '1.8rem'
                                                            }}
                                                        >
                                                            <Shield size={24} />
                                                        </div>
                                                        <div className="stat-number mb-2" style={{color: '#1e2247', fontSize: '2.5rem', fontWeight: '700'}}>
                                                            1000+
                                                        </div>
                                                        <div className="stat-label" style={{color: '#6c757d', fontWeight: '500'}}>
                                                            Satisfied Clients
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6">
                                                    <div 
                                                        className="stat-card p-4 text-center h-100"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '15px',
                                                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                                            border: '1px solid #f0f0f0'
                                                        }}
                                                    >
                                                        <div 
                                                            className="stat-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                color: '#1e2247',
                                                                fontSize: '1.8rem'
                                                            }}
                                                        >
                                                            <Users size={24} />
                                                        </div>
                                                        <div className="stat-number mb-2" style={{color: '#1e2247', fontSize: '2.5rem', fontWeight: '700'}}>
                                                            24/7
                                                        </div>
                                                        <div className="stat-label" style={{color: '#6c757d', fontWeight: '500'}}>
                                                            Available Support
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6">
                                                    <div 
                                                        className="stat-card p-4 text-center h-100"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            borderRadius: '15px',
                                                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                                                            border: '1px solid #f0f0f0'
                                                        }}
                                                    >
                                                        <div 
                                                            className="stat-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                backgroundColor: '#fdc51a',
                                                                borderRadius: '50%',
                                                                color: '#1e2247',
                                                                fontSize: '1.8rem'
                                                            }}
                                                        >
                                                            ✅
                                                        </div>
                                                        <div className="stat-number mb-2" style={{color: '#1e2247', fontSize: '2.5rem', fontWeight: '700'}}>
                                                            100%
                                                        </div>
                                                        <div className="stat-label" style={{color: '#6c757d', fontWeight: '500'}}>
                                                            Licensed & Insured
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Old sections removed for cleaner design =====*/}
                    <div className="hidden-sections" style={{display: 'none'}}>

                    {/*===== Roles and Responsibilities Section =====*/}
                    <div className="roles-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Our Security Commitment
                                        </small>
                                        <h2>ROLES AND RESPONSIBILITIES</h2>
                                        <p>One of the main roles of our private security guards in Melbourne is to ensure the safety and security of the premises you are assigned to.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="role-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="role-header d-flex align-items-center mb-3">
                                            <div className="role-icon mr-3">
                                                <i className="bi bi-building" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">On-site Security Duties</h4>
                                        </div>
                                        <p>When we are on-site, our primary duty is to maintain a high level of visibility to deter potential threats. We are responsible for monitoring surveillance equipment, inspecting buildings, and controlling access to the property.</p>
                                        <p>In the event of an incident, we must act quickly and decisively to handle the situation and protect the safety of everyone on the premises. Our alertness and quick response to suspicious activities can prevent potential threats and security breaches.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="role-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="role-header d-flex align-items-center mb-3">
                                            <div className="role-icon mr-3">
                                                <i className="bi bi-calendar-event" style={{fontSize: '2rem', color: '#243D31'}}></i>
                                            </div>
                                            <h4 className="mb-0">Event Security Management</h4>
                                        </div>
                                        <p>Event security management is another important aspect of your role as a private security guard. Whether it's a corporate event, concert, or public gathering, our responsibility is to ensure the safety and security of all attendees.</p>
                                        <p>We may be required to screen guests, manage entry and exit points, and be prepared to handle any disturbances or emergencies that may arise. Our ability to remain calm under pressure and quickly assess and address potential risks can make a significant difference.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Training and Qualifications Section =====*/}
                    <div className="training-section bg-29 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="training-image mr50">
                                        <img src="/assets/img/blog/tranning.jpg" alt="Security Guard Training" className="img-fluid rounded shadow-lg" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="training-content ml50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Professional Standards
                                            </small>
                                            <h2>TRAINING AND QUALIFICATIONS</h2>
                                            <p>
                                                Before we can work as a security guard in Melbourne, we need to undergo the necessary training and obtain the required qualifications. This is crucial to ensure that we have the skills and knowledge needed to perform our job effectively and to the highest standards.
                                            </p>
                                            <div className="training-features mt-4">
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Mandatory licensing and certification</span>
                                                </div>
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>First aid and emergency response training</span>
                                                </div>
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Conflict resolution and de-escalation techniques</span>
                                                </div>
                                                <div className="feature-item d-flex align-items-center mb-3">
                                                    <div className="feature-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Ongoing professional development</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Legal and Ethical Section =====*/}
                    <div className="legal-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Professional Standards
                                        </small>
                                        <h2>LEGAL AND ETHICAL CONSIDERATIONS</h2>
                                        <p>For private security guards in Melbourne, it is crucial to have a strong understanding of the legal and ethical considerations that govern the industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="legal-card bg-white p-4 rounded shadow-lg h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>Understanding Melbourne's Security Industry Legislation</h4>
                                        <p>When working as a private security guard in Melbourne, Metro Guards is essential that we have a comprehensive understanding of the legislation that governs the industry. This includes the Private Security Act and the Security Agents Act, which outline the legal requirements for working in the security industry.</p>
                                        <p>It is important to stay updated on any changes to legislation, as non-compliance can result in serious legal repercussions for Metro Guard's work.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="legal-card bg-white p-4 rounded shadow-lg h-100">
                                        <h4 className="mb-3" style={{color: '#243D31'}}>Ethical Standards in Private Security</h4>
                                        <p>As a private security guard, ethical conduct is paramount in every aspect of your work. This includes respecting the rights and dignity of all individuals, adhering to confidentiality and privacy guidelines, and maintaining a high level of professionalism at all times.</p>
                                        <p>By upholding these ethical standards, we not only protect our reputation and the reputation of the security industry, but we also contribute to a safer and more secure community in Melbourne.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Hiring Section =====*/}
                    <div className="hiring-section bg-29 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="hiring-content mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Choosing the Right Security
                                            </small>
                                            <h2>HIRING PRIVATE SECURITY GUARDS</h2>
                                            <p>
                                                Despite the increasing need for private security, not all security companies are created equal. When it comes to hiring private security guards for your business or event, it's essential to choose a reputable and reliable firm that can meet your specific needs.
                                            </p>
                                            <div className="hiring-features mt-4">
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon mr-3 mt-1">
                                                        <i className="bi bi-search" style={{fontSize: '24px', color: '#243D31'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5>How to Choose the Right Security Firm</h5>
                                                        <p>Look for a company with a proven track record of delivering effective security solutions and satisfied clients. Ensure they provide tailored solutions to meet your specific needs.</p>
                                                    </div>
                                                </div>
                                                <div className="feature-item d-flex align-items-start mb-4">
                                                    <div className="feature-icon mr-3 mt-1">
                                                        <i className="bi bi-file-text" style={{fontSize: '24px', color: '#243D31'}}></i>
                                                    </div>
                                                    <div>
                                                        <h5>Contract Guidelines and Expectations</h5>
                                                        <p>Review terms and conditions carefully, including scope of services and pricing. Communicate your expectations clearly and discuss emergency response protocols.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hiring-image ml50">
                                        <img src="/assets/img/blog/private 3.jpg" alt="Hiring Security Guards" className="img-fluid rounded shadow-lg" />
                                        <div className="hiring-stats bg-white p-4 rounded shadow-lg mt-4">
                                            <h5 className="mb-3 text-center">Why Choose Metro Guards</h5>
                                            <ul className="list-unstyled">
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                                                    <span>Highly trained and vetted security professionals</span>
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                                                    <span>Customized security solutions for every client</span>
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                                                    <span>24/7 availability for all your security needs</span>
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                                                    <span>Proactive approach to threat prevention</span>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <i className="bi bi-check-circle-fill text-success mr-2"></i>
                                                    <span>Full compliance with all legal requirements</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Services Showcase Section =====*/}
                    <div className="services-showcase bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Our Security Expertise
                                        </small>
                                        <h2>EXPERIENCED SECURITY PROFESSIONALS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-lightning" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">On-Demand Guard Services</h4>
                                        <p className="text-center">Flexible security solutions for immediate needs, providing rapid deployment of trained personnel whenever required.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-shield-check" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Hire Skilled Security Guards</h4>
                                        <p className="text-center">Highly trained professionals capable of assessing risks and preventing security breaches effectively.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-people" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Top Security Staffing</h4>
                                        <p className="text-center">Recruiting and placing the best security professionals to meet your specific operational needs.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-building" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">On-Site Guard Experts</h4>
                                        <p className="text-center">Proactive security professionals well-versed in the unique challenges of your location.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-star" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Premier Private Security</h4>
                                        <p className="text-center">Elite services offering customized solutions for high-profile individuals and businesses.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-card bg-white p-4 rounded shadow-lg h-100">
                                        <div className="service-icon mb-3 text-center">
                                            <i className="bi bi-award" style={{fontSize: '2.5rem', color: '#243D31'}}></i>
                                        </div>
                                        <h4 className="text-center mb-3">Trained Guard Personnel</h4>
                                        <p className="text-center">Security teams well-versed in protocols, emergency response, and conflict resolution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== FAQ Section =====*/}
                    <div className="faq-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Common Questions
                                        </small>
                                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg mb-4">
                                        <h5 className="mb-3">What services do private security guards in Melbourne provide?</h5>
                                        <p>Private security guards in Melbourne, such as Metro Guards, provide a wide range of services including access control, patrolling, crowd management, CCTV monitoring, and rapid response to security incidents.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg mb-4">
                                        <h5 className="mb-3">Are private security guards in Melbourne licensed and trained?</h5>
                                        <p>Yes, private security guards in Melbourne must be licensed and undergo extensive training in areas such as conflict resolution, first aid, and emergency response. Metro Guards ensures that all of their security personnel meet these requirements.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="faq-item bg-white p-4 rounded shadow-lg">
                                        <h5 className="mb-3">How can I hire private security guards from Metro Guards?</h5>
                                        <p>To hire private security guards from Metro Guards, simply contact their office and discuss your security needs. They will work with you to create a tailored security solution and provide well-trained guards to protect your property or event.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>

                    


                {/*===== FAQ & Information Section =====*/}
                <div className="faq-info-section " style={{background: '#f8f9fa'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-header text-center mb-5">
                                    <div className="subtitle mb-3">
                                        <span className="badge px-3 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600'}}>
                                            FREQUENTLY ASKED QUESTIONS
                                        </span>
                                    </div>
                                                                         <h2 className="display-5 fw-bold mb-4" style={{color: '#1e2247'}}>
                                         Everything You Need to Know About Private Security Guards
                                     </h2>
                                </div>
                            </div>
                        </div>

                        <div className="row g-5">
                            {/* FAQ Section - Full Width */}
                            <div className="col-lg-12">
                                <div className="faq-content">
                                    {faqData.map((faq, index) => (
                                        <div key={index} className="faq-item mb-3">
                                            <div 
                                                className="faq-header p-4"
                                                style={{
                                                    backgroundColor: activeFaq === index ? '#ffffff' : '#f8f9fa',
                                                    borderRadius: activeFaq === index ? '12px 12px 0 0' : '12px',
                                                    border: '1px solid #e9ecef',
                                                    borderLeft: '4px solid #fdc51a',
                                                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onClick={() => toggleFaq(index)}
                                            >
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="mb-0 fw-bold" style={{color: '#1e2247', fontSize: '1.2rem'}}>
                                                        {faq.question}
                                                    </h4>
                                                    <div className="expand-icon">
                                                        <div 
                                                            className="d-flex align-items-center justify-content-center"
                                                            style={{
                                                                width: '35px',
                                                                height: '35px',
                                                                backgroundColor: activeFaq === index ? '#1e2247' : '#e9ecef',
                                                                borderRadius: '50%',
                                                                color: activeFaq === index ? '#ffffff' : '#1e2247',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                        >
                                                            <span style={{fontSize: '1.1rem', fontWeight: 'bold'}}>
                                                                {activeFaq === index ? '−' : '+'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {activeFaq === index && (
                                                <div 
                                                    className="faq-content p-4"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderRadius: '0 0 12px 12px',
                                                        border: '1px solid #e9ecef',
                                                        borderTop: 'none',
                                                        borderLeft: '4px solid #fdc51a',
                                                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                                        animation: 'slideDown 0.3s ease'
                                                    }}
                                                >
                                                    <p style={{color: '#6c757d', lineHeight: '1.7', margin: 0}}>
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>

                        
                    </div>
                </div>
                    {/*===== Final CTA Section =====*/}
                   

                    {/* Add custom styles */}
                    <div>
                        <style jsx>{`
                        .section-padding {
                            padding: 80px 0;
                        }
                        
                        .btn-primary:hover {
                            background-color: #e8b502 !important;
                            transform: translateY(-3px);
                            box-shadow: 0 12px 30px rgba(253, 197, 26, 0.4) !important;
                        }
                        
                        .btn-outline-dark:hover {
                            background-color: #1e2247 !important;
                            border-color: #1e2247 !important;
                            color: #ffffff !important;
                            transform: translateY(-3px);
                            box-shadow: 0 8px 25px rgba(30, 34, 71, 0.3) !important;
                        }
                        
                        .accordion-header:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
                        }
                        
                        .stat-card:hover {
                            transform: translateY(-8px);
                            box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
                        }
                        
                        .modern-form-wrapper {
                            margin-top: 0 !important;
                        }
                        
                        .contact-card:hover {
                            transform: translateX(8px);
                            background-color: rgba(255, 255, 255, 0.15) !important;
                        }
                        
                        .advantage-item:hover .advantage-icon {
                            transform: scale(1.1);
                            background-color: #fdc51a !important;
                            color: #1e2247 !important;
                        }
                        
                        .floating-badge {
                            animation: float 3s ease-in-out infinite;
                        }
                        
                        .bottom-badge {
                            animation: pulse 2s infinite;
                        }
                        
                        @keyframes float {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-10px); }
                        }
                        
                        @keyframes pulse {
                            0%, 100% { transform: scale(1); }
                            50% { transform: scale(1.05); }
                        }
                        
                        @keyframes slideDown {
                            from {
                                opacity: 0;
                                transform: translateY(-20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        .trust-item:hover {
                            transform: translateY(-5px);
                        }
                        
                        .trust-icon {
                            transition: all 0.3s ease;
                        }
                        
                        .trust-item:hover .trust-icon {
                            transform: scale(1.2);
                        }
                        
                        .hero-buttons a {
                            transition: all 0.3s ease;
                        }
                        
                        .contact-icon, .advantage-icon, .stat-icon {
                            transition: all 0.3s ease;
                        }
                        
                        .decoration-circle {
                            animation: float 4s ease-in-out infinite;
                        }
                        
                        .decoration-square {
                            animation: float 4s ease-in-out infinite reverse;
                        }
                        
                        .feature-item {
                            transition: all 0.3s ease;
                        }
                        
                        .feature-item:hover {
                            transform: translateX(5px);
                        }
                        
                        @media (max-width: 768px) {
                            .hero-buttons {
                                flex-direction: column;
                                align-items: stretch;
                            }
                            
                            .hero-buttons a {
                                text-align: center;
                                margin-bottom: 1rem;
                            }
                            
                            .trust-indicators .col-4 {
                                margin-bottom: 1rem;
                            }
                            
                            .cta-buttons {
                                flex-direction: column;
                                align-items: stretch;
                            }
                            
                            .cta-buttons a {
                                text-align: center;
                                margin-bottom: 1rem;
                            }
                        }
                    `}</style>
                </div>
                <WhyChooseUs />
                <Accreditation />
                <Subscribe />
            </Layout>
        </>
    );
}