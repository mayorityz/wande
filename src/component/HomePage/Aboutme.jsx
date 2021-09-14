import React from "react";
import wande from "./../images/wande.jpeg";
import Header from "./../Header";
import HomeFooter from "./Footer";

const AboutMe = () => {
  return (
    <>
      <Header />
      <main>
        <div class="container">
          <div class="col-md-12">
            <div class="blog-post  blog-post--fullwidth  blog-post--page">
              <div class="blog-post__image">
                <img src={wande} alt="About Me" />
              </div>
              <div class="blog-post-wrapper">
                <div class="blog-post__title">
                  <h1>About Me</h1>
                </div>
                <div class="blog-post__content">
                  <p>
                    I'm Yewande Adeleke - A lawyer, writer and content creator.{" "}
                  </p>

                  <p>
                    I am passionate about creating great content. When I am not
                    actively blogging, I am netflix-ing and chilling or thinking
                    about my next big move! I am a great optimistic,
                    loudly-quiet and an irredeemable couch potatoe. An early
                    morning coffee is my greatest motivator. I write a lot on
                    Medium and my articles have been featured on Bella naija,
                    Shara reporters and dotCIVCs amongst others.. I also have an
                    unquenchable passion for teaching sharing knowledge.
                  </p>
                  <p>
                    My favourite motto is this: Live the life you love, love the
                    life you live.
                  </p>
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

export default AboutMe;
