import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="header  container">
      <div class="row  header__logo">
        <div class="col-md-3">
          <div class="social-icons">
            <a href="#">
              <FiFacebook />
            </a>
            <a href="#">
              <FiTwitter />
            </a>
            <a href="#">
              <FiInstagram />
            </a>
          </div>
        </div>
        <div class="col-md-6  logo">
          <h1>
            <a class="logo__link" href="index.html">
              InsideSparkles
            </a>
          </h1>
          <div class="logo__description">... its all about expression</div>
        </div>
        <div class="col-md-3  header__right">
          <div class="top-icons">
            <div class="top-icons__search">
              {/* <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use>
            </svg> */}
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav__item">
            <a href="#">Self Dev.</a>
          </li>
          <li class="nav__item">
            <a href="#">Parenting</a>
          </li>
          <li class="nav__item">
            <a href="#">Women</a>
          </li>
          <li class="nav__item">
            <a href="#">History</a>
          </li>
          <li class="nav__item">
            <a href="#">Faith</a>
          </li>
          <li class="nav__item">
            <Link to="aboutme">About Me</Link>
          </li>
          <li class="nav__item">
            <Link to="/contactme">Contact</Link>
          </li>
        </ul>
      </nav>
      <div class="nav-toggle">
        {/* <svg class="nav-toggle__icon">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-toggle"></use>
      </svg> */}
      </div>
    </header>
  );
};

export default Header;
