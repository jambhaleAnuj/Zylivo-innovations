import Link from "next/link";
("use Client");
import React, { createContext } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Ensure you import styles

// export default function Section1() {
//     return (
//         <>

//             <section className="section-box">
//                 <div className="banner-hero hero-6">
//                     <div className="container">
//                         <div className="banner-inner">
//                             <div className="box-banner-left"><Link className="btn btn-brand-6-new" href="#"><span>New</span>AI
//                                 analytics 3.0
//                                 <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
//                                     <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true" />
//                                 </svg></Link>
//                                 <h1 className="display-2 mb-30 mt-25">Digital Agency with<span className="text-96">Excellence
//                                     Services</span></h1>
//                                 <p className="text-lg neutral-500 mb-55">Use our analytics, reporting, and AI-assisted
//                                     optimization tools to monitor trends, track performance, and create better campaigns
//                                     that reach more customers likely to engage and convert.</p>
//                                 <div className="d-flex mb-60"><Link className="btn btn-brand-4-border" href="#">
//                                     <svg width={41} height={41} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M20.5 1.28125C16.6989 1.28125 12.9832 2.40841 9.82264 4.52019C6.66214 6.63198 4.19882 9.63354 2.7442 13.1453C1.28958 16.6571 0.908982 20.5213 1.65054 24.2494C2.3921 27.9775 4.22251 31.4019 6.9103 34.0897C9.59809 36.7775 13.0225 38.6079 16.7506 39.3495C20.4787 40.091 24.3429 39.7104 27.8547 38.2558C31.3665 36.8012 34.368 34.3379 36.4798 31.1774C38.5916 28.0169 39.7188 24.3011 39.7188 20.5C39.7188 15.4029 37.6939 10.5145 34.0897 6.91029C30.4855 3.30608 25.5971 1.28125 20.5 1.28125ZM21.3239 13.0867C23.0709 13.0887 24.7457 13.7836 25.9811 15.0189C27.2164 16.2543 27.9113 17.9291 27.9133 19.6762H26.2656C26.2643 18.3659 25.7432 17.1098 24.8167 16.1833C23.8903 15.2568 22.6341 14.7357 21.3239 14.7344V13.0867ZM26.6603 32.0312C26.6103 32.0312 21.6634 31.9467 15.302 25.698C9.05332 19.3392 8.96876 14.3897 8.96876 14.3398C8.96876 13.7235 12.8125 8.96875 13.662 8.96875C13.9567 8.96875 14.186 9.16862 14.4371 9.46844C15.0419 10.1885 17.7159 14.4089 17.5929 15.1123C17.5339 15.4429 17.2533 15.694 16.4487 16.3693C16.0522 16.6809 15.6812 17.0237 15.3391 17.3943C15.503 18.0723 15.7464 18.7286 16.0643 19.3494C17.2489 21.785 19.217 23.7522 21.6531 24.9357C22.274 25.2536 22.9303 25.4971 23.6083 25.6609C23.9789 25.3188 24.3216 24.9478 24.6333 24.5513C25.3085 23.7467 25.5597 23.4661 25.8902 23.4072C26.5936 23.279 30.8141 25.9581 31.5341 26.5629C31.8339 26.8191 32.0338 27.0433 32.0338 27.338C32.0313 28.1875 27.2765 32.0312 26.6603 32.0312ZM30.3836 19.6762C30.3809 17.2742 29.4255 14.9714 27.727 13.273C26.0286 11.5745 23.7258 10.6192 21.3239 10.6164V8.96875C24.1626 8.97214 26.8841 10.1013 28.8914 12.1086C30.8987 14.1159 32.0279 16.8374 32.0313 19.6762H30.3836Z" fill="#191919" />
//                                     </svg>Call Us for More Infomation
//                                     <svg width={22} height={9} viewBox="0 0 22 9" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M22 4.50032L18.4791 0.979492V3.8074H0V5.19333H18.4791V8.02129L22 4.50032Z" fill="#191919" />
//                                     </svg></Link></div>
//                             </div>
//                             <div className="box-banner-right">
//                                 <div className="box-images-banner-6"><span className="animate-1"><img src="/assets/imgs/page/homepage4/banner-arrow.png" alt="Nivia" /></span><span className="animate-2"><img src="/assets/imgs/page/homepage4/banner-icon.png" alt="Nivia" /></span><img src="/assets/imgs/page/homepage4/banner.png" alt="Nivia" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

