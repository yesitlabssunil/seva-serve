"use client";

import React from 'react'
import SidebarMenu from '../sidebar/SidebarMenu';

const Header = () => {
  return (
    <div>
        <header className="header">
  <div className="left-section">
    <a href="index.html"><img src="/images/header/logo.svg" alt="Logo" className="logo" /></a>
    <div className="dropdown location">
      <div className="dropdown-toggle location-toggle" data-bs-toggle="modal" data-bs-target="#your-location-popup">
        <img src="/images/header/location-icon.svg" alt="location" className="loca" />
        <span>123, Street, Anywhere, 11001</span>
        <img src="/images/header/down-icon.svg" alt="down-icon" className="down-icon" />
      </div>


    </div>
  </div>
  <div className="right-section">
    <div className="search-bar" type="button" data-bs-toggle="offcanvas" data-bs-target="#agent-msg-offcanvasRight"
      aria-controls="offcanvasRight">
      <img src="/images/header/search-left-icon.svg" alt="Search" className="search-icon" />
      <input type="text" placeholder="Explain the issue you are facing?" />
    </div>
    <div className="offcanvas offcanvas-end agent-off-canvas-wrp" tabIndex="-1" id="agent-msg-offcanvasRight"
      aria-labelledby="offcanvasRightLabel">
      <div className="messages-inbox-in">
        <div className="offcanvas-header agent-header-tab">
          <button type="button" className="btn-close my-cross" data-bs-dismiss="offcanvas" aria-label="Close">
            <img src="/images/off-canvas/cross-icon-off-canvas.svg" alt="" />
          </button>
          <div className="agent-header">
            <img src="/images/off-canvas/agent-profile-img.svg" alt="" />
            <div className="seve-agt-avl">
              <p className="user-seva-text">SevaServe Agent</p>
              <p className="available"><span></span>Available</p>
            </div>
          </div>
          <h5 className="agent-call-icon" id="offcanvasRightLabel">
            <img src="/images/off-canvas/agent-call-icon.svg" alt="" />
          </h5>
        </div>
        <div className="offcanvas-body agent-body">
          <h2 className="">How can I help you today?</h2>
          <div className="agent-service">
            <button type="submit">
              <img src="/images/home/top-right-plumbing.svg" alt="" />
              Plumbing
            </button>
            <button type="submit">
              <img src="/images/home/top-right-plumbing.svg" alt="" />
              Cleaning
            </button>
            <button type="submit">
              <img src="/images/home/top-right-plumbing.svg" alt="" />
              Furniture Work
            </button>
            <button type="submit">
              <img src="/images/home/top-right-plumbing.svg" alt="" />
              Laundry
            </button>
            <button>
              <img src="/images/home/top-right-plumbing.svg" alt="" />
              Painting
            </button>
          </div>
          <div className="water-leakage">
            <div className="ineer-srv">
              <span><img src="/images/home/service-icon.svg" alt="" /></span>
              <p>What service do I need for a water leakage?</p>
            </div>
            <div className="ineer-srv">
              <span><img src="/images/home/service-icon.svg" alt="" /></span>
              <p>What service do I need for a water leakage?</p>
            </div>
            <div className="ineer-srv">
              <span><img src="/images/home/service-icon.svg" alt="" /></span>
              <p>What service do I need for a water leakage?</p>
            </div>
            <div className="ineer-srv">
              <span><img src="/images/home/service-icon.svg" alt="" /></span>
              <p>What service do I need for a water leakage?</p>
            </div>
            <div className="ineer-srv">
              <span><img src="/images/home/service-icon.svg" alt="" /></span>
              <p>What service do I need for a water leakage?</p>
            </div>
          </div>
          <div className="messages-inbox-grp">
            <div className="right-side-wrp">
              <div className="right-side">
                <div className="chat">
                  What service do I need for a water leakage?
                </div>
              </div>
              <span><img src="/images/home/msg-edit-icon.svg" alt="" /></span>
            </div>
            <div className="msg-img-wrper">
              <div className="text-btn-inner">
                <div className="left-side left">
                  <div className="pro-stat">

                  </div>
                  <div className="chat">
                    It looks like you're facing a water leakage issue. To
                    help you better, I need a bit more info.
                  </div>
                </div>
                <div className="agent-service-left">
                  <button type="submit">
                    <img src="/images/home/top-right-plumbing.svg" alt="" />
                    Bathroom Leakage
                  </button>
                  <button type="submit">
                    <img src="/images/home/top-right-plumbing.svg" alt="" />
                    Tap Leakage
                  </button>
                  <button type="submit">
                    <img src="/images/home/top-right-plumbing.svg" alt="" />
                    Toilet Leakage
                  </button>
                  <button type="submit">
                    <img src="/images/home/top-right-plumbing.svg" alt="" />
                    Wall Seepage
                  </button>
                  <button>
                    <img src="/images/home/top-right-plumbing.svg" alt="" />
                    Pipe Joint Leakage
                  </button>
                </div>
              </div>
              <div className="ai-agent-picture">
                <img src="/images/home/chat-ai-agent-picture.svg" alt="" />
              </div>
            </div>
            <div className="right-side-wrp">
              <div className="right-side">
                <div className="chat">Bathroom Leakage</div>
              </div>
              <span><img src="/images/home/msg-edit-icon.svg" alt="" /></span>
            </div>
            <div className="msg-img-wrper">
              <div className="text-btn-inner">
                <div className="left-side left">
                  <div className="pro-stat">

                  </div>
                  <div className="chat">
                    Great! Describe the issue briefly so we can understand
                    better.
                  </div>
                </div>
              </div>

              <div className="ai-agent-picture">
                <img src="/images/home/chat-ai-agent-picture.svg" alt="" />
              </div>
            </div>
            <div className="right-side-wrp">
              <div className="right-side">
                <div className="chat">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </div>
              </div>
              <span><img src="/images/home/msg-edit-icon.svg" alt="" /></span>
            </div>
            <div className="msg-img-wrper">
              <div className="text-btn-inner">
                <div className="left-side left">
                  <div className="pro-stat">

                  </div>
                  <div className="chat">
                    Thanks! Your description is noted.<br /><br />

                    Do you want to upload an image or video?
                  </div>
                </div>
              </div>

              <div className="ai-agent-picture">
                <img src="/images/home/chat-ai-agent-picture.svg" alt="" />
              </div>
            </div>
            <div className="right-side-wrp">
              <div className="right-side img-inner">
                <div className="chat">
                  <img src="/images/home/img-agent-pic.svg" alt="" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </div>
              </div>
              <span><img src="/images/home/msg-edit-icon.svg" alt="" /></span>
            </div>
            <div className="msg-img-wrper">
              <div className="text-btn-inner">
                <div className="left-side left">
                  <div className="pro-stat">

                  </div>
                  <div className="chat">
                    I’ve analyzed the image. It seems related to Pipe Joint
                    Leakage.  <br /><br />

                    Do you want to review all entered details?<br />
                    <a href="issue-details.html">View Details</a>
                  </div>
                </div>
              </div>

              <div className="ai-agent-picture">
                <img src="/images/home/chat-ai-agent-picture.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="send-msg-wrp">
          <form action="">
            <div className="messages-type-send-in">
              <input type="text" placeholder="Tell SevaServe your problem" className="" />
              <label>
                <img src="/images/home/attach-file.svg" alt="" />
                <input type="file" hidden="" />
              </label>
              <button type="submit" className="">
                <img src="/images/home/msg-send.svg" alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="icon cart-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightCart"
      aria-controls="offcanvasRight" style={{cursor: "pointer" }}>
      <img src="/images/header/vector-img.svg" alt="Logo" className="logo" />
    </div>

    <div className="offcanvas offcanvas-end cart-unfill" tabIndex="-1" id="offcanvasRightCart"
      aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close my-cross" data-bs-dismiss="offcanvas" aria-label="Close">
          <img src="/images/off-canvas/cross-icon-off-canvas.svg" alt="" />
        </button>
        <h5 id="offcanvasRightLabel">Cart</h5>
      </div>
      <div className="offcanvas-body empaty-cart">
        <div className="cart-emp-wrp">
          <div className="cart-color-img">
            <img src="/images/modal/cart-color-icon.svg" alt="" />
          </div>
          <p className="emt">Empty Cart</p>
        </div>
      </div>
    </div>


    <div className="icon bell-icon position-relative dropdown">
      <img src="/images/header/bell-icon.svg" alt="Logo" className="logo dropdown-toggle" type="button"
        data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
        style={{backgroundColor: "#991318"}}>
        
        <span className="visually-hidden">unread messages</span>
      </span>
      <div className="dropdown-menu dropdown-menu-end">
        <div className="notification-list">
          <h1>Notifications</h1>
          <div className="top-fltr">
            <button type="button" className="active">All</button>
            <button type="button">Offers</button>
            <button type="button">Alerts</button>
          </div>
          <div className="notification-in">
            <div className="notification-item">
              <div className="notification-data">
                <h3>Confirm & Pay Remaining Amount</h3>
                <p>$149 is pending for AC Repair – Cooling Issue.</p>
              </div>
              <span>Just Now</span>
            </div>
            <div className="notification-item">
              <div className="notification-data">
                <h3>Contractor suggested a new time</h3>
                <p>
                  Your contractor proposed a new service time for Plumbing –
                  Sink Installation.
                </p>
              </div>
              <span>Just Now</span>
            </div>
            <div className="notification-item">
              <div className="notification-data">
                <h3>Your booking is confirmed</h3>
                <p>
                  Your plumbing service is scheduled for 20 Nov, 11:30 AM.
                </p>
              </div>
              <span>1h ago</span>
            </div>
            <div className="notification-item">
              <div className="notification-data">
                <h3>Flat 20% Off <button type="button" className="code-copy">HOME20</button></h3>
                <p>
                  Avail discount on all home repair services. Valid till
                  tonight.
                </p>
              </div>
              <span>5h ago</span>
            </div>
            <div className="notification-item">
              <div className="notification-data">
                <h3>Safety Alert</h3>
                <p>
                  Please verify the technician identity before allowing
                  entry.
                </p>
              </div>
              <span>Yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="icon" data-bs-target="#SevaServeWorkpopup" data-bs-toggle="modal">
      <img src="/images/header/i-icon.svg" alt="Logo" className="logo" />
    </div>

    <div className="profile login">
      <a href="#login-screen-1" data-bs-toggle="modal" className="primary-cta">Log in <img
          src="/images/header/top-right-img.svg" alt="Profile" /></a>
    </div>
    <button className="menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#home-end-offcanvasRight"
      aria-controls="offcanvasRight">
      <span className="frist">Menu</span>
      <span className="sec"><img src="/images/header/hamburger.svg" alt="Profile" /></span>
    </button>

    <SidebarMenu />
  </div>
  <div className="icon-header">
    <i id="bar-cross" className="fa-solid fa-bars"></i>
  </div>
</header>
    </div>
  )
}

export default Header