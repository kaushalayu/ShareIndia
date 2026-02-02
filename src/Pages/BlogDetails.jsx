import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

export default function BlogDetail() {
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
                <h2 className="wt-title">Blog Detail</h2>
              </div>

              {/* BREADCRUMB */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Blog Detail</li>
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

        {/* BLOG SECTION */}
        <div className="section-full p-t120 p-b90">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-xl-8 col-lg-8 col-md-12 m-b30">
                  <div className="trv-detail-main-wrap">
                    {/* Top Image */}
                    <div className="trv-detail-media">
                      <img src="images/tour-cat/style1/pic1.jpg" alt="image" />
                    </div>

                    <div className="trv-detail-bx-wrap">
                      <ul className="trv-post-meta">
                        <li className="post-author">By Mike Hardson</li>
                        <li className="post-comment">20 June 2025</li>
                        <li className="post-time">Tour Guide</li>
                      </ul>

                      <h3 className="trv-inner-title-lg">
                        Tour guide who give you proper information about every
                        destination
                      </h3>

                      <div className="trv-inr-para">
                        <p>
                          Choosing a destination can be exciting but also a bit
                          overwhelming with so many amazing places out there!
                        </p>

                        <p>
                          Here’s a curated overview of top travel destinations
                          and what makes each one special, perfect for your next
                          adventure.
                        </p>

                        <blockquote>
                          <div className="trv-bq-content">
                            <div className="quote-left">
                              <i className="bi bi-quote"></i>
                            </div>
                            Why do you go away? So that you can come back.
                          </div>
                          <div className="trv-bq-atr-name">Terry Pratchet</div>
                        </blockquote>

                        <div className="trv-blog-d-column-wrap">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 m-b30">
                              <div className="trv-blog-d-column-bx">
                                <img src="images/1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 m-b30">
                              <div className="trv-blog-d-column-bx">
                                <img src="images/2.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <h4 className="trv-inner-title-sm">
                          What precautions should we take while travelling?
                        </h4>
                      </div>

                      <ul className="trv-checklist-st1">
                        <li>
                          <i className="bi bi-check-circle-fill"></i> Stay aware
                          of local laws
                        </li>
                        <li>
                          <i className="bi bi-check-circle-fill"></i> Keep
                          copies of documents
                        </li>
                        <li>
                          <i className="bi bi-check-circle-fill"></i> Stay
                          hydrated
                        </li>
                        <li>
                          <i className="bi bi-check-circle-fill"></i> Offline
                          maps
                        </li>
                      </ul>

                      {/* TAGS + SHARE */}
                      <div className="s-post-tag-share">
                        <div className="s-post-tags">
                          <h3 className="twm-title">Tags</h3>
                          <div className="tagcloud">
                            <Link to="/services">Food</Link>
                            <Link to="/services">Tour</Link>
                            <Link to="/services">Pool</Link>
                          </div>
                        </div>

                        <div className="s-post-share">
                          <ul className="social-icons">
                            <li>
                              <a href="#">
                                <i className="bi bi-twitter-x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-pinterest"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* POST NAV */}
                      <div className="post-navigation">
                        <div className="post-nav-links">
                          <div className="post-nav-item nav-post-prev">
                            <Link to="/blog-list">
                              <p>
                                Destination can be exciting but also
                                overwhelming.
                              </p>
                              <b>
                                <i className="bi bi-chevron-left"></i> Previous
                                Post
                              </b>
                            </Link>
                          </div>

                          <div className="post-nav-item nav-post-next">
                            <Link to="/blog-list">
                              <p>
                                Destination can be exciting but also
                                overwhelming.
                              </p>
                              <b>
                                Next Post{" "}
                                <i className="bi bi-chevron-right"></i>
                              </b>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* COMMENTS */}
                      <div className="twm-post-com-wrap">
                        <h3 className="comments-title">Customer Review</h3>

                        <ol className="comment-list">
                          <li className="comment">
                            <div className="comment-body">
                              <div className="comment-author">
                                <img src="images/anees.png" alt="" />
                              </div>
                              <div className="comment-meta">
                                <cite>Charlie</cite> <span>24-07-2025</span>
                              </div>
                              <p>Exciting but also a bit overwhelming!</p>
                            </div>
                          </li>
                        </ol>

                        {/* COMMENT FORM */}
                        <div className="comment-respond trv-form">
                          <div className="section-head trv-head-title-wrap left-position">
                            <h2 className="trv-head-title">
                              <span className="site-text-yellow">Comment</span>{" "}
                              Section
                            </h2>
                          </div>

                          <form className="trv-cons-contact-form">
                            <input
                              className="form-control"
                              placeholder="Enter Your Name"
                            />
                            <input
                              className="form-control"
                              placeholder="Enter Email Address"
                            />
                            <input
                              className="form-control"
                              placeholder="Select Your Subject"
                            />
                            <textarea
                              className="form-control"
                              placeholder="Message"
                            ></textarea>
                            <button
                              type="button"
                              className="site-button butn-bg-shape"
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SIDE BAR START */}
                <div className="col-xl-4 col-lg-4 col-md-12 rightSidebar m-b30">
                  <aside className="side-bar">
                    {/* SEARCH */}
                    <div className="widget search-bx">
                      <form role="search" method="post">
                        <div className="input-group">
                          <input
                            name="news-letter"
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
                      </form>
                    </div>

                    {/* RECENT POSTS */}
                    <div className="widget trv-recent-posts">
                      <div className="m-b20">
                        <h4 className="widget-title">Recent Posts</h4>
                      </div>

                      <div className="trv-recent-posts-bx">
                        <div className="trv-rc-po-st1">
                          <div className="post-date">
                            <span>14</span>June
                          </div>
                          <div className="trv-post-info">
                            <div className="post-category">Aidan Butler</div>
                            <div className="trv-post-title">
                              <h5 className="post-title">
                                <Link to="/blog-detail">
                                  Resources for your first trip to overseas
                                  vacation
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </div>

                        <div className="trv-rc-po-st1">
                          <div className="post-date">
                            <span>20</span>June
                          </div>
                          <div className="trv-post-info">
                            <div className="post-category">Ricardo Bell</div>
                            <div className="trv-post-title">
                              <h5 className="post-title">
                                <Link to="/blog-detail">
                                  How to get acquainted with natives in a
                                  strange land
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </div>

                        <div className="trv-rc-po-st1">
                          <div className="post-date">
                            <span>24</span>June
                          </div>
                          <div className="trv-post-info">
                            <div className="post-category">Martin Hicks</div>
                            <div className="trv-post-title">
                              <h5 className="post-title">
                                <Link to="/blog-detail">
                                  Step by step guide to planning your ideal
                                  holiday
                                </Link>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TOP DESTINATIONS */}
                    <div className="widget widget_services">
                      <div className="m-b20">
                        <h4 className="widget-title">Top Destinations</h4>
                      </div>
                      <ul>
                        <li>
                          <Link to="/blog-grid">Thailand</Link>
                          <span className="badge">( 05 Listing )</span>
                        </li>
                        <li>
                          <Link to="/blog-grid">Maldives</Link>
                          <span className="badge">( 07 Listing )</span>
                        </li>
                        <li>
                          <Link to="/blog-grid">Bangkok</Link>
                          <span className="badge">( 08 Listing )</span>
                        </li>
                        <li>
                          <Link to="/blog-grid">Peris</Link>
                          <span className="badge">( 09 Listing )</span>
                        </li>
                        <li>
                          <Link to="/blog-grid">Spain</Link>
                          <span className="badge">( 02 Listing )</span>
                        </li>
                      </ul>
                    </div>

                    {/* TAGS */}
                    <div className="widget widget_tag_cloud">
                      <div className="m-b20">
                        <h4 className="widget-title">Popular Tags</h4>
                      </div>
                      <div className="tagcloud">
                        <Link to="/blog-grid">Food</Link>
                        <Link to="/blog-grid">Tour</Link>
                        <Link to="/blog-grid">Pool</Link>
                        <Link to="/blog-grid">Safari</Link>
                        <Link to="/blog-grid">Sky View</Link>
                        <Link to="/blog-grid">Hotel</Link>
                        <Link to="/blog-grid">Adventure</Link>
                        <Link to="/blog-grid">Travel</Link>
                        <Link to="/blog-grid">Luxury</Link>
                        <Link to="/blog-grid">Wildlife</Link>
                      </div>
                    </div>

                    {/* GALLERY */}
                    <div className="widget widget_gallery">
                      <div className="m-b20">
                        <h4 className="widget-title">Gallery</h4>
                      </div>

                      <div className="tw-sidebar-gallery">
                        <ul>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <li key={num}>
                              <div className="tw-service-gallery-thumb">
                                <a
                                  className="elem"
                                  href={`/images/trv-gallery/pic${num}.html`}
                                  title={`Title ${num}`}
                                >
                                  <img
                                    src={`/images/trv-gallery/pic${num}.html`}
                                    alt=""
                                  />
                                  <i className="fa fa-file-image"></i>
                                </a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
                {/* SIDE BAR END */}
              </div>
            </div>
          </div>
        </div>
        {/* BLOG END */}
        <ScrollToTop />
      </div>
      {/* CONTENT END */}
    </div>
  );
}
