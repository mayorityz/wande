import React from "react";
import Header from "../Header";
import HomeFooter from "./Footer";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <div class="container">
          <div class="col-md-12  col-lg-12">
            <div class="blog-post  blog-post--fullwidth  blog-post--page">
              <div class="blog-post__image">
                <img src="img/contact.jpg" alt="Contact" />
              </div>
              <div class="blog-post-wrapper">
                <div class="blog-post__title">
                  <h1>Contact</h1>
                </div>
                <div class="blog-post__content">
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <a href="#">Suspendisse lobortis</a> commodo ullamcorper.
                    Duis pretium convallis odio non varius. Nulla quis lorem
                    metus. Fusce velit magna, ultricies quis elit sit amet,
                    lacinia porttitor magna. Nulla scelerisque, ex quis
                    imperdiet finibus, elit massa dictum arcu, et fermentum orci
                    felis in ipsum. Suspendisse rutrum nec ipsum id feugiat.
                    Nunc eu lacinia turpis. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                    Etiam dapibus cursus justo.
                  </p> */}
                </div>
                <div class="blog-post__contact">
                  <form action="#" method="post">
                    <p class="blog-post__contact-author">
                      <label for="contact-author">Name*</label>
                      <input
                        id="contact-author"
                        type="text"
                        name="contact-author"
                        size="30"
                        aria-required="true"
                        required
                      />
                    </p>
                    <p class="blog-post__contact-email">
                      <label for="contact-email">Email*</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="contact-email"
                        size="30"
                        aria-required="true"
                        required
                      />
                    </p>
                    <p class="blog-post__contact-message">
                      <label for="contact-message">Message</label>
                      <textarea
                        id="contact-message"
                        name="contact-message"
                        cols="45"
                        aria-required="true"
                      ></textarea>
                    </p>
                    <p class="blog-post__contact-submit">
                      <input
                        id="contact-submit"
                        type="submit"
                        name="contact-submit"
                        size="30"
                        value="Send"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <HomeFooter />
    </>
  );
};

export default ContactUs;
