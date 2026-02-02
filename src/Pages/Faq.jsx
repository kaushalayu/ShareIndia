import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

export default function Faq() {
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
                                <h2 className="wt-title">Frequently Asked Questions</h2>
                            </div>

                            {/* BREADCRUMB */}
                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>Frequently Asked Questions</li>
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

                {/* FAQ SECTION */}
                <div className="section-full trv-faq-warp p-t120 p-b90">
                    <div className="container">
                        <div className="row">

                            {/* LEFT */}
                            <div className="col-lg-5 col-md-12">
                                <div className="trv-faq-left-media-wrap m-b30">
                                    <div className="section-head trv-head-title-wrap left-position">
                                        <h2 className="trv-head-title">
                                            Find <span className="site-text-yellow">Answers</span> for
                                            Questions You Have.
                                        </h2>
                                        <div className="trv-head-discription">
                                            SimplyIndiaHolidays is a trusted travel booking agency that
                                            helps people explore India with comfort and ease.
                                        </div>
                                    </div>

                                    <div className="trv-faq-left-media-wrap">
                                        <div className="trv-f-pic">
                                            <img src="/images/faq-media.png" alt="FAQ" />
                                        </div>
                                        <div className="trv-f-quote">
                                            <div className="trv-f-quote-icon">
                                                <i className="bi bi-quote"></i>
                                            </div>
                                            <h3 className="trv-title">
                                                Give us a chance to help you!
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="col-lg-7 col-md-12">
                                <div className="trv-faq-right-section m-b30">

                                    <div className="wt-accordion" id="accordion-two">

                                        {[
                                            {
                                                id: "One",
                                                q: "Can I book honeymoon or family-specific tour packages?",
                                                a: "Yes, we offer specially designed honeymoon, family, and senior citizen tour packages customized according to your preferences and budget.",
                                                show: true,
                                            },
                                            {
                                                id: "Two",
                                                q: "Do you provide assistance during the tour?",
                                                a: "Absolutely. Our team offers 24/7 customer support during your journey.",
                                            },
                                            {
                                                id: "Three",
                                                q: "Is there any cancellation or refund policy?",
                                                a: "Yes, cancellation and refund policies vary depending on the package.",
                                            },
                                            {
                                                id: "Four",
                                                q: "Do you offer hotel and transportation bookings?",
                                                a: "Yes, we provide complete travel solutions including hotels and transport.",
                                            },
                                            {
                                                id: "Five",
                                                q: "What payment methods are accepted?",
                                                a: "We accept UPI, debit/credit cards, net banking, and bank transfers.",
                                            },
                                            {
                                                id: "Six",
                                                q: "Why choose Simply India Holidays?",
                                                a: "We are known for transparent pricing, reliability, and great reviews.",
                                            },
                                            {
                                                id: "Seven",
                                                q: "How can I book a tour package?",
                                                a: "You can call us, visit our office, or book through our website.",
                                            },
                                            {
                                                id: "Eight",
                                                q: "Are group tour packages available from Lucknow?",
                                                a: "Yes, we offer well-planned group tours with guided assistance.",
                                            },
                                        ].map((item, index) => (
                                            <div className="panel wt-panel" key={index}>
                                                <div className="acod-head" id={`heading${item.id}`}>
                                                    <h4 className="acod-title">
                                                        <a
                                                            className={item.show ? "" : "collapsed"}
                                                            data-bs-toggle="collapse"
                                                            href={`#collapse${item.id}`}
                                                            aria-expanded={item.show ? "true" : "false"}
                                                        >
                                                            {`0${index + 1} - ${item.q}`}
                                                            <span className="indicator">
                                                                <i className="bi bi-chevron-right"></i>
                                                            </span>
                                                        </a>
                                                    </h4>
                                                </div>

                                                <div
                                                    id={`collapse${item.id}`}
                                                    className={`collapse ${item.show ? "show" : ""}`}
                                                    data-bs-parent="#accordion-two"
                                                >
                                                    <div className="acod-content p-tb15">
                                                        {item.a}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FAQ END */}

                {/* CONTACT SECTION */}
                <div
                    className="section-full trv-contact2-form-wrap"
                    style={{
                        backgroundImage: "url(/images/con-sec-bg.jpg)",
                    }}
                >
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="trv-contact2-right-part">
                                <div className="trv-form2">

                                    <div className="section-head trv-head-title-wrap left-position with-bg-dark">
                                        <h2 className="trv-head-title">
                                            <span className="site-text-yellow">Reach</span> & Get in Touch With Us!
                                        </h2>
                                        <div className="trv-head-discription">
                                            We’d love to hear from you.
                                        </div>
                                    </div>

                                    <form className="trv-cons-contact-form">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="email" placeholder="Enter Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Select Your Subject" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Message"></textarea>
                                        </div>
                                        <button type="button" className="site-button butn-bg-shape">
                                            Send Message
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CONTACT END */}
                <ScrollToTop />

            </div>
            {/* CONTENT END */}
        </div>
    );
}
