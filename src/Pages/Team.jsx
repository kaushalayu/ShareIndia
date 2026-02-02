import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

const Team = () => {
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
                                <h2 className="wt-title">Our Team</h2>
                            </div>

                            {/* BREADCRUMB */}
                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>Our Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="trv-inr-bnr-cloud">
                        <div className="marquee">
                            <img src="/images/inr-banner-cloud.png" alt="Cloud" />
                        </div>
                    </div>

                    <div className="trv-inr-bnr-plane">
                        <div className="trv-inr-bnr-plane-bx">
                            <img src="/images/airplane.png" alt="Plane" />
                        </div>
                    </div>

                    <div className="trv-inr-bnr-bloon-1">
                        <img src="/images/hotballon-Left.png" alt="Balloon" />
                    </div>

                    <div className="trv-inr-bnr-bloon-2">
                        <img src="/images/hotballon-right.png" alt="Balloon" />
                    </div>
                </div>
                {/* INNER PAGE BANNER END */}
                {/* EXPLORE POPULAR TOUR START */}
                <div className="section-full p-t120 p-b120">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head trv-head-title-wrap center-position">
                            <h2 className="trv-head-title">
                                <span className="site-text-yellow">Meet With</span> Tour Guide
                            </h2>
                            <div className="trv-head-discription">
                                Destinations worth exploring! Here are a few popular spots
                            </div>
                            <div className="trv-head-title-image">
                                <img
                                    src="/images/background/Title-Separator.png"
                                    alt="Title Separator"
                                />
                            </div>
                        </div>
                        {/* TITLE END */}

                        <div className="section-content">
                            <div className="trv-popular-tours-row">
                                <div className="row">

                                    {/* GUIDE CARD */}
                                    {[
                                        { img: "pic1.jpg", name: "Murphy" },
                                        { img: "pic2.jpg", name: "Alexis Cox" },
                                        { img: "pic3.jpg", name: "Murray" },
                                        { img: "pic4.jpg", name: "Crawford" },
                                        { img: "pic5.html", name: "Murphy" },
                                        { img: "pic6.html", name: "Alexis Cox" },
                                        { img: "pic7.html", name: "Murray" },
                                        { img: "pic8.html", name: "Crawford" },
                                    ].map((guide, index) => (
                                        <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
                                            <div className="trv-guide-bx1">
                                                <div className="media">
                                                    <img
                                                        src={`/images/trv-guide/${guide.img}`}
                                                        alt={guide.name}
                                                    />
                                                </div>

                                                <ul className="social-icons">
                                                    <li>
                                                        <a href="#">
                                                            <i className="bi bi-twitter-x"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="bi bi-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="bi bi-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="bi bi-pinterest"></i>
                                                        </a>
                                                    </li>
                                                </ul>

                                                <h3 className="trv-guide-name">
                                                    <Link to="/our-team-detail">{guide.name}</Link>
                                                </h3>
                                                <span>Tourist Guide</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* PAGINATION */}
                                <ul className="custom-pagination clearfix">
                                    <li className="prev">
                                        <a href="#0">
                                            <span className="bi bi-chevron-left"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">1</a>
                                    </li>
                                    <li>
                                        <a href="#0">2</a>
                                    </li>
                                    <li>
                                        <a href="#0">3</a>
                                    </li>
                                    <li>
                                        <a href="#0">...</a>
                                    </li>
                                    <li className="next">
                                        <a href="#0">
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* EXPLORE POPULAR TOUR END */}

                {/* STEPS SECTION */}
                <div className="section-full trv-step-bx1-wrap p-t120 p-b90">
                    <div className="container">
                        {/* TITLE */}
                        <div className="section-head trv-head-title-wrap center-position">
                            <h2 className="trv-head-title">
                                Easy Steps <span className="site-text-yellow">For Bookings</span>
                            </h2>
                            <div className="trv-head-discription">
                                Destinations worth exploring! Here are a few popular spots
                            </div>
                            <div className="trv-head-title-image">
                                <img
                                    src="/images/background/Title-Separator.png"
                                    alt="Separator"
                                />
                            </div>
                        </div>

                        <div className="section-content">
                            <div className="trv-step-bx1-section">
                                <div className="row">
                                    {/* STEP 1 */}
                                    <div className="col-lg-4 col-md-12 m-b30">
                                        <div className="trv-step-bx1">
                                            <div className="trv-tp-part">
                                                <div className="trv-num">01</div>
                                                <div className="trv-icon-back">
                                                    <div className="trv-icon-front">
                                                        <img
                                                            src="/images/trv-icon/destination.png"
                                                            alt="Destination"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="trv-title">Choose Destination</div>
                                            <p className="trv-text">
                                                All you have to do is, first select your preferred
                                                destination and proceed
                                            </p>
                                        </div>
                                    </div>

                                    {/* STEP 2 */}
                                    <div className="col-lg-4 col-md-12 m-b30">
                                        <div className="trv-step-bx1">
                                            <div className="trv-tp-part">
                                                <div className="trv-num">02</div>
                                                <div className="trv-icon-back">
                                                    <div className="trv-icon-front">
                                                        <img
                                                            src="/images/trv-icon/make-payment.png"
                                                            alt="Payment"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="trv-title">Make Payment</div>
                                            <p className="trv-text">
                                                You are important to us. We pay attention to the quality
                                                of every service we provide to you.
                                            </p>
                                        </div>
                                    </div>

                                    {/* STEP 3 */}
                                    <div className="col-lg-4 col-md-12 m-b30">
                                        <div className="trv-step-bx1">
                                            <div className="trv-tp-part">
                                                <div className="trv-num">03</div>
                                                <div className="trv-icon-back">
                                                    <div className="trv-icon-front">
                                                        <img
                                                            src="/images/trv-icon/travelling.png"
                                                            alt="Travel"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="trv-title">Ready For Travelling</div>
                                            <p className="trv-text">
                                                We have seen that you have fulfilled all the
                                                requirements, now you are ready to travel.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* OFFER BAR */}
                                <div className="trv-hor-add">
                                    <div className="ofr-price">
                                        <h2 className="lg-title">48</h2>
                                        <div className="per-off">
                                            %<span>Off</span>
                                        </div>
                                    </div>

                                    <div className="trv-hor-add-mid">
                                        <span className="sm-title">Get Special Offer</span>
                                        Tours and Trip Packages , Globally
                                    </div>

                                    <div className="trv-hor-add-btn">
                                        <Link
                                            to="/about"
                                            className="site-button butn-bg-shape white-bg"
                                        >
                                            Discover More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* STEPS SECTION END */}

                <ScrollToTop />
            </div>
            {/* CONTENT END */}
        </div>
    );
};

export default Team;
