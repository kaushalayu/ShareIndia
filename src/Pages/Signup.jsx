import React, { useState } from "react";
import ScrollToTop from "../Components/ScrollToTop";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const Signup = () => {
    const [mode, setMode] = useState("login"); // login | signup | forgot | otp

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
                                <h2 className="wt-title">Signup / Login</h2>
                            </div>

                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><Link to="/">Home</Link></li>
                                <li>Signup / Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* INNER PAGE BANNER END */}

                {/* AUTH SECTION */}
                <section className="soft-auth-wrap">
                    <div className="soft-auth-card">

                        <h2 className="soft-title">
                            Reach & Get in <span>Touch</span> With Us!
                        </h2>

                        <p className="soft-subtitle">
                            We’d love to hear from you. Our friendly team is always here to chat
                        </p>

                        {/* LOGIN */}
                        {mode === "login" && (
                            <>
                                <input className="soft-input" placeholder="Enter Email Address" />
                                <input
                                    className="soft-input"
                                    type="password"
                                    placeholder="Password"
                                />

                                <button className="soft-btn">Login</button>

                                <div className="soft-links">
                                    <span onClick={() => setMode("forgot")}>
                                        Forgot Password?
                                    </span>
                                    <span onClick={() => setMode("signup")}>
                                        Create Account
                                    </span>
                                </div>
                            </>
                        )}

                        {/* SIGNUP */}
                        {mode === "signup" && (
                            <>
                                <input className="soft-input" placeholder="Enter Your Name" />
                                <input className="soft-input" placeholder="Enter Email Address" />
                                <input
                                    className="soft-input"
                                    type="password"
                                    placeholder="Password"
                                />

                                <button className="soft-btn">Create Account</button>

                                <div className="soft-links center">
                                    <span onClick={() => setMode("login")}>
                                        Already have an account?
                                    </span>
                                </div>
                            </>
                        )}

                        {/* FORGOT PASSWORD */}
                        {mode === "forgot" && (
                            <>
                                <input className="soft-input" placeholder="Enter Email Address" />

                                <button
                                    className="soft-btn"
                                    onClick={() => setMode("otp")}
                                >
                                    Send OTP
                                </button>

                                <div className="soft-links center">
                                    <span onClick={() => setMode("login")}>
                                        Back to Login
                                    </span>
                                </div>
                            </>
                        )}

                        {/* OTP */}
                        {mode === "otp" && (
                            <>
                                <input className="soft-input" placeholder="Enter OTP" />

                                <button className="soft-btn">Verify OTP</button>

                                <div className="soft-links center">
                                    <span onClick={() => setMode("login")}>
                                        Back to Login
                                    </span>
                                </div>
                            </>
                        )}

                    </div>
                </section>
                {/* AUTH SECTION END */}

                <ScrollToTop />
            </div>
            {/* CONTENT END */}
        </div>
    );
};

export default Signup;
