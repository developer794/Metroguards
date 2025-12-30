import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BannerHylos() {
  return (
    <section className="main-slider">
      <div 
        className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
        data-owl-options='{"loop": true, "items": 1, "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"], "margin": 0, "dots": true, "nav": false, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'
      >
        <div className="item main-slider__slide-1">
          <div 
            className="main-slider__bg"
            style={{ backgroundImage: "url(assets/images/backgrounds/slider-1-1.jpg)" }}
          />
          <div className="main-slider__bg-two-outer">
            <div 
              className="main-slider__bg-two"
              style={{ backgroundImage: "url(assets/images/backgrounds/slider-1-1.jpg)" }}
            />
          </div>
          <div className="main-slider__shape-1 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
          </div>
          <div className="main-slider__shape-2 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
          </div>
          <div className="main-slider__shape-3 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-3.png" alt="" />
          </div>
          <div className="container">
            <div className="main-slider__content">
              <p className="main-slider__sub-title">Welcome to Digital Agency</p>
              <h2 className="main-slider__title">
                Digital <span>*</span> <br />
                Marketing
              </h2>
              <div className="main-slider__btn-box">
                <a href="about.html" className="main-slider__btn thm-btn">Discover More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="item main-slider__slide-2">
          <div 
            className="main-slider__bg"
            style={{ backgroundImage: "url(assets/images/backgrounds/slider-1-2.jpg)" }}
          />
          <div className="main-slider__bg-two-outer">
            <div 
              className="main-slider__bg-two"
              style={{ backgroundImage: "url(assets/images/backgrounds/slider-1-2.jpg)" }}
            />
          </div>
          <div className="main-slider__shape-1 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
          </div>
          <div className="main-slider__shape-2 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
          </div>
          <div className="main-slider__shape-3 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-3.png" alt="" />
          </div>
          <div className="container">
            <div className="main-slider__content">
              <p className="main-slider__sub-title">Welcome to Digital Agency</p>
              <h2 className="main-slider__title">
                Digital <span>*</span> <br />
                Marketing
              </h2>
              <div className="main-slider__btn-box">
                <a href="about.html" className="main-slider__btn thm-btn">Discover More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="item main-slider__slide-3">
          <div 
            className="main-slider__bg"
            style={{ backgroundImage: "url(assets/images/backgrounds/slider-1-3.jpg)" }}
          />
          <div className="main-slider__bg-two-outer">
            <div 
              className="main-slider__bg-two"
              style={{ backgroundImage: "url(assets/images/backgrounds/slider-1-3.jpg)" }}
            />
          </div>
          <div className="main-slider__shape-1 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
          </div>
          <div className="main-slider__shape-2 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
          </div>
          <div className="main-slider__shape-3 float-bob-x">
            <img src="assets/images/shapes/main-slider-shape-3.png" alt="" />
          </div>
          <div className="container">
            <div className="main-slider__content">
              <p className="main-slider__sub-title">Welcome to Digital Agency</p>
              <h2 className="main-slider__title">
                Digital <span>*</span> <br />
                Marketing
              </h2>
              <div className="main-slider__btn-box">
                <a href="about.html" className="main-slider__btn thm-btn">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
