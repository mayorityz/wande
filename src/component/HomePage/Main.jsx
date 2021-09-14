import React, { useState, useEffect } from "react";
import HomeSideBar from "./HomeSiderBar";
import HttpServices from "./../../utils/Httpservices";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let HTTP = new HttpServices("/post/allposts", {});
      let response = await HTTP.get();
      if (response.status) setPosts(response.data);

      setLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <div>Fetching Posts! Please Wait!!</div>;
  }

  return (
    <main>
      <div class="container">
        <div class="col-md-9">
          {posts.map((post) => (
            <div class="blog-post">
              <div class="blog-post-wrapper">
                <div class="blog-post__info  blog-post__info--top">
                  <span>
                    <a href="#">Inspiration</a>
                  </span>
                </div>
                <div class="blog-post__title">
                  <h2>
                    <Link to={post.slug}>{post.title}</Link>
                  </h2>
                </div>
                <div class="blog-post__info">
                  <span>
                    By <a href="#">Yewande</a>
                  </span>
                  <span>{post.createdAt}</span>
                  <span>
                    <a href="#">{post.responses.length} Comments</a>
                  </span>
                </div>
              </div>
              <div class="blog-post__image">
                <a href="single-post.html">
                  <img
                    src="img/img0.jpg"
                    alt="Why Glass Had Been So Popular Till Now?"
                  />
                </a>
              </div>
              <div class="blog-post-wrapper">
                <div class="blog-post__content">
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
                <div class="blog-post__footer">
                  <Link class="blog-post__footer-link" to={post.slug}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <nav class="blog-pagination">
            <ul class="blog-pagination__items">
              <li class="blog-pagination__item  blog-pagination__item--active">
                <a>1</a>
              </li>
              <li class="blog-pagination__item">
                <a href="#">2</a>
              </li>
              <li class="blog-pagination__item">
                <a href="#">Next Page</a>
              </li>
            </ul>
          </nav> */}
        </div>
        <HomeSideBar />
      </div>
    </main>
  );
};

export default MainContent;
