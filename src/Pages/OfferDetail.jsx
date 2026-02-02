import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

export default function OfferDetails() {
    const [activeTab, setActiveTab] = useState("package");
    const [image, setImage] = useState("images/package.jpg");

    const handleTab = (tab, img) => {
        setActiveTab(tab);
        setImage(img);
    };

    return (
        <div className="page-wraper">
            <div className="page-content">

                {/* INNER PAGE BANNER */}
                <div className="wt-bnr-inr overlay-wraper bg-center">
                    <div className="overlay-main innr-bnr-olay"></div>

                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">Offer-details</h2>
                            </div>

                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><Link to="/">Home</Link></li>
                                <li>Offer-details</li>
                            </ul>
                        </div>
                    </div>

                    <div className="trv-inr-bnr-cloud">
                        <div className="marquee">
                            <img src="images/inr-banner-cloud.png" alt="" />
                        </div>
                    </div>

                    <div className="trv-inr-bnr-plane">
                        <div className="trv-inr-bnr-plane-bx">
                            <img src="images/airplane.png" alt="" />
                        </div>
                    </div>

                    <div className="trv-inr-bnr-bloon-1">
                        <img src="images/hotballon-Left.png" alt="" />
                    </div>

                    <div className="trv-inr-bnr-bloon-2">
                        <img src="images/hotballon-right.png" alt="" />
                    </div>
                </div>

                {/* DETAILS SECTION */}
                <section className="package-section">
                    <div className="package-wrapper">

                        {/* LEFT IMAGE */}
                        <div className="package-image">
                            <img src={image} alt="Package" />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="package-content">

                            {/* Tabs */}
                            <div className="tab-header">
                                <button
                                    className={`tab-btn ${activeTab === "package" ? "active" : ""}`}
                                    onClick={() =>
                                        handleTab("package", "images/package.jpg")
                                    }
                                >
                                    Package Type
                                </button>

                                <button
                                    className={`tab-btn ${activeTab === "review" ? "active" : ""}`}
                                    onClick={() =>
                                        handleTab("review", "images/review.jpg")
                                    }
                                >
                                    Review
                                </button>

                                <button
                                    className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
                                    onClick={() =>
                                        handleTab("description", "images/description.jpg")
                                    }
                                >
                                    Description
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="tab-content">

                                {activeTab === "package" && (
                                    <div className="tab-panel active">
                                        <div className="info-card">
                                            <h4>Domestic Tour</h4>
                                            <p>
                                                Explore our amazing Domestic Tour deals with premium
                                                hotels, sightseeing, and travel support.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "review" && (
                                    <div className="tab-panel active">
                                        <div className="info-card">
                                            <h4>Customer Reviews</h4>
                                            <p>
                                                Rated 4.8/5 by 1200+ travelers with excellent service
                                                experience.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "description" && (
                                    <div className="tab-panel active">
                                        <div className="info-card">
                                            <h4>Package Description</h4>
                                            <p>
                                                Includes hotel stay, meals, transfers, sightseeing,
                                                and professional guide services.
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </section>
                <ScrollToTop />

            </div>
        </div>
    );
}
