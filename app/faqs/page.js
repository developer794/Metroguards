import ModernFaq from "@/components/elements/ModernFaq"
import Layout from "@/components/layout/Layout"
import Accrediation10 from "@/components/accrediation10"
import Subscribe from "@/components/homepages/home1/Subscribe"

export const metadata = {
    title: 'Frequently Asked Questions - Metropolitan Guards Security Services',
    description: 'Find answers to common questions about our security services, licensing, coverage areas, and more.',
    alternates: {
        canonical: 'https://metroguards.com.au/faqs',
    },
}

export default function Page() {
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={1}
                headTitle="Frequently Asked Questions - Metropolitan Guards Security Services"
                breadcrumbTitle="Frequently Asked Questions"
                mainTitle="Everything You Need to Know About <span style='color: #fdc51a; background: linear-gradient(135deg, #fdc51a 0%, #f39c12 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>Metropolitan Guards</span>"
                subtitle="Find comprehensive answers to common questions about our security services, licensing, coverage areas, and more. Our expert team is always ready to help with any additional inquiries."
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Educational%20Insitute%20Security%20Guards/F0299D08-6BF5-4E7B-AED4-001DEE4D65BC_1_105_c.webp"
            >
                {/* Hero Section */}
                <div className="faq-hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-badge">
                                <img src="/assets/img/icons/hands.svg" alt="Hands Icon" />
                                <span>Frequently Asked Questions</span>
                            </div>
                            <h2 className="hero-title">
                                Everything You Need to Know About
                                <span className="highlight"> Metropolitan Guards</span>
                            </h2>
                            <p className="hero-description">
                                Find answers to common questions about our security services,
                                licensing, coverage areas, and more. Can't find what you're looking for?
                                Our team is always ready to help.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="modern-faqs-section">
                    <div className="container">
                        <ModernFaq />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="faq-stats-section">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-number">18+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Happy Clients</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Support Available</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Licensed & Insured</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Accrediation10 />
                <Subscribe />
            </Layout>
        </>
    );
}
