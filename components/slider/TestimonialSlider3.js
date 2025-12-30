'use client'
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="testimonials-3 owl-carousel">
                <SwiperSlide className="single-testimonial">
                    {/* <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div> */}
                    <h3>Building Site Security Guards</h3>
                    <p>
                        Our Building security guards in Melbourne provide 24/7 protection for private homes, apartment buildings, and gated communities. Whether you’re on-site or away, our presence ensures your family, property, and assets remain safe at all times.
                    </p>
                    <div className="author-reviews">
                        {/* <div className="author">
                            <Link href="#">Jason Behrendorff</Link>
                        </div> */}
                        <div className="review-1">
                            <div className="review">
                                {/* <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul> */}
                            </div>
                            {/* <div className="review-rate">
                                <p>(4.5)</p>
                            </div> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    {/* <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div> */}
                    <h3>Corporate Security</h3>
                    <p>
                       Through our corporate security services in Melbourne, we deliver a professional security presence for office buildings, reception areas, and business centres. Our guards manage entry points, welcome visitors, and help maintain a secure workplace.
                    </p>
                    <div className="author-reviews">
                        {/* <div className="author">
                            <Link href="#">Jason Behrendorff</Link>
                        </div> */}
                        <div className="review-1">
                            <div className="review">
                                {/* <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul> */}
                            </div>
                            {/* <div className="review-rate">
                                <p>(4.5)</p>
                            </div> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    {/* <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div> */}
                    <h3>Construction Site Security</h3>
                    <p>
                        With our construction site security services in Melbourne, you can prevent theft, vandalism, and unauthorised access on your job site. We provide around-the-clock monitoring of tools, equipment, and site perimeters to protect your progress.
                    </p>
                    <div className="author-reviews">
                        {/* <div className="author">
                            <Link href="#">Jason Behrendorff</Link>
                        </div> */}
                        <div className="review-1">
                            <div className="review">
                                {/* <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul> */}
                            </div>
                            {/* <div className="review-rate"> */}
                                {/* <p>(4.5)</p> */}
                            {/* </div> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    {/* <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div> */}
                    <h3>Mobile Patrols</h3>
                    <p>
                       Our mobile patrol security services in Melbourne offer scheduled or random checks at high-risk or low-traffic locations. This is an ideal solution for sites that don’t need constant presence but still require strong, visible deterrence.
                    </p>
                    <div className="author-reviews">
                        {/* <div className="author">
                            <Link href="#">Jason Behrendorff</Link>
                        </div> */}
                        <div className="review-1">
                            <div className="review">
                                {/* <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul> */}
                            </div>
                            {/* <div className="review-rate">
                                <p>(4.5)</p>
                            </div> */}
                        </div>
                    </div>
                </SwiperSlide>
                  <SwiperSlide className="single-testimonial">
                    {/* <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div> */}
                    <h3>Event Security Services</h3>
                    <p>
                       Whether you’re planning a private party, public event, or corporate function, our event security services in Melbourne include entry monitoring, crowd control, and incident response—ensuring your event runs safely and smoothly.
                    </p>
                    <div className="author-reviews">
                        {/* <div className="author">
                            <Link href="#">Jason Behrendorff</Link>
                        </div> */}
                        <div className="review-1">
                            <div className="review">
                                {/* <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul> */}
                            </div>
                            {/* <div className="review-rate"> */}
                                {/* <p>(4.5)</p> */}
                            {/* </div> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    {/* <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div> */}
                    <h3>Retail Loss Prevention Officers</h3>
                    <p>
                       Our loss prevention officers in Melbourne help reduce shrinkage in boutique shops, shopping centres, and high-end retail outlets. They monitor customer activity discreetly and respond quickly to suspicious behaviour without disturbing business flow.
                    </p>
                    <div className="author-reviews">
                        {/* <div className="author">
                            <Link href="#">Jason Behrendorff</Link>
                        </div> */}
                        <div className="review-1">
                            <div className="review">
                                {/* <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul> */}
                            </div>
                            {/* <div className="review-rate"> */}
                                {/* <p>(4.5)</p> */}
                            {/* </div> */}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
