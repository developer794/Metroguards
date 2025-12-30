import Link from "next/link"

export default function TaxBusiness() {
    return (
        <>
        
            <div className="tax-business section-padding2 pt-20 " style={{ backgroundColor: '#1E2247'}} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="heading2 white-heading text-center">
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Integrated Security Services
                                </small>
                                <h2 data-aos="fade-up" data-aos-duration={800}><span>Melbourne's Expert</span> Security Guards & Mobile Patrols</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={600}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/policeman.png" alt="" />
                                </div>
                                <h3>Melbourne Security Guard for Hire</h3>
                               <p>We strongly believe that security officers are not just your protectors; they act as guardians in emergencies.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={800}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/patrol.png" alt="" />
                                </div>
                                <h3>Melbourne Mobile Patrol Security Service
</h3>
                                <p>We know managing and protecting commercial buildings, huge events, and construction sites is difficult because of their large premises.</p>
                                <Link href="/mobile-patrol-security" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/warehouse.png" alt="" />
                                </div>
                                <h3>Warehouse Security Guards Melbourne</h3>
                                <p>Metro Guards know warehouses and storage facilities are high-risk and must be protected from theft due to valuable stock.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="single-business trans-1">
                                <div className="business-icon">
                                    <img src="/assets/img/icons/construction.png" alt="" />
                                </div>
                                <h3>Construction Site Security Guard</h3>
                                <p>Metro Guards is ideal for construction site security, protecting costly machinery and materials from theft and vandalism.</p>
                                <Link href="#" className="theme-btn-7">Learn More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}