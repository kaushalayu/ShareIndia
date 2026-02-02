import React from "react";
import "../styles/legal.css";
import { Link } from "react-router-dom";

export default function Legal() {
    return (
        <div className="legal-page">
            {/* INNER PAGE BANNER */}
            <div className="wt-bnr-inr overlay-wraper bg-center">
                <div className="overlay-main innr-bnr-olay"></div>
                <div className="wt-bnr-inr-entry">
                    <div className="banner-title-outer">
                        <div className="banner-title-name">
                            <h2 className="wt-title">Privacy Policy & Terms</h2>
                        </div>
                        {/* BREADCRUMB ROW */}
                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>Privacy Policy & Terms</li>
                            </ul>
                        </div>
                    </div>
                    {/* BREADCRUMB ROW END */}
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

            {/* HERO */}
            <div className="legal-hero">
                <h1>Privacy Policy & Terms</h1>
                <p>Transparency, trust & your privacy matter to us</p>
            </div>

            <div className="legal-container">
                {/* PRIVACY POLICY */}
                <section className="legal-card">
                    <h2>Privacy Policy</h2>

                    <p>
                        At <strong>Simply India Holidays</strong>, we respect your privacy
                        and are committed to protecting your personal information. This
                        policy explains how we collect, use, and safeguard your data.
                    </p>

                    <h3>Information We Collect</h3>
                    <ul>
                        <li>Name, email address, phone number</li>
                        <li>Travel preferences and inquiry details</li>
                        <li>Website usage data (cookies & analytics)</li>
                    </ul>

                    <h3>How We Use Your Information</h3>
                    <ul>
                        <li>To provide travel services and support</li>
                        <li>To communicate offers and updates</li>
                        <li>To improve website experience</li>
                    </ul>

                    <h3>Data Protection</h3>
                    <p>
                        We use industry-standard security measures to protect your data.
                        Your personal information is never sold to third parties.
                    </p>
                </section>

                {/* TERMS & CONDITIONS */}
                <section className="legal-card">
                    <h2>Terms & Conditions</h2>

                    <p>
                        By using our website and services, you agree to the following terms
                        and conditions. Please read them carefully.
                    </p>

                    <h3>Service Usage</h3>
                    <p>
                        All bookings are subject to availability and confirmation. Prices
                        may change due to external factors such as taxes or government
                        rules.
                    </p>

                    <h3>Payments & Cancellations</h3>
                    <ul>
                        <li>Advance payment may be required</li>
                        <li>Cancellation charges may apply</li>
                        <li>Refunds depend on service provider policies</li>
                    </ul>

                    <h3>Liability</h3>
                    <p>
                        Simply India Holidays is not responsible for delays, cancellations,
                        or losses caused by third-party vendors, weather, or government
                        actions.
                    </p>

                    <h3>Changes to Policy</h3>
                    <p>
                        We reserve the right to update these policies at any time. Continued
                        use of our services means acceptance of the updated terms.
                    </p>
                </section>
            </div>
        </div>
    );
}