export default function Section1() {
  return (
    <>
      {/* <div class="bg-dark py-5" style={{ paddingTop: "30px" }}>
        <Swiper
          class="mySwiper"
          pagination="true"
          pagination-clickable="true"
          slides-per-view="auto"
          centered-slides="true"
          space-between="40"
          loop="true"
          loopedslides="1"
          createelements="true"
          keyboard="true"
          scrollbar="true"
          style={{ marginTop: "80px" }}
        >
          <SwiperSlide class="zoom-background">
            <div
              class="intro-section section overlay slider_imgs"
              data-bg-color="#000"
              data-bg-image="assets/images/hero-image/building-future-ready-businesses-with-8848-digital.jpg"
            >
              <div class="container">
                <div class="row row-cols-lg-1 row-cols-1">
                  <div class="col align-self-center">
                    <a
                      href="about-us"
                      class="text-white ps-2"
                      style={{ marginTop: "0px" }}
                    >
                      <div class="intro-content mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-xs-3">
                        <h2 class="sections_heading">
                          Building future ready businesses
                        </h2>
                        <div class="sections_heading_desc mb-1 d-lg-block d-md-block d-none">
                          <p>
                            Empowering organizations to thrive in tomorrow's
                            landscape through strategic innovation and
                            adaptability.
                          </p>
                        </div>
                        <span class="learn_more_link d-lg-block d-md-block d-none">
                          Learn More
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <swiper-slide class="zoom-background">
            <div
              class="intro-section section overlay slider_imgs"
              data-bg-color="#000"
              data-bg-image="assets/images/hero-image/compliance-lifecycle-transformed.jpg"
            >
              <div class="container">
                <div class="row row-cols-lg-1 row-cols-1">
                  <div class="col align-self-center max-mb-30">
                    <a
                      href="https://1OEeK9c1JAVB.com/cleartax/"
                      target="_blank"
                      class="text-white"
                      style={{ marginTop: "0px" }}
                    >
                      <div class="intro-content mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-xs-3">
                        <h2 class="sections_heading">
                          Compliance lifecycle transformed for enterprises
                        </h2>
                        <div class="sections_heading_desc mb-1 d-lg-block d-md-block d-none">
                          <p>
                            Revolutionize your approach to compliance. Discover
                            a lifecycle that works for your business.
                            #ComplianceTransformed #ERPNext
                          </p>
                        </div>
                        <span class="learn_more_link d-lg-block d-md-block d-none">
                          Learn More
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="zoom-background">
            <div
              class="intro-section section overlay slider_imgs"
              data-bg-color="#000"
              data-bg-image="assets/images/hero-image/new-era-erp-1.jpg"
            >
              <div class="container">
                <div class="row row-cols-lg-1 row-cols-1">
                  <div class="col align-self-center">
                    <a
                      href="services"
                      class="text-white"
                      style={{ marginTop: "0px" }}
                    >
                      <div class="intro-content mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-xs-3">
                        <h2 class="sections_heading">
                          A new ERA of ERP for everyone
                        </h2>
                        <div class="sections_heading_desc mb-1 d-lg-block d-md-block d-none">
                          <p>
                            In a volatile world, 8848 Digital establishes itself
                            as the trusted partner for enterprises aiming for
                            agility, resilience, and streamlined operations.
                          </p>
                        </div>
                        <span class="learn_more_link d-lg-block d-md-block d-none">
                          Learn More
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="zoom-background">
            <div
              class="intro-section section overlay slider_imgs"
              data-bg-color="#000"
              data-bg-image="assets/images/hero-image/banking-beyond-boundaries.jpg"
            >
              <div class="container">
                <div class="row row-cols-lg-1 row-cols-1">
                  <div class="col align-self-center">
                    <a
                      href="https://1OEeK9c1JAVB.com/summit"
                      target="_blank"
                      class="text-white"
                      style={{ marginTop: "0px" }}
                    >
                      <div class="intro-content mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-xs-3">
                        <h2 class="sections_heading">
                          Business beyond <br />
                          Boundaries
                        </h2>
                        <div class="sections_heading_desc mb-1 d-lg-block d-md-block d-none">
                          <p>
                            Navigating Global Markets, Embracing Technological
                            Disruption, and Cultivating a Culture of Limitless
                            Innovation for Sustainable Growth
                          </p>
                        </div>
                        <span class="learn_more_link d-lg-block d-md-block d-none">
                          Learn More
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="zoom-background">
            <div
              class="intro-section section overlay slider_imgs"
              data-bg-color="#000"
              data-bg-image="assets/images/hero-image/grow.jpg"
            >
              <div class="container">
                <div class="row row-cols-lg-1 row-cols-1">
                  <div class="col align-self-center">
                    <a
                      href="contact-us"
                      class="text-white"
                      style={{ marginTop: "0px" }}
                    >
                      <div class="intro-content mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-xs-3">
                        <h2 class="sections_heading">
                          On your mark, <br />
                          get set GROW
                        </h2>
                        <div class="sections_heading_desc mb-1 d-lg-block d-md-block d-none">
                          <p>
                            We know large or small, every business is unique.
                            Whether you need a lot or little, we have a solution
                            tailored to your needs &amp; goals.
                          </p>
                        </div>
                        <span class="learn_more_link d-lg-block d-md-block d-none">
                          Learn More
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </Swiper>
      </div> */}

      <div className="bg-dark first-slider" style={{}}>
        <Swiper
          className="mySwiper"
          pagination={{ clickable: true }} // Update to use object syntax for options
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={1.2}
          centeredSlides={true}
          spaceBetween={40}
          loop={true}
          keyboard={{ enabled: true }} // Correct usage for keyboard support
          scrollbar={{ draggable: true }} // Correct usage for scrollbar
          style={{}}
        >
          <SwiperSlide
            className="zoom-background"
            style={{ height: "635px", overflow: "hidden" }}
          >
            <div
              className="intro-section section overlay slider_imgs"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundColor: "#000",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            >
              <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">
                  <div className="col align-self-center">
                    <Link
                      href="about-us"
                      className="text-white ps-2"
                      style={{ marginTop: "0px" }}
                    >
                      <div className="intro-content mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-xs-3">
                        <h2
                          className="sections_heading monda-font"
                          style={{ fontFamily: "var(--font-monda)" }}
                        >
                          Building future ready businesses
                        </h2>
                        <div className="sections_heading_desc mb-1 d-lg-block d-md-block d-none py-3 ">
                          <p>
                            Empowering organizations to thrive in tomorrow's
                            landscape through strategic innovation and
                            adaptability.
                          </p>
                        </div>
                        <div className="learn_more_link d-lg-block d-md-block d-none learn_more_background">
                          Learn More
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="zoom-background"
            style={{ height: "635px", overflow: "hidden" }}
          >
            <div
              className="intro-section section overlay slider_imgs"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundColor: "#000",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1504164996022-09080787b6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            >
              <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">
                  <div className="col align-self-center">
                    <Link
                      href="about-us"
                      className="text-white ps-2"
                      style={{ marginTop: "0px" }}
                    >
                      <div className="intro-content mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-xs-3">
                        <h2 className="sections_heading monda-font">
                          Building future ready businesses
                        </h2>
                        <div className="sections_heading_desc mb-1 d-lg-block d-md-block d-none  py-3">
                          <p>
                            Empowering organizations to thrive in tomorrow's
                            landscape through strategic innovation and
                            adaptability.
                          </p>
                        </div>
                        <span className="learn_more_link d-lg-block d-md-block d-none learn_more_background">
                          Learn More
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className="zoom-background"
            style={{ height: "635px", overflow: "hidden" }}
          >
            <div
              className="intro-section section overlay slider_imgs"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundColor: "#000",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            >
              <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">
                  <div className="col align-self-center">
                    <Link
                      href="about-us"
                      className="text-white ps-2"
                      style={{ marginTop: "0px" }}
                    >
                      <div className="intro-content mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-xs-3">
                        <h2 className="sections_heading monda-font">
                          Building future ready businesses
                        </h2>
                        <div className="sections_heading_desc mb-1 d-lg-block d-md-block d-none py-3 ">
                          <p>
                            Empowering organizations to thrive in tomorrow's
                            landscape through strategic innovation and
                            adaptability.
                          </p>
                        </div>
                        <span className="learn_more_link d-lg-block d-md-block d-none learn_more_background">
                          Learn More
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Repeat for other SwiperSlide components */}
          <SwiperSlide
            className="zoom-background"
            style={{ height: "635px", overflow: "hidden" }}
          >
            <div
              className="intro-section section overlay slider_imgs"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundColor: "#000",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            >
              <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">
                  <div className="col align-self-center max-mb-30">
                    <Link
                      href="https://1OEeK9c1JAVB.com/cleartax/"
                      target="_blank"
                      className="text-white"
                      style={{ marginTop: "0px" }}
                    >
                      <div className="intro-content mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-xs-3">
                        <h2 className="sections_heading monda-font">
                          Compliance lifecycle transformed for enterprises
                        </h2>
                        <div className="sections_heading_desc mb-1 d-lg-block d-md-block d-none py-3">
                          <p>
                            Revolutionize your approach to compliance. Discover
                            a lifecycle that works for your business.
                          </p>
                        </div>
                        <span className="learn_more_link d-lg-block d-md-block d-none learn_more_background">
                          Learn More
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    </>
  );
}
