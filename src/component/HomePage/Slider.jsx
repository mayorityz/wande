import React from "react";

const Slider = () => {
  return (
    <section className="container  top-slider">
      <div className="col-md-12">
        <div className="bxslider">
          <div>
            <div
              className="featured-image"
              style={{ backgroundImage: "url('img/img1.jpg')" }}
            >
              <div className="featured-image__bg"></div>
              <div className="featured-image__content">
                <span className="featured-image__content-category">
                  <a href="#">Pinned Post.</a>
                </span>
                <span className="featured-image__content-title">
                  <a href="single-post.html">Pinned Post!</a>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse lobortis commodo ullamcorper.
                </p>
                <span className="featured-image__content-link">
                  <a href="#">Read More</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
