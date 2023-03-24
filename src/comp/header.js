

import React from 'react';
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
const Header = () => {
 return (
  <>

  {/* Start Header */}

  <div className="header" id="header">
    <div className="container">
      <NavLink  className="logo" to="/">
        Mohamed
      </NavLink>
      <ul className="main-nav">
        <li>
          <NavLink to="/articles">Articles</NavLink>
        </li>
        <li>
          <NavLink to="/Gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/Features">Features</NavLink>
        </li>
        <li>
          <a href="#">Other Links</a>
          {/* Start Megamenu */}
          <div className="mega-menu">
            <div className="image">
              <img src="imgs/megamenu.png" alt="" />
            </div>
            <ul className="links">
              <li>
                <NavLink to="/Testimonials">
                  <i className="far fa-comments fa-fw" /> Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink  to="/Team">
                  <i className="far fa-user fa-fw" /> Team Members
                </NavLink>
              </li>
              <li>
                <NavLink to="/Services">
                  <i className="far fa-building fa-fw" /> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/Skills">
                  <i className="far fa-check-circle fa-fw" /> Our Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/Work">
                  <i className="far fa-clipboard fa-fw" /> How It Works
                </NavLink>
              </li>
            </ul>
            <ul className="links">
              <li>
                <NavLink  to="/Events">
                  <i className="far fa-calendar-alt fa-fw" /> Events
                </NavLink>
              </li>
              <li>
                <NavLink  to="/Pricing">
                  <i className="fas fa-server fa-fw" /> Pricing Plans
                </NavLink>
              </li>
              <li>
                <NavLink  to="/Videos">
                  <i className="far fa-play-circle fa-fw" /> Top Videos
                </NavLink>
              </li>
              <li>
                <NavLink  to="/Stats">
                  <i className="far fa-chart-bar fa-fw" /> Stats
                </NavLink>
              </li>
              <li>
                <NavLink  to="/Discount">
                  <i className="fas fa-percent fa-fw" /> Request A Discount
                </NavLink>
              </li>
            </ul>
          </div>
          {/* End Megamenu */}
        </li>
      </ul>
    </div>
  </div>

  {/* End Header */}

</>

 );
}

export default Header;
