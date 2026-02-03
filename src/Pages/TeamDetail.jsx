import React from "react";
import { Link } from "react-router-dom";

const TeamDetail = () => {
    React.useEffect(() => {
        function initGuideSlider() {
            if (typeof window.Swiper === 'undefined') {
                setTimeout(initGuideSlider, 200);
                return;
            }
            const el = document.querySelector(".trv-tour-guide-carousal");
            if (el) {
                if (el.swiper) el.swiper.destroy(true, true);
                new window.Swiper(".trv-tour-guide-carousal", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        dynamicBullets: true,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1366: { slidesPerView: 4 },
                        1600: { slidesPerView: 5 },
                    },
                });
            }
        }
        const timer = setTimeout(initGuideSlider, 100);
        return () => clearTimeout(timer);
    }, []);

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
                                <h2 className="wt-title">Our Team Detail</h2>
                            </div>

                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>Our Team Detail</li>
                            </ul>
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

                {/* TEAM GUIDE DETAIL */}
                <div className="section-full trv-guide-det-wrap">
                    <div className="trv-guide-det-section">
                        <div className="container">
                            <div className="row">

                                {/* LEFT */}
                                <div className="col-lg-5 col-md-12">
                                    <div className="trv-guide-dtl-left-part">
                                        <div className="trv-guide-bx1">
                                            <div className="media">
                                                <img src="/images/trv-guide/pic1.jpg" alt="Guide" />
                                            </div>

                                            <ul className="social-icons">
                                                <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                            </ul>

                                            <h3 className="trv-guide-name">Murphy</h3>
                                            <span>Tourist Guide</span>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className="col-lg-6 col-md-12">
                                    <div className="trv-guide-dtl-right-part">
                                        <h2 className="title">About</h2>

                                        <p className="text">
                                            I am a professional tour guide who enhances travel
                                            experiences by leading groups, providing cultural
                                            insights and managing logistics.
                                        </p>

                                        <ul className="list-st-1">
                                            <li><span>Age:</span> 36</li>
                                            <li><span>Education:</span> BSc Computer Science</li>
                                            <li><span>Job Title:</span> Tour Guide</li>
                                            <li><span>Location:</span> Philadelphia, USA</li>
                                            <li><span>Experience:</span> 5 Years</li>
                                            <li><span>Contact:</span> +291 654 542 4242</li>
                                            <li><span>Email:</span> travllaricardo@gmail.com</li>
                                        </ul>

                                        <h4 className="list-title">Essential Skills</h4>
                                        <ul className="trv-list-st2">
                                            <li><i className="bi bi-arrow-right-circle"></i> Communication & Storytelling</li>
                                            <li><i className="bi bi-arrow-right-circle"></i> Leadership & Group Management</li>
                                            <li><i className="bi bi-arrow-right-circle"></i> Time Coordination</li>
                                            <li><i className="bi bi-arrow-right-circle"></i> Multilingual Ability</li>
                                            <li><i className="bi bi-arrow-right-circle"></i> Cultural Sensitivity</li>
                                            <li><i className="bi bi-arrow-right-circle"></i> First Aid & Safety</li>
                                        </ul>

                                        <h4 className="list-title">Certifications & Training</h4>
                                        <ul className="trv-list-st2">
                                            <li><i className="bi bi-arrow-right-circle"></i> India – Ministry of Tourism</li>
                                            <li><i className="bi bi-arrow-right-circle"></i> WFTGA Global Standards</li>
                                            <li><i className="bi bi-arrow-right-circle"></i> Adventure & Eco Tourism</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* TEAM GUIDE DETAIL END */}

                {/* OUR TOUR GUIDE START */}
                <div className="section-full p-t120 p-b90 site-bg-white">
                    <div className="container-fluid">

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
                            <div className="swiper trv-tour-guide-car-row trv-tour-guide-carousal swiper-nav-center-bottom">
                                <div className="swiper-wrapper">

                                    {/* SLIDE 1 */}
                                    <div className="swiper-slide">
                                        <div className="trv-guide-bx1">
                                            <div className="media">
                                                <img src="/images/trv-guide/pic1.jpg" alt="Guide" />
                                            </div>
                                            <ul className="social-icons">
                                                <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                            </ul>
                                            <h3 className="trv-guide-name">
                                                <Link to="/our-team-detail">Murphy</Link>
                                            </h3>
                                            <span>Tourist Guide</span>
                                        </div>
                                    </div>

                                    {/* SLIDE 2 */}
                                    <div className="swiper-slide">
                                        <div className="trv-guide-bx1">
                                            <div className="media">
                                                <img src="/images/trv-guide/pic2.jpg" alt="Guide" />
                                            </div>
                                            <ul className="social-icons">
                                                <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                            </ul>
                                            <h3 className="trv-guide-name">
                                                <Link to="/our-team-detail">Alexis Cox</Link>
                                            </h3>
                                            <span>Tourist Guide</span>
                                        </div>
                                    </div>

                                    {/* SLIDE 3 */}
                                    <div className="swiper-slide">
                                        <div className="trv-guide-bx1">
                                            <div className="media">
                                                <img src="/images/trv-guide/pic3.jpg" alt="Guide" />
                                            </div>
                                            <ul className="social-icons">
                                                <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                            </ul>
                                            <h3 className="trv-guide-name">
                                                <Link to="/our-team-detail">Murray</Link>
                                            </h3>
                                            <span>Tourist Guide</span>
                                        </div>
                                    </div>

                                    {/* SLIDE 4 */}
                                    <div className="swiper-slide">
                                        <div className="trv-guide-bx1">
                                            <div className="media">
                                                <img src="/images/trv-guide/pic4.jpg" alt="Guide" />
                                            </div>
                                            <ul className="social-icons">
                                                <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                            </ul>
                                            <h3 className="trv-guide-name">
                                                <Link to="/our-team-detail">Crawford</Link>
                                            </h3>
                                            <span>Tourist Guide</span>
                                        </div>
                                    </div>

                                    {/* SLIDE 5 */}
                                    <div className="swiper-slide">
                                        <div className="trv-guide-bx1">
                                            <div className="media">
                                                <img src="/images/trv-guide/pic5.jpg" alt="Guide" />
                                            </div>
                                            <ul className="social-icons">
                                                <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                            </ul>
                                            <h3 className="trv-guide-name">
                                                <Link to="/our-team-detail">Murphy</Link>
                                            </h3>
                                            <span>Tourist Guide</span>
                                        </div>
                                    </div>

                                    {/* SLIDE 6 */}
                                    <div className="swiper-slide">
                                        <div className="trv-guide-bx1">
                                            <div className="media">
                                                <img src="/images/trv-guide/pic6.jpg" alt="Guide" />
                                            </div>
                                            <ul className="social-icons">
                                                <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                            </ul>
                                            <h3 className="trv-guide-name">
                                                <Link to="/our-team-detail">Alexis Cox</Link>
                                            </h3>
                                            <span>Tourist Guide</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* OUR TOUR GUIDE END */}

            </div>
            {/* CONTENT END */}
        </div>
    );
};

export default TeamDetail;
