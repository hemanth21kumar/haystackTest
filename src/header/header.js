import React, { useState } from "react";
import "./header.scss";
import logo from "../assets/img/logo.svg";
import cartIcon from "../assets/img/cart-icon.svg"
import IMIcon from "../assets/img/messages.png"
import alertIcon from "../assets/img/notification-bing.png"
import avatar from "../assets/img/avatar.png"
import menu from "../assets/img/menu.png"

const Header = () => {

  const [toggle, setToggle] = useState(false);

  const mobileMenu = () => {
    setToggle(!toggle)
  }
  
  console.log('mobileMenu', toggle)
  return (
    <section className="header-container">
      <div className="logo">
        <img alt="Haystackers" src={logo} />
      </div>
      <div className="content-section">
        <nav className={toggle === true ? 'active': ''}>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
          </ul>
        </nav>
        <div className="profile-section">
          <div className="profile-section-wrapper">
            <button>List Your Equipment</button>
            <div className="icon-wrap"><span>3</span><img src={cartIcon} /></div>
            <div className="icon-wrap"><img src={IMIcon} /></div>
            <div className="icon-wrap"><span>1</span><img src={alertIcon} /></div>
            <div className="avatar"><img src={avatar} /></div>
            <div className="mobile-menu" onClick={mobileMenu}><img src={menu} /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
