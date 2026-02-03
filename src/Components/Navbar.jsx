import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    useEffect(() => {
        // Bootstrap collapse functionality fix
        const toggleButton = document.getElementById('mobile-side-drawer');
        const targetMenu = document.querySelector('.header-nav');
        
        // Button click handler
        if (toggleButton && targetMenu) {
            toggleButton.addEventListener('click', () => {
                targetMenu.classList.toggle('show');
            });
        }
        
        // Auto close on link click
        const navLinks = document.querySelectorAll('.header-nav .navbar-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                targetMenu.classList.remove('show');
            });
        });
    }, []);

    return (
        <>
            {/* HEADER START */}
            <header className="sticky-header site-header header-style-1 mobile-sider-drawer-menu">
                <div className="main-bar-wraper navbar-expand-lg">
                    <div className="main-bar">
                        {/* NAV Toggle Button */}
                        <button
                            id="mobile-side-drawer"
                            data-target=".header-nav"
                            data-toggle="collapse"
                            type="button"
                            className="navbar-toggler collapsed"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first"></span>
                            <span className="icon-bar icon-bar-two"></span>
                            <span className="icon-bar icon-bar-three"></span>
                        </button>

                        <div className="logo-header">
                            <div className="logo-header-inner logo-header-one">
                                <Link href="Home">
                                    <img src="images/ShareLogo.png" alt="Logo" />
                                </Link>
                            </div>
                        </div>

                        {/* MAIN Vav */}
                        <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-end">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/gallery">Gallery</Link>
                                </li>
                                <li>
                                    <Link to="/offer">Offer</Link>
                                </li>
                                <li>
                                    <Link to="/tour">Tours</Link>
                                </li>
                                <li>
                                    <Link to="/blog-grid">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Header Right Section*/}
                        <div className="extra-nav header-1-nav">
                            <div className="extra-cell one">
                                <div className="header-search">
                                    <Link to="/signup" className="header-search-icon">
                                        <span className="signup">SignUp/Login</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="extra-cell two trv-r-section-block">
                                <a href="/#" className="navSidebar-button">
                                    <span className="trv-nev-line1"></span>
                                    <span className="trv-nev-line2"></span>
                                    <span className="trv-nev-line1"></span>
                                    <b className="trv-new-info-btn">Info</b>
                                </a>
                            </div>
                        </div>

                        {/* SITE Search */}
                        <div id="search">
                            <span className="close-btn">X</span>
                            <form
                                role="search"
                                id="searchform"
                                action=""
                                method="get"
                                className="radius-xl"
                            >
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        defaultValue=""
                                        name="q"
                                        type="search"
                                        placeholder="Search..."
                                    />
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
                {/* Sidebar popup Item */}
                <div className="xs-sidebar-group info-group">
                    <div className="xs-overlay xs-bg-black"></div>
                    <div className="xs-sidebar-widget">
                        <div className="sidebar-widget-container">
                            <div className="widget-heading">
                                <a href="/#" className="close-side-widget">
                                    <i className="bi bi-x-square-fill"></i>
                                </a>
                            </div>

                            <div className="sidebar-textwidget">
                                {/* Sidebar Info Content */}
                                <div className="sidebar-info-contents">
                                    <div className="content-inner">
                                        <div className="content-box">
                                            <div className="trv-side-pnl-info">
                                                <div className="trv-side-pnl-logo">
                                                    <img src="images/ShareLogo.png" alt="Image" />
                                                </div>
                                                <div className="trv-side-pnl-content">
                                                    <div className="trv-side-pnl-content-mid">
                                                        <h3 className="trv-sm-title">
                                                            It’s Time to Traveling
                                                        </h3>
                                                        <h3 className="trv-lg-title">
                                                            Plan Your Next Holiday
                                                        </h3>
                                                        <p>
                                                            SimplyIndiaHolidays is a trusted travel booking
                                                            agency that helps people explore India with
                                                            comfort and ease. They offer well-planned holiday
                                                            packages, hotel bookings, and transportation
                                                            services at affordable prices.
                                                        </p>
                                                    </div>

                                                    <ul className="social-icons">
                                                        <li>
                                                            <a href="/#">
                                                                <i className="bi bi-twitter-x"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/#">
                                                                <i className="bi bi-facebook"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/#">
                                                                <i className="bi bi-instagram"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/#">
                                                                <i className="bi bi-pinterest"></i>
                                                            </a>
                                                        </li>
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
                {/*End Sidebar popup Item */}
            </header>
            {/* HEADER END */}
        </>
    );
};
export default Navbar;
