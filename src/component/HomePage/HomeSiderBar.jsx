import React from "react";
import wande from "./../images/wande.jpeg";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-feather";

const HomeSideBar = () => {
  return (
    <div class="col-md-3  sidebar  sidebar--right">
      <div class="sidebar-widget">
        <h3>About Me</h3>
        <div class="sidebar-widget__about-me">
          <div class="sidebar-widget__about-me-image">
            <img src={wande} alt="About Me" />
          </div>
          <p>I'm Yewande Adeleke - A lawyer, writer and content creator.</p>
          <span class="sidebar-widget__about-me-link">
            <Link to="/aboutme">Read More</Link>
          </span>
        </div>
      </div>
      <div class="sidebar-widget">
        <h3>Follow Me</h3>
        <div class="sidebar-widget__follow-me">
          <div class="sidebar-widget__follow-me-icons">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div class="sidebar-widget">
        <h3>Popular Posts</h3>
        <div class="sidebar-widget__popular">
          <div class="sidebar-widget__popular-item">
            <div class="sidebar-widget__popular-item-image">
              <a href="single-post.html">
                <img src="img/sidebar1.jpg" alt="7 Quick Tips For Coffee" />
              </a>
            </div>
            <div class="sidebar-widget__popular-item-info">
              <div class="sidebar-widget__popular-item-date">
                <span>November 15, 2018</span>
              </div>
              <div class="sidebar-widget__popular-item-content">
                <a href="single-post.html">7 Quick Tips For Coffee</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar-widget">
        <h3>Categories</h3>
        <div class="sidebar-widget__tag-cloud">
          <a href="#">Writing</a>
          <a href="#">Parenting</a>
          <a href="#">Self Dev</a>
          <a href="#">History</a>
          <a href="#">Politics</a>
          <a href="#">Women</a>
          <a href="#">Faith</a>
          <a href="#">Music</a>
        </div>
      </div>
      <div class="sidebar-widget">
        <h3>Subscribe</h3>
        <div class="sidebar-widget__subscribe">
          <p>Follow my latest news</p>
          <form action="#">
            <input type="text" placeholder="Your email" />
            <input
              class="sidebar-widget__subscribe-submit"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeSideBar;
