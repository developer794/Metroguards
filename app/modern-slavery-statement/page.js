
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/homepages/home1/Subscribe"
import Image from "next/image"

export const metadata = {
    title: 'Modern Slavery Statement | Metro Guards',
    description: 'Metropolitan Guards - Commitment to Ethical Business Practices and Modern Slavery Statement.',
    alternates: {
        canonical: 'https://metroguards.com.au/modern-slavery-statement',
    },
}

export default function ModernSlaveryStatementPage() {
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={1}
                breadcrumbTitle="Modern Slavery Statement"
                mainTitle="Modern Slavery Statement"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Security%20Guards/81FC094D-5077-4246-9C7B-CF19E9EC602B_1_105_c.webp"
                subtitle="Metropolitan Guards - Commitment to Ethical Business Practices"
            >


                <div className="container mx-auto px-4 py-16">

                    {/* Full Width Blue Bar with Heading */}
                    <div style={{
                        width: '100%',
                        backgroundColor: '#1e2247',
                        padding: '30px 0',
                        marginTop: '50px',
                        marginBottom: '50px'
                    }}>
                        <div className="container mx-auto px-4">
                            <h2 style={{
                                color: 'white',
                                fontSize: '48px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                margin: 0,
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                Modern Slavery<br />Statement
                            </h2>
                        </div>
                    </div>
                    <div className="max-w-5xl mx-auto">

                        {/* Cover Image */}
                        <div className="mb-8" style={{ marginTop: "80px" }}>
                            <Image
                                src="/Screenshot 2025-11-07 101241.png"
                                alt="Modern Slavery Statement 2023"
                                width={800}
                                height={1000}
                                className="w-full h-auto rounded-lg shadow-lg"
                                priority
                            />
                        </div>
                        {/* table of content Image */}
                        <div className="mb-8" style={{ marginTop: "50px" }}>
                            <Image
                                src="/Screenshot 2025-11-07 103545.png"
                                alt="Modern Slavery Statement 2023"
                                width={800}
                                height={1000}
                                className="w-full h-auto rounded-lg shadow-lg"
                                priority
                            />
                        </div>

                    </div>
                </div>


                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-5xl mx-auto">

                        {/* Our Business Section */}
                        <div className="bg-white p-12 rounded-lg mb-8 shadow-lg  ml-[20px]" style={{ padding: '60px', marginTop: "50px" }}>
                            <h2 className="text-4xl font-bold mb-6 border-b-2 border-[#4db8e8] pb-4" style={{ color: "black", fontWeight: "1200", fontSize: "40px" }}>Our Business</h2>
                            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                                <p>
                                    <strong>Metro Politan Guard Services</strong> provides security, emergency services and customer focused services through a risk management approach to understand, manage and deliver outcomes. Our teams are industry professionals with retail, facilities management, property, events and industrial expertise and knowledge.
                                </p>
                                <p>
                                    Australian owned, we are solely focused on our local and national markets. Out aspiration is not to be global, but globally aware to provide efficient and productive solutions that deliver real benefits such as:
                                </p>
                                <ul className="list-none ml-6 space-y-3 mt-4">
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>Reduction in resourcing volume without service compromise through productivity and innovation.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>Enhanced security and cleaning measures without additional costs.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>A risk management approach in all activities and duties.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>Workforce multipliers in productivity without higher management or supervision overheads through leading edge technologies.</span>
                                    </li>
                                </ul>
                                <p>
                                    We are everywhere you need us to be and in every state, we have a service foot print that can be leveraged and 100% scalable. This is underpinned by robust systems and procedural frameworks with secured long-term business, making us scalable and sustainable.
                                </p>
                            </div>
                        </div>

                        {/* Our Policies, Processes and Procedures Section */}
                        <div className="bg-white p-12 rounded-lg mb-8 shadow-lg" style={{ padding: '60px', marginTop: "50px" }}>
                            <h2 className="text-4xl font-bold mb-6 border-b-2 border-[#4db8e8] pb-4" style={{ color: "black", fontWeight: "1200", fontSize: "40px" }}>Our Policies, Processes and Procedures</h2>
                            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                                <p>
                                    Our values of Passion, Integrity, Employees & Customer Focus, 100% Accountability, Leadership, Flexibility, and Continuous Improvement guide the behaviours we want with all our stakeholders, including employees. We are committed to maintaining and improving out systems, policies and processes to protect human rights of staff and contractors, including providing protection against slavery and human trafficking.
                                </p>
                                <p>
                                    The systems, policies, processes and procedures reflect our business' ethics and values. They set out our minimum requirements on the way we treat all employees, work with our customers, and suppliers in relation to governance and general compliance, workplace relations, occupational health and safety, ethical business practises and environmental management.
                                </p>
                                <p className="font-semibold mt-6">These policies include, but are not limited to:</p>
                                <ul className="list-none ml-6 space-y-3 mt-4">
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>Our Values</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>Our Corporate Social Responsibility</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>Out Code of Conduct</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>Diversity & Equal Employment Opportunity Policy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>Whistleblowing Policy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>Employee Wellbeing and Support Policy</span>
                                    </li>
                                </ul>
                                <p className="font-semibold mt-6">Our relevant processes and procedures include, but are not limited to the following:</p>
                                <ul className="list-none ml-6 space-y-3 mt-4">
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>We monitor and review the effectiveness of internal policies and how these have been implemented across our business;</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>We undertake supplier risk assessments and due diligence on proposed service providers;</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>We have a range of policies and implement programs to support an inclusive workplace;</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#fdc51a] mr-3 font-bold text-xl">•</span>
                                        <span style={{ paddingLeft: "10px" }}>Whistleblower Policy promotes honest and ethical behaviour by providing a framework for the escalation of reportable conduct.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Our Position Section */}
                        <div className="bg-white p-12 rounded-lg mb-8 shadow-lg" style={{ padding: '60px', marginTop: "50px" }}>
                            <h2 className="text-4xl font-bold mb-6 border-b-2 border-[#4db8e8] pb-4" style={{ color: "black", fontWeight: "1200", fontSize: "40px" }}>Our Position</h2>
                            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                                <p>
                                    <strong>Metro Politan Guard Services</strong> is committed to maintaining and improving systems and processes to avoid complicity in human rights violations related to our own operations, our supply chain and our products and services.
                                </p>
                                <p>
                                    We understand that slavery and human trafficking can occur in many forms, such as forced labour, child labour, domestic servitude, sex trafficking, workplace human trafficking.
                                </p>
                                <p>
                                    We work proactively to reduce modern slavery and are committed to maintaining improving systems and processes to protect against and avoid complicity in human rights violations related to our operations, our supply chain, our products and our services,
                                </p>
                                <p>
                                    We always take due diligence when considering taking on new suppliers and clients, and regularly review agreements with existing suppliers and clients. This is consistent with applicable laws, contractual and other obligations. It is also consistent with out fundamental principles and broader company policies.
                                </p>
                                <p>
                                    As key part of supporting ethical standards is enabling our employees and others, including suppliers, subcontractors and partners to feel free and safe to speak up when there are reasonable grounds to suspect that we are not acting ethically or in accordance with laws and obligations.
                                </p>
                                <p>
                                    Therefore, in this statement we use the terms "slavery and human trafficking" to encompass these various forms of coerced labour.
                                </p>
                            </div>
                        </div>

                        {/* Training and Continuous Improvement Section */}
                        <div className="bg-white p-12 rounded-lg mb-8 shadow-lg" style={{ padding: '60px', marginTop: "50px" }}>
                            <h2 className="text-4xl font-bold mb-6 border-b-2 border-[#4db8e8] pb-4" style={{ color: "black", fontWeight: "1200", fontSize: "40px" }}>Training and Continuous Improvement</h2>
                            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                                <p>
                                    Our values guide our commitment, therefore MG Services Group ensures to continuously develop and facilitate refresher training to stakeholders to raise awareness on what modern slavery looks like, its impact on individuals, companies and society, the background to the Act, what MG is doing in response to the Act, how this will impact our supply chain and what staff can do to minimise the potential risks.
                                </p>
                            </div>
                        </div>

                        {/* Metro Guards Logo Footer */}
                        <div className="bg-[#1e2247] text-white p-16 rounded-lg shadow-lg flex flex-col items-center justify-center min-h-[400px]" style={{ marginTop: "50px", marginBottom: "50px" }}>
                            <div className="mb-8">
                                <Image
                                    src="/Screenshot 2025-11-07 111723.png"
                                    alt="Metro Guards Logo"
                                    width={300}
                                    height={100}
                                    className="h-auto"
                                />
                            </div>
                            <p className="text-xl text-gray-300 mt-8">www.metroguards.com.au</p>
                        </div>

                    </div>
                </div>

                <Subscribe />
            </Layout>
        </>
    )
}
