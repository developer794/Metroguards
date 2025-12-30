import Layout from "@/components/layout/Layout"

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ABOUT METROGUARDS" backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Shopping%20Center%20Secuirty%20Guards/CA27AC6C-60CD-44D4-A422-3D5ECF81CF4B_1_105_c.webp">
                <div>
                    {/*===== How we serve our community =====*/}
                    <div className="about-inner bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Our stories how we establish our company.
                                            </small>
                                            <h2>WHY CHOOSE METROPOLITAN GUARDS?</h2>
                                            <p>
                                                We are firmly committed to providing a comprehensive package of professional security guard services to business holders across Melbourne. Metropolitan security guard services strive to be service-oriented and a trusted security advisor to the business by offering economical solutions. Our commitment to integrity, accountability and quality enables us to hire a professional force of security guards in Melbourne to ensure the top-tier standard of private security services.
                                            </p>
                                            <p>
                                                We at metropolitan guards are focused on selecting only those individuals who are committed and compatible with our mission as the best security provider. Whether you own a small enterprise or a million-dollar company, hire security company Guards who are competent to detect danger and respond actively without disturbing the environment’s peace. 
                                            </p>
                                            <p>
                                                So it’s better to be alert today than not to be safe tomorrow. Leave your security to us and enjoy your growing business.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative ml50">
                                        <img src="/assets/img/about/why mg.webp" alt="" />
                                        {/* <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Health & Safety Section =====*/}
                    <div className="about-inner padding-bottom bg-29">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative mr50">
                                        <img src="/assets/img/about/about24.png" alt="" />
                                        {/* <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ml50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Our Vision help us to improve our quality.
                                            </small>
                                            <h2>OUR MEMBERSHIP / HEALTH & SAFETY</h2>
                                            <p>
                                                Workplace health and safety is the foremost priority at Metropolitan Guards Security. Through a meticulously designed way of induction, preparation, and assessment, we make certain that every personnel at Metropolitan Guards Security is aware of their rights and duties regarding occupational health and safety and environmental hazards and protection. Our apt Occupational Health and Safety (OHS) Management guidelines are underpinned by the guidelines of nationally and international organization for standardization (ISO) which includes:
                                            </p>
                                            <ul>
                                                <li>ISO 14001:2015 Environmental Management System Standard</li>
                                                <li>ISO 9001:2015 Quality Management System Standard</li>
                                                <li>ISO 45001:2018 Health and Safety Management System Standard</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
