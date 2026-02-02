import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* LOADING AREA */}
            <div className="loading-area">
                <div className="loading-box"></div>
                <div className="loading-pic">
                    <figure className="loader">
                        <div className="dot white"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </figure>
                </div>
            </div>

            {/* Cursor */}
            <div className="cursor"></div>
            <div className="cursor2"></div>

            {/* HEADER */}
            <header className="sticky-header site-header header-style-1 mobile-sider-drawer-menu">
                <div className="main-bar-wraper navbar-expand-lg">
                    <div className="main-bar">

                        {/* MOBILE TOGGLE */}
                        <button
                            className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first"></span>
                            <span className="icon-bar icon-bar-two"></span>
                            <span className="icon-bar icon-bar-three"></span>
                        </button>

                        {/* LOGO */}
                        <div className="logo-header">
                            <div className="logo-header-inner logo-header-one">
                                <Link to="/">
                                    <img src="/images/ShareLogo.png" alt="Logo" />
                                </Link>
                            </div>
                        </div>

                        {/* MAIN NAV */}
                        <div
                            className={`nav-animation header-nav navbar-collapse ${menuOpen ? "show" : "collapse"
                                } d-flex justify-content-end`}
                        >
                            <ul className="nav navbar-nav">
                                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                                <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
                                <li><Link to="/offer" onClick={() => setMenuOpen(false)}>Offer</Link></li>
                                <li><Link to="/tour" onClick={() => setMenuOpen(false)}>Tours</Link></li>
                                <li><Link to="/blog-grid" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
                                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                            </ul>
                        </div>

                        {/* RIGHT SECTION */}
                        <div className="extra-nav header-1-nav">
                            <div className="extra-cell one">
                                <Link to="/signup" className="header-search-icon">
                                    <span className="signup">SignUp/Login</span>
                                </Link>
                            </div>

                            <div className="extra-cell two trv-r-section-block">
                                <button
                                    className="navSidebar-button"
                                    onClick={() => setSidebarOpen(true)}
                                >
                                    <span className="trv-nev-line1"></span>
                                    <span className="trv-nev-line2"></span>
                                    <span className="trv-nev-line1"></span>
                                    <b className="trv-new-info-btn">Info</b>
                                </button>
                            </div>
                        </div>

                        {/* SEARCH */}
                        <div id="search">
                            <span className="close-btn">X</span>
                            <form className="radius-xl">
                                <div className="input-group">
                                    <input className="form-control" type="search" placeholder="Search..." />
                                    <span className="input-group-append">
                                        <button type="button" className="search-btn">
                                            <i className="bi bi-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                {/* SIDEBAR */}
                <div className={`xs-sidebar-group info-group ${sidebarOpen ? "is-open" : ""}`}>
                    <div className="xs-overlay xs-bg-black" onClick={() => setSidebarOpen(false)}></div>

                    <div className="xs-sidebar-widget">
                        <div className="sidebar-widget-container">
                            <div className="widget-heading">
                                <button className="close-side-widget" onClick={() => setSidebarOpen(false)}>
                                    <i className="bi bi-x-square-fill"></i>
                                </button>
                            </div>

                            <div className="sidebar-textwidget">
                                <div className="sidebar-info-contents">
                                    <div className="content-inner">
                                        <div className="content-box">
                                            <div className="trv-side-pnl-info">
                                                <div className="trv-side-pnl-logo">
                                                    <img src="/images/ShareLogo.png" alt="Logo" />
                                                </div>

                                                <div className="trv-side-pnl-content">
                                                    <h3 className="trv-sm-title">It’s Time to Traveling</h3>
                                                    <h3 className="trv-lg-title">Plan Your Next Holiday</h3>
                                                    <p>
                                                        SimplyIndiaHolidays is a trusted travel booking agency
                                                        offering affordable holiday packages across India.
                                                    </p>

                                                    <ul className="social-icons">
                                                        <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                        <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}
