import React from 'react'

const SidebarMenu = () => {
  return (
    <div className="offcanvas offcanvas-end custom-home-right" tabIndex="-1" id="home-end-offcanvasRight"
    aria-labelledby="offcanvasRightLabel-logo">
    <div className="offcanvas-header">
      <h5 id="offcanvasRightLabel-logo">
        <img src="/images/header/logo.svg" alt="123" />
      </h5>
      <button type="button" className="btn-close my-cross" data-bs-dismiss="offcanvas" aria-label="Close">
        <img src="/images/off-canvas/cross-icon-off-canvas.svg" alt="" />
      </button>
    </div>
    <div className="offcanvas-body custom-home-list">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="my-booking.html">My Bookings</a></li>
        <li><a href="my-quotes.html">My Quotes</a></li>
        <li><a href="my-payments.html">My Payments</a></li>
        <li><a href="subscription.html">Subscription</a></li>
        <li><a href="saved-address.html">Saved Address</a></li>
        <li><a href="#logout-popup" data-bs-toggle="modal">Logout</a></li>
      </ul>
    </div>
  </div>
  )
}

export default SidebarMenu