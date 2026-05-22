"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function ServiceViewDetail (){
  
  const router = useRouter()

    return(
        <>
         <main>
        <div className="container home-wraper my-profile" style={{height: "auto"}}>
      
          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="browse-wrp">
                    <div className="browse-ctg-head my-con-head">
                      <h2 className="sub-cate-page">
                        <a    onClick={(e) => {
                                e.preventDefault();
                                router.back();
                              }}
                          ><img src="images/home/left-arrow.svg" alt=""
                        /></a>
                        Plumbing
                      </h2>
                      <div className="your-location-top">
                        <input
                          type="text"
                          placeholder="Search"
                          className="top-srch"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrp">
                    <div className="service-details-banner">
                      <div className="service-details-banner-data">
                        <h1>Expert Plumbing Services</h1>
                        <p>
                          Fast <i className="fa-solid fa-circle"></i> Reliable
                          <i className="fa-solid fa-circle"></i> Verified
                          Contractors
                        </p>
                      </div>
                      <img
                        src="images/service-details/service-banner.svg"
                        alt=""
                      />
                    </div>
                    <div className="service-details-sub-cat">
                      <h3>Choose a Sub-category</h3>
                      <div className="sub-cat-filtr-btns">
                        <button type="button">Repairs</button>
                        <button type="button" className="active">
                          Installations
                        </button>
                        <button type="button">Rough Plumbing</button>
                      </div>
                    </div>
                    <div className="service-details-issues">
                      <h3>What issues are you facing?</h3>
                      <div className="service-issues-in">
                        <div className="service-issues-tab">
                          <img
                            src="images/service-details/service-issue.svg"
                            alt=""
                          />
                          <div className="service-issues-tab-data">
                            <h4>
                              Tap / Faucet Installation
                              <input type="checkbox" className="tab-check" />
                            </h4>
                            <p>
                              Fix or install new taps in kitchen, bathroom, or
                              wash area.
                            </p>
                          </div>
                        </div>
                        <div
                          className="service-issues-content"
                          style={{display: "none"}}
                        >
                          <hr />
                          <p>Select specific issue for Tap / Faucet Repair</p>
                          <ul>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/1.jpg"
                                  alt=""
                                />
                                Leaking Tap <input type="checkbox" />
                              </label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/2.jpg"
                                  alt="" />
                                Tap Handle Broken <input type="checkbox"
                              /></label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/3.jpg"
                                  alt="" />
                                Low Water Pressure <input type="checkbox"
                              /></label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/4.jpg"
                                  alt="" />
                                Tap Replacement <input type="checkbox"
                              /></label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                          </ul>
                          <div className="service-issues-content-problem">
                            <h3>Problem Description</h3>
                            <textarea
                              placeholder="Describe the specific issue..."
                            ></textarea>
                            <h3>Uploaded Image/Video</h3>
                            <label>
                              <img
                                src="images/service-details/upload-icon.svg"
                                alt=""
                              />
                              Drag and drop files here, or click to browse
                              <input type="file" hidden />
                            </label>
                            <div className="service-issues-content-problem-thumbs">
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="service-issues-in">
                        <div className="service-issues-tab">
                          <img
                            src="images/service-details/service-issue.svg"
                            alt=""
                          />
                          <div className="service-issues-tab-data">
                            <h4>
                              Tap / Faucet Installation
                              <input type="checkbox" className="tab-check" />
                            </h4>
                            <p>
                              Fix or install new taps in kitchen, bathroom, or
                              wash area.
                            </p>
                          </div>
                        </div>
                        <div
                          className="service-issues-content"
                          style={{display: "none"}}
                        >
                          <hr />
                          <p>Select specific issue for Tap / Faucet Repair</p>
                          <ul>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/1.jpg"
                                  alt=""
                                />
                                Leaking Tap <input type="checkbox" />
                              </label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/2.jpg"
                                  alt="" />
                                Tap Handle Broken <input type="checkbox"
                              /></label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/3.jpg"
                                  alt="" />
                                Low Water Pressure <input type="checkbox"
                              /></label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/4.jpg"
                                  alt="" />
                                Tap Replacement <input type="checkbox"
                              /></label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                          </ul>
                          <div className="service-issues-content-problem">
                            <h3>Problem Description</h3>
                            <textarea
                              placeholder="Describe the specific issue..."
                            ></textarea>
                            <h3>Uploaded Image/Video</h3>
                            <label>
                              <img
                                src="images/service-details/upload-icon.svg"
                                alt=""
                              />
                              Drag and drop files here, or click to browse
                              <input type="file" hidden />
                            </label>
                            <div className="service-issues-content-problem-thumbs">
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="service-issues-in">
                        <div className="service-issues-tab">
                          <img
                            src="images/service-details/service-issue.svg"
                            alt=""
                          />
                          <div className="service-issues-tab-data">
                            <h4>
                              Tap / Faucet Installation
                              <input type="checkbox" className="tab-check" />
                            </h4>
                            <p>
                              Fix or install new taps in kitchen, bathroom, or
                              wash area.
                            </p>
                          </div>
                        </div>
                        <div
                          className="service-issues-content"
                          style={{display: "none"}}
                        >
                          <hr />
                          <p>Select specific issue for Tap / Faucet Repair</p>
                          <ul>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/1.jpg"
                                  alt=""
                                />
                                Leaking Tap <input type="checkbox" />
                              </label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/2.jpg"
                                  alt="" />
                                Tap Handle Broken <input type="checkbox"
                              /></label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/3.jpg"
                                  alt="" />
                                Low Water Pressure <input type="checkbox"
                              /></label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                            <li>
                              <label
                                ><img
                                  src="images/service-details/issues/4.jpg"
                                  alt="" />
                                Tap Replacement <input type="checkbox"
                              /></label>
                              <div className="hover-data">
                                Upgrade your space with a new sink installation.
                                We handle removal, fitting, and leak-proof
                                connections for a hassle-free experience.
                              </div>
                            </li>
                          </ul>
                          <div className="service-issues-content-problem">
                            <h3>Problem Description</h3>
                            <textarea
                              placeholder="Describe the specific issue..."
                            ></textarea>
                            <h3>Uploaded Image/Video</h3>
                            <label>
                              <img
                                src="images/service-details/upload-icon.svg"
                                alt=""
                              />
                              Drag and drop files here, or click to browse
                              <input type="file" hidden />
                            </label>
                            <div className="service-issues-content-problem-thumbs">
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                              <div
                                className="service-issues-content-problem-thumbs-image"
                              >
                                <button type="button">
                                  <img
                                    src="images/service-details/cancel-icon.svg"
                                    alt=""
                                  />
                                </button>
                                <img
                                  src="images/service-details/thumb-image.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/summary-estimate" className="primary-cta"
                      >Save & Add to Service Cart</Link
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
      
        </div>
  
        <footer>
          <div className="footer-text">
            © 2026 SevaServe • Your privacy is our priority
          </div>
        </footer>
  
      </main>
        </>
    )
}