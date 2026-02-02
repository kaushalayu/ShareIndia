import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>

            {/* CONTENT END */}
            <div className="footer-follow-instagram2">
                <div className="container">
                    <h3 className="widget-title">Follow Instagram</h3>
                    <ul className="trv-ftr-insta-gall">
                        <li>
                            <a href="#">
                                <img src="/images/insta-gallery/pic1.jpg" alt="image" />
                                <span><i className="bi bi-instagram"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/insta-gallery/pic2.jpg" alt="image" />
                                <span><i className="bi bi-instagram"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/insta-gallery/pic3.jpg" alt="image" />
                                <span><i className="bi bi-instagram"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/insta-gallery/pic4.jpg" alt="image" />
                                <span><i className="bi bi-instagram"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/insta-gallery/pic5.jpg" alt="image" />
                                <span><i className="bi bi-instagram"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/insta-gallery/pic6.jpg" alt="image" />
                                <span><i className="bi bi-instagram"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/insta-gallery/pic7.jpg" alt="image" />
                                <span><i className="bi bi-instagram"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/insta-gallery/pic8.jpg" alt="image" />
                                <span><i className="bi bi-instagram"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/insta-gallery/pic9.jpg" alt="image" />
                                <span><i className="bi bi-instagram"></i></span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="marquee-car">
                    <div className="trv-animated-car">
                        <img className="car-main" src="/images/Left-Car (1).png" alt="#" />
                        <span className="tyre-1">
                            <img src="/images/Left-Car-tyre.png" alt="" className="spin-tyres" />
                        </span>
                        <span className="tyre-2">
                            <img src="/images/Left-Car-tyre.png" alt="" className="spin-tyres" />
                        </span>
                    </div>
                </div>

                <div className="trv-right-tree-pic">
                    <img src="/images/Righttreepic.png" alt="" />
                </div>
            </div>

            {/* FOOTER START */}
            <footer className="site-footer footer-dark">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">

                            <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="widget widget_about">
                                    <div className="logo-footer clearfix">
                                        <Link to="/">
                                            <img src="/images/ShareLogo.png" alt="" />
                                        </Link>
                                    </div>
                                    <p>
                                        SimplyIndiaHolidays is a trusted travel booking agency that
                                        helps people explore India with comfort and ease
                                    </p>

                                    <ul className="social-icons">
                                        <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                        <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-4 col-4 m-b20">
                                <div className="widget widget_services">
                                    <h3 className="widget-title">Explore</h3>
                                    <ul>
                                        <li><Link to="/about">About us</Link></li>
                                        <li><Link to="/faq">FAQ’s</Link></li>
                                        <li><Link to="/tour">Tour</Link></li>
                                        <li><Link to="/our-team">Team</Link></li>
                                        <li><Link to="/blog-grid">News & Articles</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-4 col-4 m-b20">
                                <div className="widget widget_services">
                                    <h3 className="widget-title">Destinations</h3>
                                    <ul>
                                        <li><Link to="/destination-detail">Kashmir</Link></li>
                                        <li><Link to="/tour-detail">Rajasthan</Link></li>
                                        <li><Link to="/tour-detail">Uttrakhand</Link></li>
                                        <li><Link to="/destination-detail">Himachal</Link></li>
                                        <li><Link to="/tour-detail">Mathura</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-4 col-4 m-b20">
                                <div className="widget widget_services">
                                    <h3 className="widget-title">Legal</h3>
                                    <ul>
                                        <li><Link to="/legal">Terms & Condition</Link></li>
                                        <li><Link to="/legal">Privacy Policy</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/about">Careers</Link></li>
                                        <li><Link to="/faq">Help</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="widget f-top-space">
                                    <ul className="widget_address">
                                        <li>
                                            <div className="trv-icon"><i className="bi bi-telephone"></i></div>
                                            <a href="tel:1236540214">
                                                <span className="trv-contact">
                                                    0522 - 4072275<br />+91-7379248409
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <div className="trv-icon"><i className="bi bi-envelope"></i></div>
                                            <span>
                                                pravin@simplyindiaholidays.com<br />
                                                info@simplyindiaholidays.com
                                            </span>
                                        </li>

                                        <li>
                                            <div className="trv-icon"><i className="bi bi-house-door"></i></div>
                                            <span>
                                                First Floor, 647/044, 60 Feet Rd , Abhishekpuram,
                                                Jankipuram , Lucknow UP 226021
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">
                            <div className="copyrights-text">
                                Copyright © 2026 Reserved By{" "}
                                <span className="site-text-yellow">
                                    <a href="https://simplyindiaholidays.com/" target="_blank" rel="noreferrer">
                                        Simply India Holidays
                                    </a>
                                </span>{" "}
                                | Design & Developed By{" "}
                                <span className="site-text-yellow">
                                    <a href="https://axsemsoftwares.com/index.html" target="_blank" rel="noreferrer">
                                        Team Axsem Software
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
            {/* FOOTER END */}

        </>
    )
}
