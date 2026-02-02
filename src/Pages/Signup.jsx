import React, { useState } from "react";
import ScrollToTop from "../Components/ScrollToTop";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const Signup = () => {
    const [isLogin, setIsLogin] = useState(true);
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
                                <h2 className="wt-title">Signup/Login</h2>
                            </div>
                            {/* BREADCRUMB ROW */}
                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>Signup/Login</li>
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
                <section className="auth-section">
                    <div className="auth-card">

                        <h3 className="auth-title">
                            {isLogin ? "Welcome Back 👋" : "Create Your Account 🚀"}
                        </h3>

                        <p className="auth-subtitle">
                            {isLogin
                                ? "Login to continue your journey with us"
                                : "Sign up and start planning your trips"}
                        </p>

                        <form className="auth-form">
                            {!isLogin && (
                                <input type="text" placeholder="Full Name" />
                            )}

                            <input type="email" placeholder="Email Address" />
                            <input type="password" placeholder="Password" />

                            {!isLogin && (
                                <input type="password" placeholder="Confirm Password" />
                            )}

                            <button type="submit" className="site-button butn-bg-shape auth-btn">
                                {isLogin ? "Login" : "Create Account"}
                            </button>
                        </form>

                        <div className="auth-switch">
                            {isLogin ? (
                                <p>
                                    Don’t have an account?
                                    <span onClick={() => setIsLogin(false)}> Sign up</span>
                                </p>
                            ) : (
                                <p>
                                    Already have an account?
                                    <span onClick={() => setIsLogin(true)}> Login</span>
                                </p>
                            )}
                        </div>

                    </div>
                </section>


                <ScrollToTop />
            </div>
            {/* CONTENT END */}
        </div>
    );
};

export default Signup;
