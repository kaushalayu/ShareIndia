import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ScrollToTop from '../Components/ScrollToTop';


function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload stop

    console.log("Form Data:", formData);

    // 🔹 yahan API / backend / email service call kar sakte ho
    // axios.post("/api/contact", formData)

    alert("Message sent successfully!");

    // reset form
    setFormData({
      username: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <>
      <div className="page-wraper">
        {/* CONTENT START */}
        <div className="page-content">

          {/* INNER PAGE BANNER */}
          <div className="wt-bnr-inr overlay-wraper bg-center">
            <div className="overlay-main innr-bnr-olay"></div>

            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="wt-title">Contact Us</h2>
                </div>

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li><Link to="/">Home</Link></li>
                    <li>Contact Us</li>
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

          {/* CONTACT US SECTION */}
          <div className="trv-contact-us-wrap">
            <div className="trv-contact-us-mid">

              {/* GOOGLE MAP */}
              <div className="g-map-wrap">
                <div className="gmap-outline">
                  <div className="google-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2997060388047!2d80.9377106!3d26.9257116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995654d22563b5%3A0x7b5a24287c5f5653!2sJankipuram%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1769888109010"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map"
                    />
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-xxl-6 col-xl-5 col-lg-5 col-md-12">
                  <div className="trv-form">
                    {/* TITLE START */}
                    <div className="section-head trv-head-title-wrap left-position">
                      <h2 className="trv-head-title">
                        <span className="site-text-yellow">Reach</span> & Get in Touch With Us!
                      </h2>
                      <div className="trv-head-discription">
                        We’love to hear from you. Our friendly team is always here to chat
                      </div>
                    </div>
                    {/* TITLE END */}

                    <form
                      className="trv-cons-contact-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="username"
                          type="text"
                          placeholder="Enter Your Name"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          type="email"
                          placeholder="Enter Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          className="form-control"
                          name="subject"
                          type="text"
                          placeholder="Select Your Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          required
                        />
                      </div>

                      <button type="submit" className="site-button butn-bg-shape">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>

                <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-12">
                  <div className="trv-contact-us-detail-wrap">
                    <div className="trv-contact-us-detail">
                      {/* TITLE START */}
                      <div className="section-head trv-head-title-wrap left-position">
                        <h2 className="trv-head-title">
                          Contact Us <span className="site-text-yellow">Detail</span>
                        </h2>
                        <div className="trv-head-discription">
                          SimplyIndiaHolidays is a trusted travel booking agency that helps
                          people explore India with comfort and ease
                        </div>
                      </div>
                      {/* TITLE END */}

                      <ul className="trv-contact-list">
                        <li>
                          <div className="trv-contact-info">
                            <div className="media">
                              <div className="white-circle">
                                <i className="feather feather-phone-call"></i>
                              </div>
                            </div>
                            <div className="info">
                              <span className="title">Phone</span>
                              <h6 className="text">0522 - 4072275</h6>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="trv-contact-info icon-2">
                            <div className="media">
                              <div className="white-circle">
                                <i className="feather feather-mail"></i>
                              </div>
                            </div>
                            <div className="info">
                              <span className="title">Email</span>
                              <h6 className="text">pravin@simplyindiaholidays.com</h6>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="trv-contact-info icon-3">
                            <div className="media">
                              <div className="white-circle">
                                <i className="feather feather-home"></i>
                              </div>
                            </div>
                            <div className="info">
                              <span className="title">Address</span>
                              <h6 className="text">55/11 ronin tower, New York</h6>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <div className="trv-con-media">
                        <h3 className="trv-con-title">
                          Let's <span>Talk</span> About You !
                        </h3>
                      </div>
                    </div>

                    <img
                      src="/images/Girl-Image.png"
                      alt="Image"
                      className="trv-con-pic"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* CONTACT END */}
          <ScrollToTop />
        </div>

      </div>

    </>
  )
}

export default Contact