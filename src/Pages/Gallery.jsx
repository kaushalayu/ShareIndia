import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import AnimatedSection from "../Components/AnimatedSection";
import { motion } from "framer-motion";

export default function Gallery() {
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
                <h2 className="wt-title">Gallery</h2>
              </div>

              {/* BREADCRUMB */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Gallery</li>
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

        {/* GALLERY SECTION START */}
        <AnimatedSection variant="fadeInUp" delay={0.2}>
          <div className="section-full trv-gallery-wrap p-t120 p-b90">
          <div className="container">

            {/* TITLE */}
            <div className="section-head trv-head-title-wrap center-position">
              <h2 className="trv-head-title">
                Best Memorable
                <span className="site-text-yellow"> Gallery!</span>
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

            {/* GALLERY CONTENT */}
            <div className="section-content">
              <div className="trv-gallery-section row">

                {/* COLUMN 1 */}
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                  <div className="trv-gallery-st1 l-pic">
                    <div className="trv-gallery-st1-media">
                      <img src="/images/pic1.jpg" alt="image" />
                      <a
                        className="elem trv-gallery-st1-btn"
                        href="/images/pic1.jpg"
                        title="Bali Indonesia"
                      >
                        <i className="bi bi-arrows-fullscreen"></i>
                      </a>
                    </div>
                  </div>

                  <div className="trv-gallery-st1 l-pic">
                    <div className="trv-gallery-st1-media">
                      <img src="/images/pic2.jpg" alt="image" />
                      <a
                        className="elem trv-gallery-st1-btn"
                        href="/images/pic2.jpg"
                        title="Spain"
                      >
                        <i className="bi bi-arrows-fullscreen"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* COLUMN 2 */}
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                  <div className="trv-gallery-st1 p-pic">
                    <div className="trv-gallery-st1-media">
                      <img src="/images/pic3.jpg" alt="image" />
                      <a
                        className="elem trv-gallery-st1-btn"
                        href="/images/pic3.jpg"
                        title="Plateau in Slovenia"
                      >
                        <i className="bi bi-arrows-fullscreen"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* COLUMN 3 */}
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="trv-gallery-st1-box">
                    <div className="trv-media">
                      <img src="/images/pic4.jpg" alt="Image" />
                    </div>
                  </div>
                </div>

                {/* COLUMN 4 */}
                <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                  <div className="trv-gallery-st1 l-pic">
                    <div className="trv-gallery-st1-media">
                      <img src="/images/pic9.jpg" alt="image" />
                      <a
                        className="elem trv-gallery-st1-btn"
                        href="/images/pic9.jpg"
                        title="Brazil"
                      >
                        <i className="bi bi-arrows-fullscreen"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* COLUMN 5 */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="row">
                    <div className="col-6">
                      <div className="trv-gallery-st1 l-pic">
                        <div className="trv-gallery-st1-media">
                          <img src="/images/pic5.jpg" alt="image" />
                          <a
                            className="elem trv-gallery-st1-btn"
                            href="/images/pic5.jpg"
                            title="Indonesia"
                          >
                            <i className="bi bi-arrows-fullscreen"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="trv-gallery-st1 l-pic">
                        <div className="trv-gallery-st1-media">
                          <img src="/images/pic6.jpg" alt="image" />
                          <a
                            className="elem trv-gallery-st1-btn"
                            href="/images/pic6.jpg"
                            title="Maldives"
                          >
                            <i className="bi bi-arrows-fullscreen"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="trv-btm-title2-section">
                <span>Explore the Most Beautiful</span>
                <h2 className="trv-btm-title-large">
                  Place in the World
                </h2>
              </div>
            </div>

          </div>
          </div>
        </AnimatedSection>
        {/* GALLERY SECTION END */}
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
          <ScrollToTop />
        </div>
        {/* POPULAR DESTINATION SECTION END */}
      </div>
      {/* CONTENT END */}
    </div>
  );
}
