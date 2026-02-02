import React from "react";
import { Link } from "react-router-dom";

export default function About() {
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
                <h2 className="wt-title">About Us</h2>
              </div>

              {/* BREADCRUMB */}
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li><Link to="/">Home</Link></li>
                <li>About Us</li>
              </ul>
            </div>
          </div>

          <div className="trv-inr-bnr-cloud">
            <div className="marquee">
              <img src="/images/inr-banner-cloud.png" alt="cloud" />
            </div>
          </div>

          <div className="trv-inr-bnr-plane">
            <div className="trv-inr-bnr-plane-bx">
              <img src="/images/airplane.png" alt="plane" />
            </div>
          </div>

          <div className="trv-inr-bnr-bloon-1">
            <img src="/images/hotballon-Left.png" alt="balloon" />
          </div>

          <div className="trv-inr-bnr-bloon-2">
            <img src="/images/hotballon-right.png" alt="balloon" />
          </div>
        </div>
        {/* INNER PAGE BANNER END */}

        {/* WE RECOMMEND */}
        <div className="section-full p-t120 p-b0 trv-we-recommend">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-xl-5 col-lg-7 col-md-12">
                <div className="section-head trv-head-title-wrap left-position">
                  <h2 className="trv-head-title">
                    We <span className="site-text-yellow">Recommend </span>
                    Beautiful Destinations Every Month
                  </h2>
                  <p>
                    SimplyIndiaHolidays is a trusted travel booking agency
                    helping people explore India with comfort and ease.
                  </p>
                </div>

                <Link
                  to="/gallery"
                  className="site-button butn-bg-shape"
                >
                  Discover More
                </Link>
              </div>

              <div className="col-xl-7 col-lg-5 col-md-12">
                <div className="trv-year-section">
                  <img src="/images/plane1.png" alt="plane" />
                  <div className="trv-year-info">
                    <h2>5</h2>
                    <span>Years of Experience</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MOST FAVORITE TOUR */}
        <div className="section-full trv-most-fav-tour-wrap">
          <div className="container">
            <h2 className="trv-head-title">
              <span className="site-text-yellow">Most Favorite</span> Tour Places
            </h2>

            {/* Swiper stays SAME (JS/CSS handle it) */}
            <div className="swiper trv-mf-tour-carousal">
              <div className="swiper-wrapper">

                {[
                  "Tripura",
                  "Thiruvananthapuram",
                  "Coorg",
                  "Agra",
                  "Banglore",
                  "Barsana",
                  "Kanyakumari",
                ].map((place, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="trv-mf-tour-bx1">
                      <img
                        src={`/images/destinations/style1/city${i + 1}.png`}
                        alt={place}
                      />
                      <h3 className="trv-title">
                        <Link to="/tour">{place}</Link>
                        <span>{20 + i * 4} Listing</span>
                      </h3>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="section-full trv-testimonial-st2-wrap">
          <div className="container">

            <div className="section-head trv-head-title-wrap center-position">
              <h2>
                Our Client <span className="site-text-yellow">Says!</span>
              </h2>
            </div>

            <div className="swiper testimonial-content-sld">
              <div className="swiper-wrapper">

                {[
                  "Amelia Warner",
                  "Kavin Martin",
                  "Antonio",
                  "Zeynep",
                ].map((name, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="trv-testimo-bx2">
                      <img
                        src={`/images/trv-testimonial2/pic${(i % 4) + 1}.jpg`}
                        alt={name}
                      />
                      <h4>{name}</h4>
                      <p>
                        Travel is the only thing you buy that makes you richer.
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>

      </div>
      {/* CONTENT END */}

      {/* SCROLL TOP */}
      <button className="scroltop vert-move">
        <img src="/images/scroll-top.png" alt="scroll top" />
      </button>
    </div>
  );
}
