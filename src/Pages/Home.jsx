import React, { useState } from "react";
import ScrollToTop from "../Components/ScrollToTop";
import { Link } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // yahan API / backend connect kar sakta hai
  };
  return (
    <div className="page-wraper">
      {/* CONTENT START */}
      <div className="page-content">
        {/* Banner Style One */}
        <div className="trv-banner-1-wrap">
          <div className="trv-banner-1-rain-effect">
            <div className="rain front-row"></div>
            <div className="rain back-row"></div>
          </div>

          <video muted autoPlay playsInline loop className="trv-vid-full">
            <source src="/images/video-1.mp4" type="video/mp4" />
          </video>

          <div className="trv-banner-1-overlay">
            <div className="trv-banner-1-text">
              <span className="trv-banner-1-text-small">Explore</span>

              <div className="trv-banner-1-text-mid">
                <h1 className="trv-banner-1-text-large" title="India">
                  India
                  <img
                    className="trv-btrfly"
                    src="/images/butterfly.gif"
                    alt="image"
                  />
                </h1>
                <h1 className="trv-banner-1-text-large-outline" title="India">
                  India
                </h1>
              </div>

              <span className="trv-banner-rock-pic">
                <img src="/images/main-slider/slider1/Rock.png" alt="Image" />
              </span>

              <div className="trv-banner-text-detail">
                The Safety of our customers at all stages
              </div>

              <div className="trv-banner-btn">
                <Link to="/contact" className="site-button butn-bg-shape">
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="trv-banner-1-social">
              <span>Follow Us</span>
              <ul>
                <li>
                  <a href="#" aria-label="facebook">
                    <i className="feather feather-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="linkedin">
                    <i className="feather feather-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="instagram">
                    <i className="feather feather-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* CIRCLES */}
            <div className="twm-img-bg-circle-area">
              <div className="twm-img-bg-circle1-wrap">
                <div className="twm-img-bg-circle1 rotate-center">
                  <span></span>
                </div>
              </div>
              <div className="twm-img-bg-circle2-wrap">
                <div className="twm-img-bg-circle2 rotate-center-reverse">
                  <span></span>
                </div>
              </div>
              <div className="twm-img-bg-circle3-wrap">
                <div className="twm-img-bg-circle3 rotate-center">
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT */}
          <div className="tvr-banner-1-bottom-left">
            <div className="media">
              <img src="/images/lizard.png" alt="Image" className="lizard" />
              <img
                src="/images/li-eye.gif"
                alt="image"
                className="lizard-eye"
              />
            </div>
          </div>

          {/* CLOUDS */}
          <div className="trv-cloud-1">
            <div className="marquee-hm1-cloud1">
              <img src="/images/cloud-1.png" alt="Image" />
            </div>
          </div>

          <div className="trv-cloud-2">
            <div className="marquee-hm1-cloud2">
              <img src="/images/cloud-2.png" alt="Image" />
            </div>
          </div>
        </div>
        {/* Banner Style One End */}

        {/* SEARCH BAR START */}
        <div className="trv-search-st1-wrap">
          <div className="trv-search-st1">
            <div className="trv-search-st1-bg">
              <form>
                <div className="trv-search-st1-column-wrap">
                  {/* LOCATION */}
                  <div className="trv-search-st1-column">
                    <div className="form-group">
                      <label>
                        <i>
                          <img
                            src="/images/search-icon/icon1.png"
                            alt="Image"
                          />
                        </i>
                        Location
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Location select"
                        defaultValue="Coorg"
                      >
                        <option value="Coorg">Coorg</option>
                        <option value="Agra">Agra</option>
                        <option value="Barsana">Barsana</option>
                        <option value="Bengaluru">Bengaluru</option>
                      </select>
                    </div>
                  </div>

                  {/* ACTIVITY TYPE */}
                  <div className="trv-search-st1-column">
                    <div className="form-group">
                      <label>
                        <i>
                          <img
                            src="/images/search-icon/icon2.png"
                            alt="Image"
                          />
                        </i>
                        Activity Type
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Activity select"
                        defaultValue="Adventure"
                      >
                        <option value="Adventure">Adventure</option>
                        <option value="Rishikesh">Rishikesh</option>
                        <option value="Haridware">Haridware</option>
                        <option value="Kashmir">Kashmir</option>
                      </select>
                    </div>
                  </div>

                  {/* DATE */}
                  <div className="trv-search-st1-column">
                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                      <label>
                        <i>
                          <img
                            src="/images/search-icon/icon3.png"
                            alt="Image"
                          />
                        </i>
                        Date
                      </label>
                      <div className="input-group">
                        <div className="input-group date datepicker">
                          <input className="form-control" placeholder="Date" />
                          <span className="input-group-append input-group-addon">
                            <span className="input-group-text">
                              <i className="fa fa-solid fa-calendar-days"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TRAVELER */}
                  <div className="trv-search-st1-column">
                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                      <label>
                        <i>
                          <img
                            src="/images/search-icon/icon4.png"
                            alt="Image"
                          />
                        </i>
                        Traveler
                      </label>
                      <div className="quantity btn-quantity2">
                        <input
                          id="demo_vertical2"
                          type="text"
                          defaultValue="1"
                          name="demo_vertical2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SEARCH BUTTON */}
                  <div className="trv-search-st1-column-last">
                    <div className="trv-search-st1-search-btn">
                      <button type="button" className="srch-btn">
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* SEARCH BAR END */}
        {/* POPULAR DESTINATION SECTION START */}
        <div
          className="section-full p-t120 p-b90 trv-popular-destination tvr-hot-ballon-wrap"
          style={{
            backgroundImage: "url(/images/background/Cloud-bg.png)",
          }}
        >
          <div className="container">
            {/* TITLE START */}
            <div className="section-head trv-head-title-wrap center-position">
              <h2 className="trv-head-title">
                <span className="site-text-yellow">Popular </span>Destination
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
              <div className="swiper trv-popular-destination-row trv-pop-des-st1-carousal swiper-nav-center-bottom">
                <div className="swiper-wrapper">
                  {/* SLIDE 1 */}
                  <div className="swiper-slide">
                    <div className="trv-destination-bx1">
                      <div className="trv-media">
                        <Link to="/destination-detail">
                          <img
                            src="/images/destinations/style1/city1.png"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="trv-content">
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Madurai</Link>
                        </h3>
                      </div>
                      <div className="trv-on-hover">
                        <img
                          src="/images/destinations/hotballon-right.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SLIDE 2 */}
                  <div className="swiper-slide">
                    <div className="trv-destination-bx1">
                      <div className="trv-media">
                        <Link to="/destination-detail">
                          <img
                            src="/images/destinations/style1/city2.png"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="trv-content">
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Trupati</Link>
                        </h3>
                      </div>
                      <div className="trv-on-hover">
                        <img
                          src="/images/destinations/hotballon-right.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SLIDE 3 */}
                  <div className="swiper-slide">
                    <div className="trv-destination-bx1">
                      <div className="trv-media">
                        <Link to="/destination-detail">
                          <img
                            src="/images/destinations/style1/city3.png"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="trv-content">
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Coorg</Link>
                        </h3>
                      </div>
                      <div className="trv-on-hover">
                        <img
                          src="/images/destinations/hotballon-right.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SLIDE 4 */}
                  <div className="swiper-slide">
                    <div className="trv-destination-bx1">
                      <div className="trv-media">
                        <Link to="/destination-detail">
                          <img
                            src="/images/destinations/style1/city4.png"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="trv-content">
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Agra</Link>
                        </h3>
                      </div>
                      <div className="trv-on-hover">
                        <img
                          src="/images/destinations/hotballon-right.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SLIDE 5 */}
                  <div className="swiper-slide">
                    <div className="trv-destination-bx1">
                      <div className="trv-media">
                        <Link to="/destination-detail">
                          <img
                            src="/images/destinations/style1/city5.png"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="trv-content">
                        <h3 className="trv-title">
                          <Link to="/destination-detail">
                            Thiruvananthapuram
                          </Link>
                        </h3>
                      </div>
                      <div className="trv-on-hover">
                        <img
                          src="/images/destinations/hotballon-right.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SLIDE 6 */}
                  <div className="swiper-slide">
                    <div className="trv-destination-bx1">
                      <div className="trv-media">
                        <Link to="/destination-detail">
                          <img
                            src="/images/destinations/style1/city6.png"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="trv-content">
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Barsana</Link>
                        </h3>
                      </div>
                      <div className="trv-on-hover">
                        <img
                          src="/images/destinations/hotballon-right.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SLIDE 7 */}
                  <div className="swiper-slide">
                    <div className="trv-destination-bx1">
                      <div className="trv-media">
                        <Link to="/destination-detail">
                          <img
                            src="/images/destinations/style1/city7.png"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="trv-content">
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Kanyakumari</Link>
                        </h3>
                      </div>
                      <div className="trv-on-hover">
                        <img
                          src="/images/destinations/hotballon-right.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SLIDE 8 */}
                  <div className="swiper-slide">
                    <div className="trv-destination-bx1">
                      <div className="trv-media">
                        <Link to="/destination-detail">
                          <img
                            src="/images/destinations/style1/city8.png"
                            alt="Image"
                          />
                        </Link>
                      </div>
                      <div className="trv-content">
                        <h3 className="trv-title">
                          <Link to="/destination-detail">Banglore</Link>
                        </h3>
                      </div>
                      <div className="trv-on-hover">
                        <img
                          src="/images/destinations/hotballon-right.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>

          <div className="left-hot-ballon">
            <img src="/images/hotballon-Left.png" alt="image" />
          </div>
          <div className="right-hot-ballon">
            <img src="/images/hotballon-right.png" alt="image" />
          </div>
        </div>
        {/* POPULAR DESTINATION SECTION END */}

        {/*WE RECOMMEND SECTION START*/}
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
        {/*WE RECOMMEND SECTION END*/}
        {/* CLIENT LOGO SECTION START */}
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
                          <span className="site-text-yellow">100+ </span>
                          Brands Trust Us
                        </h2>
                      </div>
                    </div>

                    {/* RIGHT CAROUSEL */}
                    <div className="col-xl-9 col-lg-12 col-md-12">
                      <div className="owl-carousel home-client-carousel">
                        <div className="item">
                          <div className="ow-client-logo">
                            <div className="client-logo client-logo-media">
                              <Link to="/about">
                                <img
                                  src="/images/client-logo/dark/1.png"
                                  alt="logo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div className="ow-client-logo">
                            <div className="client-logo client-logo-media">
                              <Link to="/about">
                                <img
                                  src="/images/client-logo/dark/2.png"
                                  alt="logo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div className="ow-client-logo">
                            <div className="client-logo client-logo-media">
                              <Link to="/about">
                                <img
                                  src="/images/client-logo/dark/3.png"
                                  alt="logo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div className="ow-client-logo">
                            <div className="client-logo client-logo-media">
                              <Link to="/about">
                                <img
                                  src="/images/client-logo/dark/4.png"
                                  alt="logo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div className="ow-client-logo">
                            <div className="client-logo client-logo-media">
                              <Link to="/about">
                                <img
                                  src="/images/client-logo/dark/5.png"
                                  alt="logo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* REPEAT LOGOS */}
                        <div className="item">
                          <div className="ow-client-logo">
                            <div className="client-logo client-logo-media">
                              <Link to="/about">
                                <img
                                  src="/images/client-logo/dark/1.png"
                                  alt="logo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div className="ow-client-logo">
                            <div className="client-logo client-logo-media">
                              <Link to="/about">
                                <img
                                  src="/images/client-logo/dark/2.png"
                                  alt="logo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div className="ow-client-logo">
                            <div className="client-logo client-logo-media">
                              <Link to="/about">
                                <img
                                  src="/images/client-logo/dark/3.png"
                                  alt="logo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div className="ow-client-logo">
                            <div className="client-logo client-logo-media">
                              <Link to="/about">
                                <img
                                  src="/images/client-logo/dark/4.png"
                                  alt="logo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <div className="ow-client-logo">
                            <div className="client-logo client-logo-media">
                              <Link to="/about">
                                <img
                                  src="/images/client-logo/dark/5.png"
                                  alt="logo"
                                />
                              </Link>
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
        {/* CLIENT LOGO SECTION END */}
        {/* VIDEO WITH ACHIVMENT SECTION START */}
        <div className="section-full trv-achivment-section">
          <div className="container">
            <div className="trv-achivment-row">
              <div className="parallax-section">
                <div className="parallax-content">
                  <div className="video-section-outer">
                    <div className="video-section">
                      <a
                        href="https://player.vimeo.com/video/213315632?color=ffffff&title=0&byline=0&portrait=0"
                        className="mfp-video play-now-video"
                      >
                        <i className="icon fa fa-play"></i>
                        <span className="ripple"></span>
                      </a>
                    </div>
                  </div>

                  <div className="trv-say-yesbx-wrap">
                    <div className="trv-say-yesbx">
                      <div className="say-title">
                        Say <span>Yes!</span>
                      </div>
                      <div className="say-title2">To New Adventure</div>
                    </div>
                  </div>
                </div>

                <div
                  className="trv-vid-st2 parallax-image"
                  style={{
                    backgroundImage: "url(/images/background/vid-bg2.jpg)",
                  }}
                ></div>

                <div className="trv-vid-st2-counter">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                      <div className="trv-counter-outer-one">
                        <div className="trv-counter-media">
                          <img
                            src="/images/trv-icon/count-icon1.png"
                            alt="Image"
                          />
                        </div>
                        <div className="trv-icon-content-info">
                          <h4 className="trv-icon-title">Awards Winning</h4>
                          <div className="counter-out">
                            <span className="counter">36</span>
                            <b>+</b>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                      <div className="trv-counter-outer-one">
                        <div className="trv-counter-media">
                          <img
                            src="/images/trv-icon/count-icon2.png"
                            alt="Image"
                          />
                        </div>
                        <div className="trv-icon-content-info">
                          <h4 className="trv-icon-title">Happy Traveler</h4>
                          <div className="counter-out">
                            <span className="counter">3600</span>
                            <b>+</b>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                      <div className="trv-counter-outer-one">
                        <div className="trv-counter-media">
                          <img
                            src="/images/trv-icon/count-icon3.png"
                            alt="Image"
                          />
                        </div>
                        <div className="trv-icon-content-info">
                          <h4 className="trv-icon-title">Tours success</h4>
                          <div className="counter-out">
                            <span className="counter">200</span>
                            <b></b>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                      <div className="trv-counter-outer-one">
                        <div className="trv-counter-media">
                          <img
                            src="/images/trv-icon/count-icon4.png"
                            alt="Image"
                          />
                        </div>
                        <div className="trv-icon-content-info">
                          <h4 className="trv-icon-title">Our Experience</h4>
                          <div className="counter-out">
                            <span className="counter">5</span>
                            <b>+</b>
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
        {/* VIDEO WITH ACHIVMENT SECTION END */}

        {/* WE OFFER SERVICES SECTION START */}
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
        {/* WE OFFER SERVICES SECTION END */}
        {/* POPULAR SEARCH DESTINATION START */}
        <div className="section-full trv-popular-search">
          <div className="trv-pop-search-carousel-bx">
            <div className="owl-carousel tvr-pop-search-carousel">
              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>250 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Agra
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>65 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Trupati
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>175 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Banglore
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>130 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Barsana
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>100 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Kanyakumari
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>35 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Dargling
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>200 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Kashmir
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>65 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Uttrakhand
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>175 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Bhutan
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>130 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Ujjain
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>140 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Haridwar
                  </Link>
                </div>
              </div>

              <div className="item">
                <div className="tvr-pop-tour">
                  <div className="tvr-total-listing">
                    <i className="bi bi-flag"></i>350 Tour
                  </div>
                  <Link to="/tour-grid" className="tvr-pop-tour-name">
                    Himachal
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="tvr-pop-search-bot-section">
              <div className="row">
                <div className="col-md-5">
                  <div className="media">
                    <img src="/images/pop-search-left-pic.png" alt="Image" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tvr-large-title-st1">
                    <span className="sm-title">Popular!</span>
                    <h2 className="lg-title">Search</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* POPULAR SEARCH DESTINATION END */}

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
                <a
                  href="destination-detail.html"
                  className="site-button butn-bg-shape"
                >
                  View More Destinations
                </a>
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
        {/* EXPLORE POPULAR TOUR START */}
        <div className="section-full trv-popular-tours p-t120">
          <div className="container-fluid">
            {/* TITLE START */}
            <div className="section-head trv-head-title-wrap center-position">
              <h2 className="trv-head-title">
                Explore Popular<span className="site-text-yellow"> Tours!</span>
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
              <div className="swiper trv-popular-tours-row trv-tours-st1-carousal swiper-nav-center-bottom">
                <div className="swiper-wrapper">
                  {/* SLIDE 1 */}
                  <div className="swiper-slide">
                    <div className="trv-popular-tour-st1">
                      <div className="trv-media">
                        <Link to="/tour-detail">
                          <img
                            src="/images/tour/style1/dest1.png"
                            alt="Image"
                          />
                        </Link>
                        <div className="trv-tour-duration">
                          <i className="bi bi-calendar2-week"></i>
                          <span>5 days , 4 Nights</span>
                        </div>
                        <div className="trv-tour-title">
                          <h3 className="trv-title">
                            <Link to="/tour-detail">
                              <i className="bi bi-geo-alt"></i>
                              Ranthambhore, Bharatpur & Sariska Wildlife Trail
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <div className="trv-content">
                        <div className="trv-content-head-section">
                          <div className="trv-tour-price">
                            <span className="price">22500</span>
                            <span className="price-duration">
                              Starting price
                            </span>
                          </div>
                          <div className="trv-tour-info">
                            <Link to="/tour-detail">
                              Experience the thrilling side of Rajasthan with
                              the Best of Rajasthan Wildlife Safari Tour, a
                              perfectly curated journey that combines royal
                              heritage
                            </Link>
                          </div>
                        </div>

                        <div className="trv-content-bottom-section">
                          <div className="trv-book">
                            <Link to="/tour-detail" className="site-button outline">
                              Book Now
                            </Link>
                          </div>
                          <div className="trv-tour-rating">
                            <span className="trv-tour-review-count">
                              (4.8 Review)
                            </span>
                            <div className="trv-review-rating">
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
                  </div>

                  {/* SLIDE 2 */}
                  <div className="swiper-slide">
                    <div className="trv-popular-tour-st1">
                      <div className="trv-media">
                        <Link to="/tour-detail">
                          <img
                            src="/images/tour/style1/dest2.png"
                            alt="Image"
                          />
                        </Link>
                        <div className="trv-tour-duration">
                          <i className="bi bi-calendar2-week"></i>
                          <span>9 days , 8 Nights</span>
                        </div>
                        <div className="trv-tour-title">
                          <h3 className="trv-title">
                            <Link to="/tour-detail">
                              <i className="bi bi-geo-alt"></i>
                              Majestic Rajasthan: Udaipur to Jaipur with Safari
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <div className="trv-content">
                        <div className="trv-content-head-section">
                          <div className="trv-tour-price">
                            <span className="price">30996</span>
                            <span className="price-duration">
                              Starting Price
                            </span>
                          </div>
                          <div className="trv-tour-info">
                            <Link to="/tour-detail">
                              Experience the diverse beauty of Rajasthan with
                              the Best of Rajasthan II: Heritage , Wildlife &
                              Royal Cities Tour
                            </Link>
                          </div>
                        </div>

                        <div className="trv-content-bottom-section">
                          <div className="trv-book">
                            <Link to="/tour-detail" className="site-button outline">
                              Book Now
                            </Link>
                          </div>
                          <div className="trv-tour-rating">
                            <span className="trv-tour-review-count">
                              (4.8 Review)
                            </span>
                            <div className="trv-review-rating">
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
                  </div>
                  <div className="swiper-slide">
                    <div className="trv-popular-tour-st1">
                      <div className="trv-media">
                        <Link to="/tour-detail">
                          <img src="images/tour/style1/dest3.png" alt="Image" />
                        </Link>

                        <div className="trv-tour-duration">
                          <i className="bi bi-calendar2-week"></i>
                          <span>7 days , 6 Nights</span>
                        </div>

                        <div className="trv-tour-title">
                          <h3 className="trv-title">
                            <Link to="/tour-detail">
                              <i className="bi bi-geo-alt"></i>
                              Heritage, Hills & Lakes ,Ahmedabad–Mount Abu–Udaipur Tour
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <div className="trv-content">
                        <div className="trv-content-head-section">
                          <div className="trv-tour-price">
                            <span className="price">26838</span>
                            <span className="price-duration">Starting Price</span>
                          </div>

                          <div className="trv-tour-info">
                            <Link to="/tour-detail">
                              Experience a perfect blend of spirituality, heritage, hills, and
                              royal grandeur with the Divine Gujarat & Royal Rajasthan Trail.
                              This thoughtfully..
                            </Link>
                          </div>
                        </div>

                        <div className="trv-content-bottom-section">
                          <div className="trv-book">
                            <Link to="/tour-detail" className="site-button outline">
                              Book Now
                            </Link>
                          </div>

                          <div className="trv-tour-rating">
                            <span className="trv-tour-review-count">(4.8 Review)</span>
                            <div className="trv-review-rating">
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
                  </div>

                  <div className="swiper-slide">
                    <div className="trv-popular-tour-st1">
                      <div className="trv-media">
                        <Link to="/tour-detail">
                          <img src="images/tour/style1/dest3.png" alt="Image" />
                        </Link>

                        <div className="trv-tour-duration">
                          <i className="bi bi-calendar2-week"></i>
                          <span>6 days , 5 Nights</span>
                        </div>

                        <div className="trv-tour-title">
                          <h3 className="trv-title">
                            <Link to="/tour-detail">
                              <i className="bi bi-geo-alt"></i>
                              Mussoorie, Dehradun Explorer Tour — Mussoorie • Dehradun
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <div className="trv-content">
                        <div className="trv-content-head-section">
                          <div className="trv-tour-price">
                            <span className="price">21105</span>
                            <span className="price-duration">Starting Price</span>
                          </div>

                          <div className="trv-tour-info">
                            <Link to="/tour-detail">
                              The Mussoorie, Dehradun & Haridwar 5 Nights / 6 Days tour is an ideal
                              combination of scenic hill stations, cultural heritage, and
                              spiritual...
                            </Link>
                          </div>
                        </div>

                        <div className="trv-content-bottom-section">
                          <div className="trv-book">
                            <Link to="/tour-detail" className="site-button outline">
                              Book Now
                            </Link>
                          </div>

                          <div className="trv-tour-rating">
                            <span className="trv-tour-review-count">(4.8 Review)</span>
                            <div className="trv-review-rating">
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
                  </div>
                  <div className="swiper-slide">
                    <div className="trv-popular-tour-st1">
                      <div className="trv-media">
                        <Link to="/tour-detail">
                          <img src="images/tour/style1/dest2.png" alt="Image" />
                        </Link>

                        <div className="trv-tour-duration">
                          <i className="bi bi-calendar2-week"></i>
                          <span>7 days , 6 Nights</span>
                        </div>

                        <div className="trv-tour-title">
                          <h3 className="trv-title">
                            <Link to="/tour-detail">
                              <i className="bi bi-geo-alt"></i>
                              Land of Kings: Jaipur–Jodhpur–Udaipur Tour
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <div className="trv-content">
                        <div className="trv-content-head-section">
                          <div className="trv-tour-price">
                            <span className="price">26838</span>
                            <span className="price-duration">starting price</span>
                          </div>

                          <div className="trv-tour-info">
                            <Link to="/tour-detail">
                              Experience the timeless grandeur of Rajasthan with the Pearls of
                              Rajasthan Heritage Tour, a beautifully crafted journey through the
                              state’s...
                            </Link>
                          </div>
                        </div>

                        <div className="trv-content-bottom-section">
                          <div className="trv-book">
                            <Link to="/tour-detail" className="site-button outline">
                              Book Now
                            </Link>
                          </div>

                          <div className="trv-tour-rating">
                            <span className="trv-tour-review-count">(4.8 Review)</span>
                            <div className="trv-review-rating">
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
                  </div>
                </div>

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </div>
        {/* EXPLORE POPULAR TOUR END */}
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
        {/* 3 STEP SECTION START */}
        <div className="section-full trv-3step-section">
          <div className="trv-yl-shedow-left"></div>
          <div className="trv-yl-shedow-right"></div>
          <div className="trv-bl-shedow-top"></div>

          <div className="container">
            <div className="section-content">
              <div className="trv-3step-section-row">
                <div className="row">
                  {/* LEFT SIDE */}
                  <div className="col-xl-7 col-lg-12 col-md-12">
                    <div className="trv-3step-section-left">
                      {/* TITLE */}
                      <div className="section-head trv-head-title-wrap left-position">
                        <h2 className="trv-head-title">
                          <span className="site-text-yellow">
                            3 Easy Steps{" "}
                          </span>
                          for Book Your Next Trip
                        </h2>
                      </div>

                      <div className="trv-3step-section-l-mid">
                        {/* OFFER */}
                        <div className="trv-offer-st1">
                          <div className="media">
                            <img src="/images/offer/pic1.jpg" alt="Image" />
                          </div>
                          <div className="info">
                            <span className="sm-title">Get Special Offer</span>
                            <div className="ofr-price">
                              <h2 className="lg-title">48</h2>
                              <div className="per-off">
                                %<span>Off</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* STEPS */}
                        <div className="trv-step-bx2-wrap">
                          {/* STEP 1 */}
                          <div className="trv-step-bx2">
                            <div className="trv-tp-part">
                              <div className="trv-num">01</div>
                              <div className="info">
                                <div className="trv-title">
                                  Choose Destination
                                </div>
                                <p className="trv-text">
                                  First, select your preferred destination and
                                  proceed further
                                </p>
                              </div>
                              <div className="trv-icon-back">
                                <div className="trv-icon-front">
                                  <img
                                    src="/images/trv-icon/destination.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* STEP 2 */}
                          <div className="trv-step-bx2">
                            <div className="trv-tp-part">
                              <div className="trv-num">02</div>
                              <div className="info">
                                <div className="trv-title">Make Payment</div>
                                <p className="trv-text">
                                  We pay attention to every quality in the
                                  service we provide to you
                                </p>
                              </div>
                              <div className="trv-icon-back">
                                <div className="trv-icon-front">
                                  <img
                                    src="/images/trv-icon/make-payment.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* STEP 3 */}
                          <div className="trv-step-bx2">
                            <div className="trv-tp-part">
                              <div className="trv-num">03</div>
                              <div className="info">
                                <div className="trv-title">
                                  Ready For Travelling
                                </div>
                                <p className="trv-text">
                                  We pay attention to every quality in the
                                  service we provide to you
                                </p>
                              </div>
                              <div className="trv-icon-back">
                                <div className="trv-icon-front">
                                  <img
                                    src="/images/trv-icon/travelling.png"
                                    alt="image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="col-xl-5 col-lg-12 col-md-12">
                    <div className="trv-for-summer-section">
                      <img
                        src="/images/Girl-Image.png"
                        alt=""
                        className="media-girl"
                      />
                      <img
                        src="/images/hotballon-Left.png"
                        alt=""
                        className="media-left-ballon"
                      />
                      <img
                        src="/images/hotballon-right.png"
                        alt=""
                        className="media-right-ballon"
                      />
                      <img
                        src="/images/cloud-1.png"
                        alt="Image"
                        className="media-cloud1"
                      />
                      <img
                        src="/images/cloud-2.png"
                        alt="Image"
                        className="media-cloud2"
                      />
                      <div className="trv-for-summer-text-wrap">
                        <span>
                          For <b>Summer!</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="trv-whychoose">
              <div className="w-choo-left">
                <h3 className="w-title">Why Choose Us!</h3>
                <div className="trv-cloumn-list">
                  <ul>
                    <li>
                      <i className="feather feather-check"></i>
                      <span>Perfect Detailing</span>
                    </li>
                    <li>
                      <i className="feather feather-check"></i>
                      <span>Save Your Budget</span>
                    </li>
                    <li>
                      <i className="feather feather-check"></i>
                      <span>Free Consultations</span>
                    </li>
                    <li>
                      <i className="feather feather-check"></i>
                      <span>Completed Certification</span>
                    </li>
                  </ul>
                </div>
                <Link to="/service-detail" className="site-button butn-bg-shape">
                  Discover More
                </Link>
              </div>

              <div className="w-choo-right">
                <div className="media">
                  <img src="/images/24-Image.png" alt="image" />
                </div>
                <div className="info">
                  <h3 className="call-us">Call Us</h3>
                  <span className="num">206-242-1112</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 STEP SECTION END */}
        {/* FAQ SECTION START */}
        <div className="section-full trv-faq-warp p-t120 p-b90">
          <div className="container">
            <div className="row">
              {/* LEFT SIDE */}
              <div className="col-lg-5 col-md-12">
                <div className="trv-faq-left-media-wrap m-b30">
                  {/* TITLE */}
                  <div className="section-head trv-head-title-wrap left-position">
                    <h2 className="trv-head-title">
                      Find <span className="site-text-yellow">Answers</span> for
                      Questions You Have.
                    </h2>
                    <div className="trv-head-discription">
                      SimplyIndiaHolidays is a trusted travel booking agency
                      that helps people explore India with comfort and ease.
                      They offer well-planned holiday packages, hotel bookings,
                      and transportation services at affordable prices.
                    </div>
                  </div>

                  <div className="trv-faq-left-media-wrap">
                    <div className="trv-f-pic">
                      <img src="/images/faq-media.png" alt="FAQ" />
                    </div>
                    <div className="trv-f-quote">
                      <div className="trv-f-quote-icon">
                        <i className="bi bi-quote"></i>
                      </div>
                      <h3 className="trv-title">
                        Give us a chance to help you!
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-lg-7 col-md-12">
                <div className="trv-faq-right-section m-b30">
                  {/* ACCORDION */}
                  <div className="wt-accordion" id="accordion-two">
                    {/* FAQ 1 */}
                    <div className="panel wt-panel">
                      <div className="acod-head" id="headingOne">
                        <h4 className="acod-title">
                          <a
                            className="collapsed"
                            data-bs-toggle="collapse"
                            href="#collapseOne"
                          >
                            01 - Can I book honeymoon or family-specific tour
                            packages?
                            <span className="indicator">
                              <i className="bi bi-chevron-right"></i>
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        data-bs-parent="#accordion-two"
                      >
                        <div className="acod-content p-tb15">
                          Yes, we offer specially designed honeymoon, family,
                          and senior citizen tour packages customized according
                          to your preferences and budget.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="panel wt-panel">
                      <div className="acod-head" id="headingTwo">
                        <h4 className="acod-title">
                          <a
                            className="collapsed"
                            data-bs-toggle="collapse"
                            href="#collapseTwo"
                          >
                            02 - Do you provide assistance during the tour?
                            <span className="indicator">
                              <i className="bi bi-chevron-right"></i>
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        data-bs-parent="#accordion-two"
                      >
                        <div className="acod-content p-tb15">
                          Absolutely. Our team offers 24/7 customer support
                          during your journey to ensure a hassle-free and
                          comfortable travel experience.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="panel wt-panel">
                      <div className="acod-head" id="headingThree">
                        <h4 className="acod-title">
                          <a
                            className="collapsed"
                            data-bs-toggle="collapse"
                            href="#collapseThree"
                          >
                            03 - Is there any cancellation or refund policy?
                            <span className="indicator">
                              <i className="bi bi-chevron-right"></i>
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        data-bs-parent="#accordion-two"
                      >
                        <div className="acod-content p-tb15">
                          Yes, cancellation and refund policies vary depending
                          on the package and service providers. Our team clearly
                          explains all terms before booking.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="panel wt-panel">
                      <div className="acod-head" id="headingFour">
                        <h4 className="acod-title">
                          <a
                            className="collapsed"
                            data-bs-toggle="collapse"
                            href="#collapseFour"
                          >
                            04 - Do you offer hotel & transportation bookings?
                            <span className="indicator">
                              <i className="bi bi-chevron-right"></i>
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        data-bs-parent="#accordion-two"
                      >
                        <div className="acod-content p-tb15">
                          Yes, we provide complete travel solutions including
                          hotels, transportation, sightseeing, and guided tours.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="panel wt-panel">
                      <div className="acod-head" id="headingFive">
                        <h4 className="acod-title">
                          <a
                            className="collapsed"
                            data-bs-toggle="collapse"
                            href="#collapseFive"
                          >
                            05 - What payment methods are accepted?
                            <span className="indicator">
                              <i className="bi bi-chevron-right"></i>
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        data-bs-parent="#accordion-two"
                      >
                        <div className="acod-content p-tb15">
                          We accept UPI, debit cards, credit cards, net banking,
                          and bank transfers for secure payments.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 6 */}
                    <div className="panel wt-panel">
                      <div className="acod-head" id="headingSix">
                        <h4 className="acod-title">
                          <a
                            className="collapsed"
                            data-bs-toggle="collapse"
                            href="#collapseSix"
                          >
                            06 - Why choose Simply India Holidays?
                            <span className="indicator">
                              <i className="bi bi-chevron-right"></i>
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        data-bs-parent="#accordion-two"
                      >
                        <div className="acod-content p-tb15">
                          We are trusted for transparent pricing, personalized
                          service, and reliable travel support.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 7 */}
                    <div className="panel wt-panel">
                      <div className="acod-head" id="headingSeven">
                        <h4 className="acod-title">
                          <a
                            className="collapsed"
                            data-bs-toggle="collapse"
                            href="#collapseSeven"
                          >
                            07 - How can I book a tour?
                            <span className="indicator">
                              <i className="bi bi-chevron-right"></i>
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseSeven"
                        className="collapse"
                        data-bs-parent="#accordion-two"
                      >
                        <div className="acod-content p-tb15">
                          You can book via phone, office visit, or through our
                          website with complete guidance from our team.
                        </div>
                      </div>
                    </div>

                    {/* FAQ 8 */}
                    <div className="panel wt-panel">
                      <div className="acod-head" id="headingEight">
                        <h4 className="acod-title">
                          <a
                            className="collapsed"
                            data-bs-toggle="collapse"
                            href="#collapseEight"
                          >
                            08 - Are group tour packages available?
                            <span className="indicator">
                              <i className="bi bi-chevron-right"></i>
                            </span>
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseEight"
                        className="collapse"
                        data-bs-parent="#accordion-two"
                      >
                        <div className="acod-content p-tb15">
                          Yes, we provide affordable group tour packages with
                          guided support and fixed itineraries.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ SECTION END */}

        {/* TESTIMONIAL SECTION START */}
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
        {/* TESTIMONIAL SECTION END */}
        {/* tv service style 1 start */}
        <div className="trv-service-st2">
          <div className="container">
            {/* TITLE */}
            <div className="section-head trv-head-title-wrap center-position">
              <h2 className="trv-head-title">
                <span className="site-text-yellow">Our Amazing</span> Services
              </h2>
              <div className="trv-head-discription">
                Destinations worth exploring! Here are a few popular spots
              </div>
              <div className="trv-head-title-image">
                <img src="/images/Title-Separator.png" alt="Title Separator" />
              </div>
            </div>

            {/* SERVICES GRID */}
            <div className="trv-service-back-bg">
              <div className="row d-flex justify-content-center">
                {[
                  { img: "1.jpg", title: "Tour Guide" },
                  { img: "2.jpg", title: "Entertainment" },
                  { img: "3.jpg", title: "Safe Flight" },
                  { img: "4.jpg", title: "Texi & Metro" },
                  { img: "5.jpg", title: "Delicious Food" },
                  { img: "6.jpg", title: "Spa & Massages" },
                  { img: "7.jpg", title: "Interesting Rest" },
                  { img: "8.jpg", title: "Pickup & Drop" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div className="trv-service-bx2">
                      <div className="trv-media">
                        <img
                          src={`/images/${service.img}`}
                          alt={service.title}
                        />
                      </div>
                      <div className="trv-info">
                        <h4 className="trv-title">
                          <Link to="/service-detail">{service.title}</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM TITLE */}
          <div className="container">
            <div className="trv-btm-title-section2">
              <span>Wornderful Services For You</span>
              <h2 className="trv-btm-title-large">Services We Offer</h2>
            </div>
          </div>
        </div>
        {/* tv service style 1 end */}
        {/* ADVENTURE SECTION START */}
        <div
          className="trv-adventure-st1"
          style={{
            backgroundImage: "url(/images/background/adv-bg.jpg)",
          }}
        >
          <div className="circle-text2">
            <div className="emblem-wrap">
              <div className="emblem" data-text="Want-to-see-our-top-destinations-">Want-to-see-our-top-destinations-</div>
              <i>
                <img src="/images/advanture-st1.png" alt="In Circle Pic" />
              </i>
            </div>
          </div>

          <h2 className="adventure-title">Adventure</h2>
          <p className="adventure-text">It’s time to Travel</p>

          <Link to="/contact" className="site-button butn-bg-shape">
            Booking Now
          </Link>
        </div>
        {/* ADVENTURE SECTION END */}
        {/* ALL BLOGS SECTION START */}
        <div className="trv-blog-all-style p-t120 p-b90">
          <div className="container">
            {/* TITLE START */}
            <div className="row trv-column-style-head">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="section-head trv-head-title-wrap left-position">
                  <h2 className="trv-head-title">
                    Explore{" "}
                    <span className="site-text-yellow">Latest News</span>
                  </h2>
                  <div className="trv-head-discription">
                    Maybe for a travel blog, wildlife site, or web development
                    project here are a few sample templates you can use to
                    simulate real-time news updates:
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-lg-6 col-md-12">
                <div className="trv-column-style-head-btn">
                  <Link to="/blog-grid" className="site-button butn-bg-shape">
                    See More Articles
                  </Link>
                </div>
              </div>
            </div>
            {/* TITLE END */}

            <div className="section-content">
              <div className="row d-flex justify-content-center">
                {/* COLUMN 1 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="trv-blog-st1">
                    <div className="trv-post-media">
                      <Link to="/blog-detail">
                        <img
                          src="/images/trv-blog/blog-sm/pic1.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <div className="post-date">
                      <span>14</span>June
                    </div>
                    <div className="trv-post-info">
                      <div className="post-category">Aidan Butler</div>
                      <div className="trv-post-title">
                        <h5 className="post-title">
                          <Link to="/blog-detail">
                            Resources for your first trip to overseas vacation
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="trv-blog-st1">
                    <div className="trv-post-media">
                      <Link to="/blog-detail">
                        <img
                          src="/images/trv-blog/blog-sm/pic2.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <div className="post-date">
                      <span>26</span>June
                    </div>
                    <div className="trv-post-info">
                      <div className="post-category">Ricardo Bell</div>
                      <div className="trv-post-title">
                        <h5 className="post-title">
                          <Link to="/blog-detail">
                            How to get acquainted with natives in a strange land
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="trv-blog-st1">
                    <div className="trv-post-media">
                      <Link to="/blog-detail">
                        <img
                          src="/images/trv-blog/blog-sm/pic3.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <div className="post-date">
                      <span>20</span>June
                    </div>
                    <div className="trv-post-info">
                      <div className="post-category">Martin Hicks</div>
                      <div className="trv-post-title">
                        <h5 className="post-title">
                          <Link to="/blog-detail">
                            Resources for your first trip to overseas vacation
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMN 2 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="trv-blog-st1">
                    <div className="trv-post-media">
                      <Link to="/blog-detail">
                        <img
                          src="/images/trv-blog/blog-sm/pic4.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <div className="post-date">
                      <span>28</span>June
                    </div>
                    <div className="trv-post-info">
                      <div className="post-category">Poul Ward</div>
                      <div className="trv-post-title">
                        <h5 className="post-title">
                          <Link to="/blog-detail">
                            Step by step guide to planning your ideal holiday
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="trv-blog-st2">
                    <div className="trv-post-media">
                      <Link to="/blog-detail">
                        <img
                          src="/images/trv-blog/blog-md/pic1.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <div className="post-date">
                      <span>28</span>June
                    </div>
                    <div className="trv-post-info">
                      <div className="post-category">Poul Ward</div>
                      <div className="trv-post-title">
                        <h5 className="post-title">
                          <Link to="/blog-detail">
                            Step by step guide to planning your ideal holiday
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMN 3 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="trv-blog-st3">
                    <div className="trv-post-media">
                      <Link to="/blog-detail">
                        <img
                          src="/images/trv-blog/blog-lg/pic1.jpg"
                          alt="Image"
                        />
                      </Link>
                    </div>
                    <div className="post-date">
                      <span>08</span>June
                    </div>
                    <div className="trv-post-info">
                      <div className="post-category">By Joey Peterson</div>
                      <div className="trv-post-title">
                        <h3 className="post-title">
                          <Link to="/blog-detail">
                            The Top Travel Destinations for Photography
                            Enthusiasts
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END */}
              </div>
            </div>
          </div>
        </div>
        {/* ALL BLOGS SECTION END */}
        {/* CONTACT SECTION START */}
        <div className="section-full trv-contact-form">
          <div className="row">
            {/* LEFT IMAGE SECTION */}
            <div
              className="col-lg-6 col-md-12 trv-cot-media-section"
              style={{
                backgroundImage: "url(/images/frm-left.jpg)",
              }}
            >
              <div className="trv-cot-media-info">
                <h4 className="trv-subtitle">Hi there!</h4>
                <h2 className="trv-title">What can I do for you today?</h2>
              </div>
            </div>

            {/* RIGHT FORM SECTION */}
            <div className="col-lg-6 col-md-12">
              <div className="trv-contact-right-part">
                <div className="trv-form">
                  {/* TITLE START */}
                  <div className="section-head trv-head-title-wrap left-position">
                    <h2 className="trv-head-title">
                      <span className="site-text-yellow">Reach</span> & Get in
                      Touch With Us!
                    </h2>
                    <div className="trv-head-discription">
                      We’love to hear from you. Our friendly team is always here
                      to chat
                    </div>
                  </div>
                  {/* TITLE END */}

                  <form
                    className="trv-cons-contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="subject"
                        placeholder="Select Your Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="site-button butn-bg-shape">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT SECTION END */}

        <ScrollToTop />
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default Home;
