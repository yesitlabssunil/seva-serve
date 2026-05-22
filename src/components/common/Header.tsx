"use client";

import React from 'react'
import SidebarMenu from '../sidebar/SidebarMenu';
import Link from "next/link";
import NotificationDropdown from './NotificationDropdown';
import SevaServeAgentPanel from './SevaServeAgentPanel';
import Cart from './Cart';

const Header = () => {
  return (
    <div>
        <header className="header">
  <div className="left-section">
    <Link href="/"><img src="/images/header/logo.svg" alt="Logo" className="logo" /></Link>
    
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

    <SevaServeAgentPanel />

<Cart />
    

<NotificationDropdown />

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