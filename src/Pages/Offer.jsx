import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

export default function Offer() {
  return (
    <div className="page-wraper">
      {/* CONTENT START */}
      <div className="page-content">

        {/* INNER PAGE BANNER */}
        <div className="wt-bnr-inr overlay-wraper bg-center">
          <div className="overlay-main innr-bnr-olay"></div>

          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="wt-title">Offer</h2>
              </div>

              {/* BREADCRUMB */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Offer</li>
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
        {/* INNER PAGE BANNER END */}

        {/* MOST FAVORITE TOUR PLACE SECTION */}
        <div className="section-full trv-most-fav-tour-wrap">
          <div className="trv-most-fav-tour-mid">

            <div className="trv-most-fav-tour-top">
              <div className="trv-most-fav-tour-t-left">

                <div className="section-head trv-head-title-wrap left-position with-bg-dark">
                  <h2 className="trv-head-title">
                    <span className="site-text-yellow">Last Time</span> Offers!
                  </h2>
                  <div className="trv-head-discription">
                    Choosing a destination can be exciting but also a bit
                    overwhelming with so many amazing places out there!
                  </div>
                </div>

                <div className="trv-hpy-cus">
                  <div className="trv-cus-pic-box">
                    <span className="trv-cus-pic-box-pic first-bx">
                      <img src="/images/pic1.jpg" alt="" />
                    </span>
                    <span className="trv-cus-pic-box-pic">
                      <img src="/images/pic2.jpg" alt="" />
                    </span>
                    <span className="trv-cus-pic-box-pic">
                      <img src="/images/pic3.jpg" alt="" />
                    </span>
                  </div>
                  <div className="trv-hpy-cus-count">
                    <span>350</span>
                    <p>Happy Customer</p>
                  </div>
                </div>

                <Link
                  to="/offer-detail"
                  className="site-button butn-bg-shape"
                >
                  Learn More
                </Link>
              </div>

              <div className="trv-most-fav-title">
                <span>Last!</span> Time Offer
              </div>
            </div>

            {/* SLIDER */}
            <div className="trv-most-fav-tour-bot">
              <div className="trv-most-fav-tour-row">
                <div className="swiper trv-mf-tour-carousal">
                  <div className="swiper-wrapper">

                    {[
                      ["city1.png", "Tripura", "28"],
                      ["city2.png", "Thiruvananthapuram", "32"],
                      ["city3.png", "Coorg", "20"],
                      ["city4.png", "Agra", "40"],
                      ["city5.png", "Banglore", "80"],
                      ["city6.png", "Barsana", "20"],
                      ["city7.png", "Kanyakumari", "20"],
                    ].map(([img, title, count], index) => (
                      <div className="swiper-slide" key={index}>
                        <div className="trv-mf-tour-bx1">
                          <div className="trv-media">
                            <img
                              src={`/images/destinations/style1/${img}`}
                              alt="Image"
                            />
                          </div>
                          <h3 className="trv-title">
                            <Link to="/offer-detail">{title}</Link>
                            <span>{count} Listing</span>
                          </h3>
                        </div>
                      </div>
                    ))}

                  </div>

                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>

            <div className="trv-most-fav-media">
              <img src="/images/man-rock.png" alt="Image" />
            </div>
          </div>
        </div>

      </div>
      {/* CONTENT END */}
      <ScrollToTop />


    </div>
  );
}
