
import LogoSlider2 from "@/components/slider/LogoSlider2"
import Link from "next/link"

export default function Welcome() {
    return (
        <>
            <div className="welcome-area welcome-2" id="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="title title2 ">
                                
                                <h1 data-aos="fade-right" data-aos-duration={800}>Security Company in Melbourne</h1>
                                <p data-aos="fade-right" data-aos-duration={1000}>Metro Guard is the most reliable & Affordable local security company in Melbourne, and it is the frontline for your safety. <span style={{ color: '#FDC51A' }}>Licensed by ASIAL (Australian Security Industry Association Limited) | Victoria State Government.</span>We are providing Security Services in Melbourne Residential, Commercial Industrial, Retail and Government Sectors. Contact us to Get Free Security Quote According to your business needs</p>
                                <div className="space30" />
                                {/* <div className="btn-group" data-aos="fade-right" data-aos-duration={1200}>
                                    <Link className="theme-btn-2" href="get-quotation">Get A Quote Now <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    <Link className="theme-btn-3" href="#">Schdule A Call <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div> */}
                                <div className="space80" />
                                <div className="logo-area2" data-aos="fade-right" data-aos-duration={1400}>
                                    <p>Trusted by more than 4000+ companies worldwide</p>
                                    <LogoSlider2 />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="hero-img-elements" data-aos="zoom-out" data-aos-duration={800}>
                                <div className="hero-main-img position-relative top-right-polygon-0">
                                    <img className="border-radius" src="/assets/img/bg/security img.webp" alt="" />
                                    {/* <div className="corner-shape2 position-absolute">
                                        <img src="/assets/img/shapes/tax-shape1.png" alt="" />
                                    </div> */}
                                    {/* <div className="corner-right-bottom-shape2 position-absolute">
                                        <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </>
    )
}
