import React from "react";
import ScrollToTop from "../Components/ScrollToTop";
import { Link } from "react-router-dom";

function DestinationDetail() {
  return (
    <>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div className="wt-bnr-inr overlay-wraper bg-center">
          <div className="overlay-main innr-bnr-olay"></div>

          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="wt-title">Destination Detail</h2>
              </div>

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Destination Detail</li>
                </ul>
              </div>
            </div>
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
        {/* INNER PAGE BANNER END */}

        {/* SECTION START */}
        <div className="section-full p-t120 p-b90">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                {/* Top Slider */}
                <div className="trv-detail-slider">
                  <div className="swiper trv_d-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="trv_d-slider-media">
                          <img
                            src="images/detail-slider/slide1/pic1 (1).jpg"
                            alt="Image"
                          />
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="trv_d-slider-media">
                          <img
                            src="images/detail-slider/slide1/pic2 (1).jpg"
                            alt="Image"
                          />
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="trv_d-slider-media">
                          <img
                            src="images/detail-slider/slide1/pic3 (1).jpg"
                            alt="Image"
                          />
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="trv_d-slider-media">
                          <img
                            src="images/detail-slider/slide1/pic4 (1).jpg"
                            alt="Image"
                          />
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="trv_d-slider-media">
                          <img
                            src="images/detail-slider/slide1/pic6 (1).jpg"
                            alt="Image"
                          />
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="trv_d-slider-media">
                          <img
                            src="images/detail-slider/slide1/pic1 (1).jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="swiper-pagination"></div>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                {/* Info Start */}
                <div className="trv-detail-bx-wrap">
                  <h3 className="trv-inner-title-lg">
                    Tokyo City Japan Overview
                  </h3>

                  <div className="trv-inr-para">
                    <p>
                      Tokyo, the capital city of Japan, is a dynamic metropolis
                      that blends traditional culture with cutting-edge
                      modernity. As one of the most populous cities in the
                      world, Tokyo is known for its towering skyscrapers,
                      bustling streets, and vibrant neighborhoods such as
                      Shibuya and Shinjuku. The city offers a rich cultural
                      experience, from historic temples like Senso-ji in Asakusa
                      to the serene beauty of the Imperial Palace gardens. Tokyo
                      is also a global hub for technology, fashion, and cuisine,
                      offering everything from Michelin-starred restaurants to
                      local ramen shops. With its efficient public
                      transportation, safety, and endless attractions, Tokyo
                      captivates visitors from around the world.
                    </p>

                    <p>
                      Beyond its fast-paced urban life, Tokyo is a city where
                      tradition and innovation exist side by side. In districts
                      like Ginza, luxury shopping and high-end dining meet
                      timeless Japanese hospitality, while areas like Akihabara
                      and Harajuku showcase Japan's pop culture, gaming, and
                      fashion subcultures. Tokyo also plays a central role in
                      Japan's economy and politics, housing major corporations,
                      government buildings, and global financial institutions.
                    </p>

                    <p>
                      Nature and calm are never far away in Tokyo. Despite its
                      modern skyline, the city is dotted with peaceful parks and
                      green spaces such as Ueno Park, Yoyogi Park, and the Meiji
                      Shrine forest. In spring, cherry blossoms (sakura)
                      transform the city into a breathtaking landscape of pink,
                      drawing crowds for traditional hanami (flower-viewing)
                      picnics. Throughout the year, Tokyo hosts cultural
                      festivals, sumo tournaments, and seasonal events that
                      reflect Japan's deep-rooted customs.
                    </p>
                  </div>

                  <h4 className="trv-inner-title-sm">Destinations Features</h4>

                  <ul className="trv-checklist-st1">
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Explaining historical, cultural, and natural significance
                      of place
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Assisting with logistics like hotel check-ins, local
                      transport, and dining
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Offering safety tips and local etiquette guidance
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Customizing itineraries based on traveler interests
                    </li>
                  </ul>

                  <h4 className="trv-inner-title-sm">Our Pricing Plan</h4>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="trv-price-bx2">
                        <div className="trv-media">
                          <img src="images/pic1_2.jpg" alt="image" />
                        </div>

                        <div className="info">
                          <div className="trv-price-head">
                            <h4 className="trv-pricing-title">Budget Travel</h4>
                            <div className="trv-plan-price">
                              <span className="price">$59</span>
                              <span className="price-duration">Per Day</span>
                            </div>
                          </div>

                          <ul className="trv-list">
                            <li>
                              <i className="bi bi-arrow-right-circle"></i>3 star
                              hotel (4 nights)
                            </li>
                            <li>
                              <i className="bi bi-arrow-right-circle"></i>Local
                              taxis
                            </li>
                            <li>
                              <i className="bi bi-arrow-right-circle"></i>
                              Sightseeing, tickets
                            </li>
                            <li>
                              <i className="bi bi-arrow-right-circle"></i>
                              Tourist visa
                            </li>
                            <li>
                              <i className="bi bi-arrow-right-circle"></i>Meals
                              & snacks
                            </li>
                          </ul>

                          <div className="trv-discover-btn">
                            <Link
                              to="/contact"
                              className="site-button butn-bg-shape"
                            >
                              Discover More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="trv-price-bx3">
                        <div className="trv-media">
                          <img src="images/pic3.png" alt="image" />
                        </div>

                        <div className="info">
                          <div className="trv-price-head">
                            <h4 className="trv-pricing-title">
                              Mid-Range Travel
                            </h4>
                            <div className="trv-plan-price">
                              <span className="price">$79</span>
                              <span className="price-duration">Per Day</span>
                            </div>
                          </div>

                          <ul className="trv-list">
                            <li>
                              <i className="bi bi-arrow-right-circle"></i>3 star
                              hotel (7 nights)
                            </li>
                            <li>
                              <i className="bi bi-arrow-right-circle"></i>Local
                              taxis
                            </li>
                            <li>
                              <i className="bi bi-arrow-right-circle"></i>
                              Sightseeing, tickets
                            </li>
                            <li>
                              <i className="bi bi-arrow-right-circle"></i>
                              Tourist visa
                            </li>
                            <li>
                              <i className="bi bi-arrow-right-circle"></i>Meals
                              & snacks
                            </li>
                          </ul>

                          <div className="trv-discover-btn">
                            <a
                              href="contact.html"
                              className="site-button butn-bg-shape"
                            >
                              Discover More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Remaining destination cards, comments & form stay EXACTLY same pattern */}
                  <h4 className="trv-inner-title-sm">Our Top Destinations</h4>

                  <div className="row m-b10">
                    <div className="col-lg-4 col-md-6 m-b30">
                      <div className="trv-popular-tour-st3">
                        <div className="trv-media">
                          <a href="tour-detail.html">
                            <img
                              src="images/tour-cat/style1/pic1.jpg"
                              alt="Image"
                            />
                          </a>
                        </div>
                        <div className="trv-content">
                          <h3 className="trv-title">
                            <Link to="/destination-detail">
                              Bali, Indonesia
                            </Link>
                          </h3>

                          <div className="trv-content-head-section">
                            <div className="trv-tour-rating">
                              <span className="trv-tour-review-count">
                                (4.8)
                              </span>
                              <div className="trv-review-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                              </div>
                            </div>

                            <div className="trv-tour-duration">
                              <i className="bi bi-calendar2-week"></i>
                              <span>4 days</span>
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
                            <div className="trv-tour-price">
                              <span className="price">$59</span>
                              <span className="price-duration">Per day</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Remaining destination cards – SAME STRUCTURE */}

                    <div className="col-lg-4 col-md-6 m-b30">
                      <div className="trv-popular-tour-st3">
                        <div className="trv-media">
                          <Link to="/destination-detail">
                            <img
                              src="images/tour-cat/style1/pic2.jpg"
                              alt="Image"
                            />
                          </Link>
                        </div>
                        <div className="trv-content">
                          <h3 className="trv-title">
                            <Link to="/destination-detail">South Korea</Link>
                          </h3>

                          <div className="trv-content-head-section">
                            <div className="trv-tour-rating">
                              <span className="trv-tour-review-count">
                                (4.8)
                              </span>
                              <div className="trv-review-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                              </div>
                            </div>

                            <div className="trv-tour-duration">
                              <i className="bi bi-calendar2-week"></i>
                              <span>4 days</span>
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
                            <div className="trv-tour-price">
                              <span className="price">$59</span>
                              <span className="price-duration">Per day</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 m-b30">
                      <div className="trv-popular-tour-st3">
                        <div className="trv-media">
                          <Link to="/destination-detail">
                            <img
                              src="images/tour-cat/style1/pic2.jpg"
                              alt="Image"
                            />
                          </Link>
                        </div>
                        <div className="trv-content">
                          <h3 className="trv-title">
                            <Link to="/destination-detail">South Korea</Link>
                          </h3>

                          <div className="trv-content-head-section">
                            <div className="trv-tour-rating">
                              <span className="trv-tour-review-count">
                                (4.8)
                              </span>
                              <div className="trv-review-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                              </div>
                            </div>

                            <div className="trv-tour-duration">
                              <i className="bi bi-calendar2-week"></i>
                              <span>4 days</span>
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
                            <div className="trv-tour-price">
                              <span className="price">$59</span>
                              <span className="price-duration">Per day</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 m-b30">
                      <div className="trv-popular-tour-st3">
                        <div className="trv-media">
                          <Link to="/destination-detail">
                            <img
                              src="images/tour-cat/style1/pic3.jpg"
                              alt="Image"
                            />
                          </Link>
                        </div>
                        <div className="trv-content">
                          <h3 className="trv-title">
                            <Link to="/destination-detail">
                              Tokyo City japan
                            </Link>
                          </h3>

                          <div className="trv-content-head-section">
                            <div className="trv-tour-rating">
                              <span className="trv-tour-review-count">
                                (4.8)
                              </span>
                              <div className="trv-review-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                              </div>
                            </div>

                            <div className="trv-tour-duration">
                              <i className="bi bi-calendar2-week"></i>
                              <span>4 days</span>
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
                            <div className="trv-tour-price">
                              <span className="price">$59</span>
                              <span className="price-duration">Per day</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 m-b30">
                      <div className="trv-popular-tour-st3">
                        <div className="trv-media">
                          <Link to="/destination-detail">
                            <img
                              src="images/tour-cat/style1/pic5.jpg"
                              alt="Image"
                            />
                          </Link>
                        </div>
                        <div className="trv-content">
                          <h3 className="trv-title">
                            <Link to="/destination-detail">
                              Plateau in Slovenia
                            </Link>
                          </h3>

                          <div className="trv-content-head-section">
                            <div className="trv-tour-rating">
                              <span className="trv-tour-review-count">
                                (4.8)
                              </span>
                              <div className="trv-review-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                              </div>
                            </div>

                            <div className="trv-tour-duration">
                              <i className="bi bi-calendar2-week"></i>
                              <span>4 days</span>
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
                            <div className="trv-tour-price">
                              <span className="price">$59</span>
                              <span className="price-duration">Per day</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 m-b30">
                      <div className="trv-popular-tour-st3">
                        <div className="trv-media">
                          <Link to="/destination-detail">
                            <img
                              src="images/tour-cat/style1/pic4.jpg"
                              alt="Image"
                            />
                          </Link>
                        </div>
                        <div className="trv-content">
                          <h3 className="trv-title">
                            <Link to="/destination-detail">Spain</Link>
                          </h3>

                          <div className="trv-content-head-section">
                            <div className="trv-tour-rating">
                              <span className="trv-tour-review-count">
                                (4.8)
                              </span>
                              <div className="trv-review-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                              </div>
                            </div>

                            <div className="trv-tour-duration">
                              <i className="bi bi-calendar2-week"></i>
                              <span>4 days</span>
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
                            <div className="trv-tour-price">
                              <span className="price">$59</span>
                              <span className="price-duration">Per day</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 m-b30">
                      <div className="trv-popular-tour-st3">
                        <div className="trv-media">
                          <Link to="/destination-detail">
                            <img
                              src="images/tour-cat/style1/pic6.jpg"
                              alt="Image"
                            />
                          </Link>
                        </div>
                        <div className="trv-content">
                          <h3 className="trv-title">
                            <Link to="/destination-detail">Mauritius</Link>
                          </h3>

                          <div className="trv-content-head-section">
                            <div className="trv-tour-rating">
                              <span className="trv-tour-review-count">
                                (4.8)
                              </span>
                              <div className="trv-review-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                              </div>
                            </div>

                            <div className="trv-tour-duration">
                              <i className="bi bi-calendar2-week"></i>
                              <span>4 days</span>
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
                            <div className="trv-tour-price">
                              <span className="price">$59</span>
                              <span className="price-duration">Per day</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* baaki 4 cards exactly same pattern pe JSX me convert ho chuke honge */}
                  </div>

                  <div className="twm-post-com-wrap">
                    <div className="clear" id="comment-list">
                      <div className="comments-area" id="comments">
                        <h3 className="comments-title m-t0">Customer Review</h3>

                        <ol className="comment-list">
                          <li className="comment">
                            <div className="comment-body">
                              <div className="comment-author">
                                <img
                                  className="avatar photo"
                                  src="images/anees.png"
                                  alt=""
                                />
                              </div>

                              <div className="comment-meta">
                                <cite className="fn">Charlie</cite>
                                <span>24-07-2025</span>
                              </div>

                              <p>
                                Exciting but also a bit overwhelming with so
                                many amazing places out there! Let's narrow it
                                Travlla is a multi-award-winning strategy and
                                content creation agency that specializes in
                                travel marketing.
                              </p>

                              <div className="reply">
                                <a
                                  href="javascript:;"
                                  className="comment-reply-link site-button butn-bg-shape"
                                >
                                  Reply
                                </a>
                              </div>
                            </div>

                            <ol className="children">
                              <li className="comment odd parent">
                                <div className="comment-body">
                                  <div className="comment-author">
                                    <img
                                      className="avatar photo"
                                      src="images/yug.png"
                                      alt=""
                                    />
                                  </div>

                                  <div className="comment-meta">
                                    <cite className="fn">George</cite>
                                    <span>24-07-2025</span>
                                  </div>

                                  <p>
                                    So many amazing places out there! Let's
                                    narrow it Travlla is a multi-award-winning
                                    strategy and content creation agency that
                                    specializes in travel marketing.
                                  </p>

                                  <div className="reply">
                                    <a
                                      href="javascript:;"
                                      className="comment-reply-link site-button butn-bg-shape"
                                    >
                                      Reply
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ol>
                          </li>
                        </ol>

                        <div className="comment-respond trv-form" id="respond">
                          <div className="section-head trv-head-title-wrap left-position">
                            <h2 className="trv-head-title">
                              <span className="site-text-yellow">Comment</span>{" "}
                              Section
                            </h2>
                            <div className="trv-head-discription">
                              We’love to hear from you. Our friendly team is
                              always here to chat
                            </div>
                          </div>

                          <form className="trv-cons-contact-form">
                            <div className="form-group">
                              <input
                                className="form-control"
                                placeholder="Enter Your Name"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                className="form-control"
                                placeholder="Enter Email Address"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                className="form-control"
                                placeholder="Select Your Subject"
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                placeholder="Message"
                              ></textarea>
                            </div>
                            <button
                              type="button"
                              className="site-button butn-bg-shape"
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION END */}
      </div>
    </>
  );
}

export default DestinationDetail;
