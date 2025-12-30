import TestimonialThumbSlider1 from "@/components/slider/TestimonialThumbSlider1"

export default function Testimonial() {
    return (
        <>
            <div className="testimonial-area testimonial-2 position-relative bg6 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 m-auto">
                            <div className="heading2 white-heading text-center" style={{ marginBottom: '-10px' }}>
                                <small data-aos="fade-up" data-aos-duration={600} className="heading-top">
                                    <img src="/assets/img/icons/hands.svg" alt="" />We Deliver The Best Security Services in Melbourne.
                                </small>
                                <h2 data-aos="fade-up" data-aos-duration={800}>
                                    <span className="">Amazing</span> people talking about us.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 m-auto" data-aos="fade-up" data-aos-duration={1000}>
                            <TestimonialThumbSlider1 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}