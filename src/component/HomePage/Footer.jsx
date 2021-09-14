import React from "react";

const HomeFooter = () => {
  return (
    <footer class="page-footer">
      <div class="container  page-footer__top">
        <div class="col-sm-5  col-md-5">
          <div class="page-footer__top-about">
            <h4>InsideSparkles.</h4>
            <p>InsideSparkles is a daily lifestyle blog for everyone.</p>
            <p>We seek to empower and educate in the best way that we can.</p>
            <p>
              We cover trendy topics and write stories that you would love to
              read.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:insidesparkles@gmail.com">
                insidesparkles@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div class="col-sm-3  col-md-3">
          <h4>Categories</h4>
          <nav class="page-footer__nav">
            <ul class="page-footer__nav-items">
              <li class="page-footer__nav-item">
                <a href="#">Writing</a>
              </li>
              <li class="page-footer__nav-item">
                <a href="#">Parenting</a>
              </li>
              <li class="page-footer__nav-item">
                <a href="#">History</a>
              </li>
              <li class="page-footer__nav-item">
                <a href="#">Politics</a>
              </li>
              <li class="page-footer__nav-item">
                <a href="#">Faith</a>
              </li>
              <li class="page-footer__nav-item">
                <a href="#">Music</a>
              </li>
              <li class="page-footer__nav-item">
                <a href="#">Women</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-sm-4  col-md-4">
          <h4>Recent Posts</h4>
          <div class="page-footer__recent-post">
            <div class="page-footer__recent-post-info">
              <div class="page-footer__recent-post-content">
                <a href="single-post.html">
                  Why Glass Had Been So Popular Till Now?
                </a>
              </div>
              <div class="page-footer__recent-post-date">
                <span>November 16, 2018</span>
              </div>
            </div>
          </div>
          <div class="page-footer__recent-post">
            <div class="page-footer__recent-post-info">
              <div class="page-footer__recent-post-content">
                <a href="single-post.html">Fall In Love With Cat</a>
              </div>
              <div class="page-footer__recent-post-date">
                <span>November 14, 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container  page-footer__bottom">
        <div class="col-sm-8  col-md-8  page-footer__bottom-copyright">
          <p>
            2021 © InsideSparkles. Developed by{" "}
            <a href="https://www.mayorityz.surge.sh">mayorityz.</a>
          </p>
        </div>
        <div class="col-sm-4  col-md-4  page-footer__bottom-social">
          <a href="#">
            <svg>
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#icon-facebook"
              ></use>
            </svg>
          </a>
          <a href="#">
            <svg>
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#icon-twitter"
              ></use>
            </svg>
          </a>
          <a href="#">
            <svg>
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#icon-google"
              ></use>
            </svg>
          </a>
          <a href="#">
            <svg>
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#icon-pinterest"
              ></use>
            </svg>
          </a>
          <a href="#">
            <svg>
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#icon-instagram"
              ></use>
            </svg>
          </a>
          <a href="#">
            <svg>
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#icon-flickr"
              ></use>
            </svg>
          </a>
          <a href="#">
            <svg>
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#icon-youtube"
              ></use>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
