import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import AnimatedSection from "../Components/AnimatedSection";

export default function Tour() {
  return (
    <div className="page-wraper">
      {/* CONTENT START */}
      <div className="page-content">

        {/* INNER PAGE BANNER */}
        <AnimatedSection variant="fadeInDown">
          <div className="wt-bnr-inr overlay-wraper bg-center">
          <div className="overlay-main innr-bnr-olay"></div>

          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="wt-title">Tours</h2>
              </div>

              {/* BREADCRUMB */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Tours</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="trv-inr-bnr-cloud">
            <div className="marquee">
              <img src="/images/inr-banner-cloud.png" alt="Image" />
            </div>
          </div>

          <div className="trv-inr-bnr-plane">
            <div className="trv-inr-bnr-plane-bx">
              <img src="/images/airplane.png" alt="Image" />
            </div>
          </div>

          <div className="trv-inr-bnr-bloon-1">
            <img src="/images/hotballon-Left.png" alt="Image" />
          </div>

          <div className="trv-inr-bnr-bloon-2">
            <img src="/images/hotballon-right.png" alt="Image" />
          </div>
          </div>
        </AnimatedSection>
        {/* INNER PAGE BANNER END */}

        {/* POPULAR TOURS */}
        <AnimatedSection variant="fadeInUp" delay={0.2}>
          <div className="section-full trv-popular-tours p-t120">
          <div className="container-fluid">

            <div className="section-head trv-head-title-wrap center-position">
              <h2 className="trv-head-title">
                Explore Popular<span className="site-text-yellow"> Tours!</span>
              </h2>
              <div className="trv-head-discription">
                Destinations worth exploring! Here are a few popular spots
              </div>
              <div className="trv-head-title-image">
                <img
                  src="/images/background/Title-Separator.png"
                  alt="Image"
                />
              </div>
            </div>

            <div className="section-content">
              <div className="swiper trv-popular-tours-row trv-tours-st1-carousal swiper-nav-center-bottom">
                <div className="swiper-wrapper">

                  {[
                    {
                      img: "dest1.png",
                      days: "5 days , 4 Nights",
                      title:
                        "Ranthambhore, Bharatpur & Sariska Wildlife Trail",
                      price: "22500",
                      desc:
                        "Experience the thrilling side of Rajasthan with the Best of Rajasthan Wildlife Safari Tour",
                    },
                    {
                      img: "dest2.png",
                      days: "9 days , 8 Nights",
                      title:
                        "Majestic Rajasthan: Udaipur to Jaipur with Safari",
                      price: "30996",
                      desc:
                        "Experience the diverse beauty of Rajasthan with the Best of Rajasthan II",
                    },
                    {
                      img: "dest1.png",
                      days: "9 days , 8 Nights",
                      title:
                        "Majestic Rajasthan Journey – Jaipur to Bikaner",
                      price: "30996",
                      desc:
                        "Experience the ultimate blend of royal heritage and culture",
                    },
                    {
                      img: "dest2.png",
                      days: "7 days , 6 Nights",
                      title:
                        "Land of Kings: Jaipur–Jodhpur–Udaipur Tour",
                      price: "26838",
                      desc:
                        "Experience the timeless grandeur of Rajasthan",
                    },
                    {
                      img: "dest3.png",
                      days: "7 days , 6 Nights",
                      title:
                        "Heritage, Hills & Lakes ,Ahmedabad–Mount Abu–Udaipur Tour",
                      price: "26838",
                      desc:
                        "Perfect blend of spirituality, heritage, hills, and royal grandeur",
                    },
                    {
                      img: "dest3.png",
                      days: "6 days , 5 Nights",
                      title:
                        "Mussoorie, Dehradun Explorer Tour",
                      price: "21105",
                      desc:
                        "Scenic hill stations, cultural heritage, and spirituality",
                    },
                  ].map((tour, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="trv-popular-tour-st1">
                        <div className="trv-media">
                          <Link to="/tour-detail">
                            <img
                              src={`/images/tour/style1/${tour.img}`}
                              alt="Image"
                            />
                          </Link>

                          <div className="trv-tour-duration">
                            <i className="bi bi-calendar2-week"></i>
                            <span>{tour.days}</span>
                          </div>

                          <div className="trv-tour-title">
                            <h3 className="trv-title">
                              <Link to="/tour-detail">
                                <i className="bi bi-geo-alt"></i>{" "}
                                {tour.title}
                              </Link>
                            </h3>
                          </div>
                        </div>

                        <div className="trv-content">
                          <div className="trv-content-head-section">
                            <div className="trv-tour-price">
                              <span className="price">{tour.price}</span>
                              <span className="price-duration">
                                Starting Price
                              </span>
                            </div>
                            <div className="trv-tour-info">
                              <Link to="/tour-detail">{tour.desc}</Link>
                            </div>
                          </div>

                          <div className="trv-content-bottom-section">
                            <div className="trv-book">
                              <Link
                                to="/tour-detail"
                                className="site-button outline"
                              >
                                Book Now
                              </Link>
                            </div>
                            <div className="trv-tour-rating">
                              <span className="trv-tour-review-count">
                                (4.8 Review)
                              </span>
                              <div className="trv-review-rating">
                                {[...Array(5)].map((_, i) => (
                                  <i
                                    className="bi bi-star-fill"
                                    key={i}
                                  ></i>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>
          </div>
        </AnimatedSection>
        {/* POPULAR TOURS END */}

        {/* ADVENTURE SECTION */}
        <div
          className="trv-adventure-st1"
          style={{
            backgroundImage:
              "url(/images/background/adv-bg.jpg)",
          }}
        >
          <div className="circle-text2">
            <div className="emblem-wrap">
              <div className="emblem">

              </div>
              <i>
                <img
                  src="/images/advanture-st1.png"
                  alt="In Circle Pic"
                />
              </i>
            </div>
          </div>

          <h2 className="adventure-title">Adventure</h2>
          <p className="adventure-text">It’s time to Travel</p>

          <Link to="/contact" className="site-button butn-bg-shape">
            Booking Now
          </Link>
        </div>
        {/* SITE SCENE GALLERY SECTION START */}
        <div className="section-full trv-client-section">
          <div className="trv-client-row">
            <div className="container">
              <div className="section-content">
                <div className="trv-client-carousel">
                  <div className="row">
                    {/* LEFT TITLE */}
                    <div className="col-xl-3 col-lg-12 col-md-12">
                      <div className="trv-client-titlesection">
                        <h2 className="trv-head-title">
                          <span className="site-text-yellow">Site </span>
                          Scene Gallery
                        </h2>
                      </div>
                    </div>

                    {/* RIGHT GALLERY */}
                    <div className="col-xl-9 col-lg-12 col-md-12">
                      <div className="swiper trv-inr-gallery trv-inr-gallery-carousal">
                        <div className="owl-carousel home-client-carousel">
                          {/* COLUMN 1 */}
                          <div className="item">
                            <div className="trv-gallery-rev-st2">
                              <div className="trv-gallery-rev-st2-media">
                                <a
                                  className="elem"
                                  href="/images/gallery-2/pic1.jpg"
                                  title="Title 1"
                                  data-lcl-author=""
                                  data-lcl-thumb="/images/gallery-2/pic1.jpg"
                                >
                                  <img src="/images/pic1_3.jpg" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* COLUMN 2 */}
                          <div className="item">
                            <div className="trv-gallery-rev-st2">
                              <div className="trv-gallery-rev-st2-media">
                                <a
                                  className="elem"
                                  href="/images/gallery-2/pic2.jpg"
                                  title="Title 2"
                                  data-lcl-author=""
                                  data-lcl-thumb="/images/gallery-2/pic2.jpg"
                                >
                                  <img src="/images/pic2_1.jpg" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* COLUMN 3 */}
                          <div className="item">
                            <div className="trv-gallery-rev-st2">
                              <div className="trv-gallery-rev-st2-media">
                                <a
                                  className="elem"
                                  href="/images/gallery-2/pic3.jpg"
                                  title="Title 3"
                                  data-lcl-author=""
                                  data-lcl-thumb="/images/gallery-2/pic3.jpg"
                                >
                                  <img src="/images/pic3_4.jpg" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* COLUMN 4 */}
                          <div className="item">
                            <div className="trv-gallery-rev-st2">
                              <div className="trv-gallery-rev-st2-media">
                                <a
                                  className="elem"
                                  href="/images/gallery-2/pic4.jpg"
                                  title="Title 4"
                                  data-lcl-author=""
                                  data-lcl-thumb="/images/gallery-2/pic4.jpg"
                                >
                                  <img src="/images/pic4_2.jpg" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* COLUMN 5 */}
                          <div className="item">
                            <div className="trv-gallery-rev-st2">
                              <div className="trv-gallery-rev-st2-media">
                                <a
                                  className="elem"
                                  href="/images/gallery-2/pic5.jpg"
                                  title="Title 5"
                                  data-lcl-author=""
                                  data-lcl-thumb="/images/gallery-2/pic5.jpg"
                                >
                                  <img src="/images/pic5.jpg" alt="" />
                                </a>
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
          </div>
        </div>
        {/* SITE SCENE GALLERY SECTION END */}
        <ScrollToTop />
      </div>
      {/* CONTENT END */}
    </div>
  );
}
