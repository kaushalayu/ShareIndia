import React from 'react'
import ScrollToTop from '../Components/ScrollToTop'
import { Link } from 'react-router-dom'

function TourDetail() {
    return (
        <>
            <div className="page-content">
                {/* INNER PAGE BANNER */}
                <div className="wt-bnr-inr overlay-wraper bg-center">
                    <div className="overlay-main innr-bnr-olay"></div>

                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">Tour Detail</h2>
                            </div>

                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Tour Detail</li>
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

                                {/* SIDE BAR START */}
                                <div className="col-xl-4 col-lg-4 col-md-12 rightSidebar m-b30">
                                    <aside className="side-bar-filter">

                                        {/* Left Search Filter */}
                                        <div className="styleswitcher">
                                            <div className="styleswitcher-inner">
                                                <div className="twm-side-filter-form">

                                                    <form>
                                                        <div className="twm-sidebar-ele-filter">

                                                            {/* TOP FILTER */}
                                                            <div className="trv-fliter-bx">

                                                                <div className="trv-fltr-select">
                                                                    <div className="form-group">
                                                                        <label>Location</label>
                                                                        <select className="form-control" defaultValue="New Zealand">
                                                                            <option>New Zealand</option>
                                                                            <option value="1">Paris</option>
                                                                            <option value="2">Bali</option>
                                                                            <option value="3">Indonesia</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="trv-fltr-select">
                                                                    <div className="form-group">
                                                                        <label>Activity Type</label>
                                                                        <select className="form-control" defaultValue="Adventure">
                                                                            <option>Adventure</option>
                                                                            <option value="1">Wild Life</option>
                                                                            <option value="2">Desert</option>
                                                                            <option value="3">Culture</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="trv-fltr-select">
                                                                    <div className="form-group twm-input-with-icon">
                                                                        <label>Date</label>
                                                                        <div className="input-group date datepicker">
                                                                            <input className="form-control" placeholder="Date" />
                                                                            <span className="input-group-append input-group-addon">
                                                                                <span className="input-group-text">
                                                                                    <i className="fa fa-solid fa-calendar-days"></i>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="form-group twm-input-with-icon">
                                                                        <label>Time</label>
                                                                        <div className="input-group time timepicker">
                                                                            <input className="form-control" placeholder="Time" />
                                                                            <span className="input-group-append input-group-addon">
                                                                                <span className="input-group-text">
                                                                                    <i className="fa fa-solid fa-clock"></i>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="trv-fltr-select">
                                                                    <div className="form-group form-group-2column-wrap twm-input-with-icon">
                                                                        <label>Traveler</label>
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

                                                                <div className="trv-fltr-select">
                                                                    <div className="trv-search-st1-search-btn">
                                                                        <button type="button" className="srch-btn">
                                                                            <i className="bi bi-search"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            {/* CITIES */}
                                                            <div className="trv-fliter-bx">
                                                                <h4 className="section-head-small mb-4">Cities</h4>

                                                                <div className="search-bx-filter">
                                                                    <div className="input-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Search ..."
                                                                        />
                                                                        <span className="input-group-btn">
                                                                            <button type="button" className="btn">
                                                                                <i className="fa fa-search"></i>
                                                                            </button>
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <ul>
                                                                    {[
                                                                        ["c01", "New York"],
                                                                        ["c02", "Los Angeles"],
                                                                        ["c03", "Chicago"],
                                                                        ["c04", "Houston"],
                                                                        ["c05", "Phoenix"],
                                                                    ].map(([id, city]) => (
                                                                        <li key={id}>
                                                                            <div className="form-check">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="form-check-input"
                                                                                    id={id}
                                                                                />
                                                                                <label className="form-check-label" htmlFor={id}>
                                                                                    {city}
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    ))}
                                                                </ul>

                                                                <button type="button" className="trv-link-text">
                                                                    Show More...
                                                                </button>
                                                            </div>

                                                            {/* DURATION */}
                                                            <div className="trv-fliter-bx">
                                                                <h4 className="section-head-small mb-4">
                                                                    Duration (in Nights)
                                                                </h4>
                                                                <div className="trv-night-count-slider">
                                                                    <b>1 Night</b>
                                                                    <input
                                                                        id="ex2"
                                                                        type="text"
                                                                        data-slider-min="1"
                                                                        data-slider-max="10"
                                                                        data-slider-step="1"
                                                                        data-slider-value="3"
                                                                    />
                                                                    <span>
                                                                        <span className="trv-night-count">3</span> <b>Night</b>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {/* AMENITIES */}
                                                            <div className="trv-fliter-bx">
                                                                <h4 className="section-head-small mb-4">Amenities</h4>
                                                                <ul>
                                                                    {[
                                                                        ["T01", "Reservations"],
                                                                        ["T02", "Free Coupons"],
                                                                        ["T03", "Wireless Internet"],
                                                                        ["T04", "Smoking Not Allowed"],
                                                                    ].map(([id, label]) => (
                                                                        <li key={id}>
                                                                            <div className="form-check">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    className="form-check-input"
                                                                                    id={id}
                                                                                />
                                                                                <label className="form-check-label" htmlFor={id}>
                                                                                    {label}
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                                <button type="button" className="trv-link-text">
                                                                    Show More...
                                                                </button>
                                                            </div>

                                                        </div>

                                                        <div className="twm-side-filter-aply-btn text-center">
                                                            <button type="button" className="site-button butn-bg-shape">
                                                                Apply
                                                            </button>
                                                        </div>
                                                    </form>

                                                    <div className="trv-advertisment-bx">
                                                        <img src="images/Advertisment.html" alt="Image" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* Left Search Filter */}

                                    </aside>
                                </div>
                                {/* SIDE BAR END */}

                                {/* RIGHT CONTENT */}
                                <div className="col-xl-8 col-lg-8 col-md-12 m-b30">
                                    <div className="trv-detail-main-wrap">

                                        {/* Info Start */}
                                        <div className="trv-detail-bx-wrap">

                                            <div className="trv-right-tp-part">
                                                <ul className="tp-list">
                                                    <li><span>Location</span>Bali indonesia</li>
                                                    <li><span>Activity type</span>Adventure</li>
                                                    <li><span>Date</span>5 Sep 2025</li>
                                                    <li><span>Traveler</span>05</li>
                                                    <li>
                                                        <div className="price">
                                                            <span className="number">$89 </span>
                                                            Per day
                                                        </div>
                                                    </li>
                                                </ul>
                                                <a className="site-button butn-bg-shape" href="tour-1-grid.html">
                                                    Book Now
                                                </a>
                                            </div>

                                            <div className="trv-inr-para">
                                                <div className="trv-sep-rating">
                                                    <div className="trv-rating">
                                                        <span>(4.8 Review)</span>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                    </div>
                                                </div>

                                                <h3 className="trv-inner-title-lg">
                                                    The Most Beautiful Destination , Bali , Indonesia
                                                </h3>

                                                <p>
                                                    The island is unique in Indonesia as the only Hindu-majority province,
                                                    with around 86% of its 4–5 million inhabitants practising a vibrant,
                                                    animism-influenced form of Balinese Hinduism.
                                                </p>

                                                {/* Slider */}
                                                <div className="trv-detail-slider">
                                                    <div className="swiper trv_d-slider">
                                                        <div className="swiper-wrapper">
                                                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                                                <div className="swiper-slide" key={n}>
                                                                    <div className="trv_d-slider-media">
                                                                        <img
                                                                            src={`images/detail-slider/slide2/pic${n}.html`}
                                                                            alt="Image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="swiper-pagination"></div>
                                                    </div>
                                                </div>

                                                <h3 className="trv-inner-title-sm">Geography & Climate</h3>
                                                <p>
                                                    Bali, Indonesia is a volcanic island located just east of Java and west
                                                    of Lombok, positioned about 8 degrees south of the equator.
                                                </p>
                                            </div>

                                            <h4 className="trv-inner-title-sm">Highlights & Attractions</h4>

                                            <div className="trv-de-list-st1">
                                                <ul className="trv-list-st-1">
                                                    <li>
                                                        <h4 className="title">Adventure & Nature:</h4>
                                                        <p className="text">
                                                            Climb Mount Batur at sunrise, trek lush jungles, or dive iconic
                                                            sites like the USAT Liberty shipwreck.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4 className="title">Beaches & Water Sports:</h4>
                                                        <p className="text">
                                                            Lovina, Seminyak, Kuta & Canggu, and serene Jimbaran Bay.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4 className="title">Iconic Temples:</h4>
                                                        <p className="text">
                                                            Pura Besakih, Tanah Lot, Uluwatu, Tirta Empul, Ulun Danu Beratan.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <blockquote>
                                                <div className="trv-bq-content">
                                                    <div className="quote-left">
                                                        <i className="bi bi-quote"></i>
                                                    </div>
                                                    Why do you go away? So that you can come back.
                                                </div>
                                                <div className="trv-bq-atr-name">Terry Pratchet</div>
                                            </blockquote>

                                            <h4 className="trv-inner-title-sm">Location</h4>
                                            <div className="trv-google-map">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2997060388047!2d80.93771068053408!3d26.92571161640579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995654d22563b5%3A0x7b5a24287c5f5653!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000"
                                                    width="100%"
                                                    height="450"
                                                    style={{ border: 0 }}
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                    title="Google Map"
                                                />
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
    )
}

export default TourDetail