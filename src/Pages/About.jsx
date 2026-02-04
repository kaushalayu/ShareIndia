import React from "react";
import ScrollToTop from "../Components/ScrollToTop";
import { Link } from "react-router-dom";
import AnimatedSection from "../Components/AnimatedSection";

const About = () => {
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
                <h2 className="wt-title">About Us</h2>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
            {/* BREADCRUMB ROW END */}
          </div>
          <div className="trv-inr-bnr-cloud">
            <div className="marquee">
              <img src="images/inr-banner-cloud.png" alt="Image" />
            </div>
          </div>
          <div className="trv-inr-bnr-plane">
            <div className="trv-inr-bnr-plane-bx">
              <img src="images/airplane.png" alt="Image" />
            </div>
          </div>
          <div className="trv-inr-bnr-bloon-1">
            <img src="images/hotballon-Left.png" alt="Image" />
          </div>
          <div className="trv-inr-bnr-bloon-2">
            <img src="images/hotballon-right.png" alt="Image" />
          </div>
          </div>
        </AnimatedSection>
        {/* INNER PAGE BANNER END */}

        {/*WE RECOMMEND SECTION START*/}
        <AnimatedSection variant="fadeInLeft" delay={0.2}>
          <div className="section-full p-t120 p-b0 trv-we-recommend">
          <div className="container">
            <div className="section-content">
              <div className="trv-we-recommend-row">
                <div className="row">
                  <div className="col-xl-5 col-lg-7 col-md-12">
                    <div className="trv-we-recommend-content">
                      {/* TITLE START*/}
                      <div className="section-head trv-head-title-wrap left-position">
                        <h2 className="trv-head-title">
                          We
                          <span className="site-text-yellow">Recommend </span>
                          Beautiful Destinations Every Month
                        </h2>
                        <div className="trv-head-discription">
                          SimplyIndiaHolidays is a trusted travel booking agency
                          that helps people explore India with comfort and ease.
                          They offer well-planned holiday packages, hotel
                          bookings, and transportation services at affordable
                          prices.
                        </div>
                      </div>
                      {/* TITLE END*/}

                      <div className="trv-we-rec-mid-section">
                        <div className="trv-24-7-bx">
                          <div className="trv-24-7-info">
                            <span className="nbr">24/7</span>
                            <span className="info">Guide Support</span>
                          </div>
                        </div>

                        <div className="trv-icon-bx-st1-bx">
                          <div className="trv-icon-bx-st1 m-b30">
                            <div className="trv-icon-bx-media">
                              <span>
                                <img
                                  src="images/trv-icon/travel-guide.png"
                                  alt="#"
                                />
                              </span>
                            </div>
                            <div className="trv-icon-bx-info">
                              <h4 className="trv-icon-bx-title">
                                Trusted travel guide
                              </h4>
                              <p className="p-text">
                                Provides reliable information to help travelers
                                plan their trips efficiently and safely.
                              </p>
                            </div>
                          </div>
                          <div className="trv-icon-bx-st1 m-b30">
                            <div className="trv-icon-bx-media">
                              <span>
                                <img
                                  src="images/trv-icon/mission-icon.png"
                                  alt="#"
                                />
                              </span>
                            </div>
                            <div className="trv-icon-bx-info">
                              <h4 className="trv-icon-bx-title">
                                Mission & Vision
                              </h4>
                              <p className="p-text">
                                Aims to connect people to positive experience
                                through travel, helping them see the world
                                differently.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="trv-we-rec-bottom-section">
                        <div className="trv-we-rec-btn">
                          <Link
                            to="/destination-detail"
                            className="site-button butn-bg-shape"
                          >
                            Discover More
                          </Link>
                        </div>
                        <div className="trv-hpy-cus">
                          <div className="trv-cus-pic-box">
                            <span className="trv-cus-pic-box-pic first-bx">
                              <img src="images/hpy-cus/pic1.jpg" alt="" />
                            </span>
                            <span className="trv-cus-pic-box-pic">
                              <img src="images/hpy-cus/pic2.jpg" alt="" />
                            </span>
                            <span className="trv-cus-pic-box-pic">
                              <img src="images/hpy-cus/pic3.jpg" alt="" />
                            </span>
                          </div>
                          <div className="trv-hpy-cus-count">
                            <span>500</span>
                            <p>Happy Customer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-5 col-md-12 trv-we-rec-media-main-wrap">
                    <div className="trv-year-section">
                      <div className="trv-year-media">
                        <img src="images/plane1.png" alt="image" />
                      </div>
                      <div className="trv-year-info">
                        <h2 className="numbr">5</h2>
                        <span>Years of Experience</span>
                      </div>
                    </div>
                    <div className="trc-we-rec-circle-bx">
                      <img src="images/we-rec-pic2.jpg" alt="image" />
                    </div>
                    <div className="trv-we-rec-media-main">
                      <img src="images/we-rec-pic.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </AnimatedSection>
        {/*WE RECOMMEND SECTION END*/}

        {/*MOST FAVORITE TOUR PLACE SECTION START*/}
        <div className="section-full trv-most-fav-tour-wrap">
          <div className="trv-most-fav-tour-mid">
            <div className="trv-most-fav-tour-top">
              <div className="trv-most-fav-tour-t-left">
                <div className="section-head trv-head-title-wrap left-position with-bg-dark">
                  <h2 className="trv-head-title">
                    <span className="site-text-yellow">Most Favorite</span> Tour
                    Places!
                  </h2>
                  <div className="trv-head-discription">
                    Choosing a destination can be exciting but also a bit
                    overwhelming with so many amazing places out there! Let's
                    narrow it down a little. Are you dreaming of peaceful
                    nature, buzzing cities, historical wonders, or relaxing
                    beaches?
                  </div>
                </div>
                <div className="trv-hpy-cus">
                  <div className="trv-cus-pic-box">
                    <span className="trv-cus-pic-box-pic first-bx">
                      <img src="images/pic1.jpg" alt="" />
                    </span>
                    <span className="trv-cus-pic-box-pic">
                      <img src="images/pic2.jpg" alt="" />
                    </span>
                    <span className="trv-cus-pic-box-pic">
                      <img src="images/pic3.jpg" alt="" />
                    </span>
                  </div>
                  <div className="trv-hpy-cus-count">
                    <span>350</span>
                    <p>Happy Customer</p>
                  </div>
                </div>
                <Link
                  to="/destination-detail"
                  className="site-button butn-bg-shape"
                >
                  View More Destinations
                </Link>
              </div>
              <div className="trv-most-fav-title">
                <span>Top!</span>
                Destination
              </div>
            </div>

            <div className="trv-most-fav-tour-bot">
              <div className="trv-most-fav-tour-row">
                <div className="swiper trv-mf-tour-carousal">
                  <div className="swiper-wrapper">
                    {/*BOX-1*/}
                    <div className="swiper-slide">
                      <div className="trv-mf-tour-bx1">
                        <div className="trv-media">
                          <img
                            src="images/destinations/style1/city1.png"
                            alt="Image"
                          />
                        </div>
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Tripura</Link>
                          <span>28 Listing</span>
                        </h3>
                      </div>
                    </div>
                    {/*BOX-2*/}
                    <div className="swiper-slide">
                      <div className="trv-mf-tour-bx1">
                        <div className="trv-media">
                          <img
                            src="images/destinations/style1/city2.png"
                            alt="Image"
                          />
                        </div>
                        <h3 className="trv-title">
                          <Link to="/destination-detail">
                            Thiruvananthapuram
                          </Link>
                          <span>32 Listing</span>
                        </h3>
                      </div>
                    </div>
                    {/*BOX-3*/}
                    <div className="swiper-slide">
                      <div className="trv-mf-tour-bx1">
                        <div className="trv-media">
                          <img
                            src="images/destinations/style1/city3.png"
                            alt="Image"
                          />
                        </div>
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Coorg</Link>
                          <span>20 Listing</span>
                        </h3>
                      </div>
                    </div>
                    {/*BOX-4*/}
                    <div className="swiper-slide">
                      <div className="trv-mf-tour-bx1">
                        <div className="trv-media">
                          <img
                            src="images/destinations/style1/city4.png"
                            alt="Image"
                          />
                        </div>
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Agra</Link>
                          <span>40 Listing</span>
                        </h3>
                      </div>
                    </div>
                    {/*BOX-5*/}
                    <div className="swiper-slide">
                      <div className="trv-mf-tour-bx1">
                        <div className="trv-media">
                          <img
                            src="images/destinations/style1/city5.png"
                            alt="Image"
                          />
                        </div>
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Banglore</Link>
                          <span>80 Listing</span>
                        </h3>
                      </div>
                    </div>
                    {/*BOX-6*/}
                    <div className="swiper-slide">
                      <div className="trv-mf-tour-bx1">
                        <div className="trv-media">
                          <img
                            src="images/destinations/style1/city6.png"
                            alt="Image"
                          />
                        </div>
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Barsana</Link>
                          <span>20 Listing</span>
                        </h3>
                      </div>
                    </div>
                    {/*BOX-7*/}
                    <div className="swiper-slide">
                      <div className="trv-mf-tour-bx1">
                        <div className="trv-media">
                          <img
                            src="images/destinations/style1/city7.png"
                            alt="Image"
                          />
                        </div>
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Kanyakumari</Link>
                          <span>20 Listing</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>

            <div className="trv-most-fav-media">
              <img src="images/man-rock.png" alt="Image" />
            </div>
          </div>
        </div>
        {/*MOST FAVORITE TOUR PLACE SECTION END*/}
        {/* WE OFFER SERVICES SECTION START */}
        <AnimatedSection variant="fadeInRight" delay={0.1}>
          <div className="section-full trv-we-off-service p-t120 p-b90">
          <div className="container">
            <div className="trv-we-off-sevice-row">
              <div className="row">
                <div className="col-lg-5 col-md-12">
                  <div className="trv-we-off-media">
                    <img
                      className="media1"
                      src="/images/Left-Man-Image.png"
                      alt="image"
                    />
                    <img
                      className="media2"
                      src="/images/travel-sites.png"
                      alt="image"
                    />
                    <div className="img-bg-shade"></div>
                  </div>
                </div>

                <div className="col-lg-7 col-md-12">
                  <div className="trv-we-off-content">
                    {/* TITLE START */}
                    <div className="section-head trv-head-title-wrap left-position with-bg-dark">
                      <h2 className="trv-head-title">
                        We offer Best
                        <span className="site-text-yellow"> Services </span>
                      </h2>
                      <div className="trv-head-discription">
                        SimplyIndiaHolidays is a trusted travel booking agency
                        that helps people explore India with comfort and ease.
                        They offer well-planned holiday packages, hotel
                        bookings, and transportation services at affordable
                        prices..
                      </div>
                    </div>
                    {/* TITLE END */}

                    {/* SERVICE BOXES */}
                    <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                        <div className="trv-servi-bx1 trv-servi-bx-clr1">
                          <div className="trv-icon">
                            <span>
                              <img
                                src="/images/trv-icon/ship.png"
                                alt="Image"
                              />
                            </span>
                          </div>
                          <div className="trv-icon-content">
                            <h4 className="title">Exclusive Trip</h4>
                            <p className="p-text">
                              We pay attention to every quality in the service
                              we provide to you
                            </p>
                          </div>
                          <div className="trv-step-corner-bx">
                            <div className="trv-step-corner">
                              <span>Step</span>
                              <div className="number">01</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                        <div className="trv-servi-bx1 trv-servi-bx-clr2">
                          <div className="trv-icon">
                            <span>
                              <img
                                src="/images/trv-icon/plane-booking.png"
                                alt="Image"
                              />
                            </span>
                          </div>
                          <div className="trv-icon-content">
                            <h4 className="title">Easy Booking</h4>
                            <p className="p-text">
                              Booking process and full support service
                              assistance from us.
                            </p>
                          </div>
                          <div className="trv-step-corner-bx">
                            <div className="trv-step-corner">
                              <span>Step</span>
                              <div className="number">02</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                        <div className="trv-servi-bx1 trv-servi-bx-clr3">
                          <div className="trv-icon">
                            <span>
                              <img
                                src="/images/trv-icon/guide-icon.png"
                                alt="Image"
                              />
                            </span>
                          </div>
                          <div className="trv-icon-content">
                            <h4 className="title">Professional Guide</h4>
                            <p className="p-text">
                              While on vacation will be guided by our
                              professional guide
                            </p>
                          </div>
                          <div className="trv-step-corner-bx">
                            <div className="trv-step-corner">
                              <span>Step</span>
                              <div className="number">03</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="media1-large">
                      <img src="/images/landscape-pic.jpg" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="trv-left-bulding">
            <img src="/images/building-1.png" alt="Image" />
          </div>

          <div className="trv-right-sm-plane">
            <img src="/images/Right-top-plane.png" alt="Image" />
          </div>
          </div>
        </AnimatedSection>
        {/* WE OFFER SERVICES SECTION END */}
        {/* TESTIMONIAL SECTION START */}
        <AnimatedSection variant="fadeInUp" delay={0.3}>
          <div className="section-full trv-testimonial-st2-wrap tvr-hot-ballon-wrap">
          <div className="container">
            {/* TITLE START */}
            <div className="section-head trv-head-title-wrap center-position">
              <h2 className="trv-head-title">
                Our Client <span className="site-text-yellow">Says! </span>
              </h2>
              <div className="trv-head-discription">
                Destinations worth exploring! Here are a few popular spots
              </div>
              <div className="trv-head-title-image">
                <img src="/images/background/Title-Separator.png" alt="Image" />
              </div>
            </div>
            {/* TITLE END */}

            <div className="section-content">
              <div className="trv-gradi-text">
                Testimonial
                <img src="/images/airplane-takeoff1.png" alt="Image" />
              </div>

              <div className="trv-testimonial-st2">
                {/* CONTENT SLIDER */}
                <div className="swiper testimonial-content-sld">
                  <div className="swiper-wrapper">
                    {/* SLIDE 1 */}
                    <div className="swiper-slide">
                      <div className="trv-testimo-bx2">
                        <div className="media">
                          <img
                            src="/images/trv-testimonial2/pic1.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <div className="trv-testimo-head">
                            <div className="left-part">
                              <h4 className="trv-testimonial-name">
                                Amelia Warner
                              </h4>
                              <span className="trv-testimonial-position">
                                Tourist
                              </span>
                            </div>
                            <div className="right-part">
                              <img
                                src="/images/trv-icon/Quote.png"
                                alt="quote"
                              />
                            </div>
                          </div>
                          <p>
                            Once the travel bug bites, there is no known
                            antidote, and I know that I shall be happily
                            infected until the end of my life.
                          </p>
                          <div className="rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SLIDE 2 */}
                    <div className="swiper-slide">
                      <div className="trv-testimo-bx2">
                        <div className="media">
                          <img
                            src="/images/trv-testimonial2/pic2.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <div className="trv-testimo-head">
                            <div className="left-part">
                              <h4 className="trv-testimonial-name">
                                Kavin Martin
                              </h4>
                              <span className="trv-testimonial-position">
                                Traveler
                              </span>
                            </div>
                            <div className="right-part">
                              <img
                                src="/images/trv-icon/Quote.png"
                                alt="quote"
                              />
                            </div>
                          </div>
                          <p>
                            Booking was smooth and the trip was perfectly
                            planned. Highly recommended!
                          </p>
                          <div className="rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SLIDE 3 */}
                    <div className="swiper-slide">
                      <div className="trv-testimo-bx2">
                        <div className="media">
                          <img
                            src="/images/trv-testimonial2/pic3.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <div className="trv-testimo-head">
                            <div className="left-part">
                              <h4 className="trv-testimonial-name">Antonio</h4>
                              <span className="trv-testimonial-position">
                                Tourist
                              </span>
                            </div>
                            <div className="right-part">
                              <img
                                src="/images/trv-icon/Quote.png"
                                alt="quote"
                              />
                            </div>
                          </div>
                          <p>
                            A journey is best measured in friends and memories.
                            This trip gave me both.
                          </p>
                          <div className="rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SLIDE 4 */}
                    <div className="swiper-slide">
                      <div className="trv-testimo-bx2">
                        <div className="media">
                          <img
                            src="/images/trv-testimonial2/pic4.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <div className="trv-testimo-head">
                            <div className="left-part">
                              <h4 className="trv-testimonial-name">Zeynep</h4>
                              <span className="trv-testimonial-position">
                                Tourist
                              </span>
                            </div>
                            <div className="right-part">
                              <img
                                src="/images/trv-icon/Quote.png"
                                alt="quote"
                              />
                            </div>
                          </div>
                          <p>
                            Amazing experience! Everything was handled
                            professionally and smoothly.
                          </p>
                          <div className="rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-content-sld-control">
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </div>

                {/* THUMBNAIL SLIDER */}
                <div className="swiper testimonial-thum-sld">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="trv-testimo-bx2-thumb">
                        <img
                          src="/images/trv-testimonial2/pic1.jpg"
                          alt="thumb"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="trv-testimo-bx2-thumb">
                        <img
                          src="/images/trv-testimonial2/pic2.jpg"
                          alt="thumb"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="trv-testimo-bx2-thumb">
                        <img
                          src="/images/trv-testimonial2/pic3.jpg"
                          alt="thumb"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="trv-testimo-bx2-thumb">
                        <img
                          src="/images/trv-testimonial2/pic4.jpg"
                          alt="thumb"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-hot-ballon">
            <img src="/images/hotballon-right.png" alt="image" />
          </div>
          </div>
        </AnimatedSection>
        {/* TESTIMONIAL SECTION END */}
        <ScrollToTop />
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default About;
