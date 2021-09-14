import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HttpServices from "../../utils/Httpservices";
import Header from "./../Header";
import HomeFooter from "./Footer";
import HomeSideBar from "./HomeSiderBar";

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      let HTTP = new HttpServices("/post/readpost", { slug });
      let response = await HTTP.post();
      if (response.status) setPost(response.data[0]);
      setLoading(false);
    })();
  }, [slug]);

  if (isLoading) {
    return <div>Fetching Post!!!</div>;
  }

  if (!post) {
    return <div>Post Not Found!!!</div>;
  }

  return (
    <>
      <Header />
      <main>
        <div class="container">
          <div class="col-md-9">
            <div class="blog-post">
              <div class="blog-post-wrapper">
                <div class="blog-post__info  blog-post__info--top">
                  <span>
                    <a href="#">{post.category}</a>
                  </span>
                </div>
                <div class="blog-post__title">
                  <h1 className="text-uppercase">
                    <a href="#">{post.title}.</a>
                  </h1>
                </div>
                <div class="blog-post__info">
                  <span>
                    By <a href="#">Westa</a>
                  </span>
                  <span>{post.createdAt}</span>
                  <span>
                    <a href="#">{post.responses.length} Comments</a>
                  </span>
                </div>
              </div>
              <div class="blog-post__image">
                <a href="single-post.html">
                  <img src="img/img1.jpg" alt="Fall In Love With Cat" />
                </a>
              </div>
              <div class="blog-post-wrapper">
                <div class="blog-post__content">
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
                <div class="blog-post__footer">
                  {/* <div class="blog-post__footer-tags">
                    <h3>Tags:</h3>
                    <div class="blog-post__footer-tags-list">
                      <a href="#">Arts</a>
                      <a href="#">Creative</a>
                    </div>
                  </div> */}
                  {/* <div class="blog-post__footer-social">
                    <span>Share:</span>
                    <div class="blog-post__footer-social-icons">
                      <a href="#">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-facebook"></use>
                      </svg>
                    </a>
                    <a href="#">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter"></use>
                      </svg>
                    </a>
                    <a href="#">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-google"></use>
                      </svg>
                    </a>
                    <a href="#">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pinterest"></use>
                      </svg>
                    </a>
                    </div>
                  </div> */}
                </div>
                <div class="blog-post__author">
                  <div class="blog-post__author-avatar">
                    <img src="img/author.jpg" alt="Author" />
                  </div>
                  <div class="blog-post__author-info">
                    <h5>Written by Daniel Anri</h5>
                    <p>
                      Massa est vehicula mauris dignissim vulputate turpis
                      massa, eget sociis nonummy tristique at suscipit quis
                      natoque dolor penatibus praesent odio nisi erat. Consequat
                      eget cubilia. Mi elementum augue. Nisi sociis.
                    </p>
                    <div class="blog-post__author-info-social">
                      {/* <a href="#">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-facebook"></use>
                      </svg>
                    </a>
                    <a href="#">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter"></use>
                      </svg>
                    </a>
                    <a href="#">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-google"></use>
                      </svg>
                    </a>
                    <a href="#">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pinterest"></use>
                      </svg>
                    </a>
                    <a href="#">
                      <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-instagram"></use>
                      </svg>
                    </a> */}
                    </div>
                  </div>
                </div>
                <div class="blog-post__nav">
                  <a class="blog-post__nav-previous" href="#">
                    <span class="blog-post__nav-previous-link">
                      Previous Post
                    </span>
                    <span>Why Glass Had Been So Popular Till Now?</span>
                  </a>
                  <a class="blog-post__nav-next" href="#">
                    <span class="blog-post__nav-next-link">Next Post</span>
                    <span>All You Need To Know About Forest</span>
                  </a>
                </div>
                <div class="blog-post__related">
                  <div class="blog-post__related-item">
                    <a href="#">
                      <img
                        src="img/img0.jpg"
                        alt="Why Glass Had Been So Popular Till Now?"
                      />
                      <h6>Why Glass Had Been So Popular Till Now?</h6>
                    </a>
                    <span>November 16, 2018</span>
                  </div>
                  <div class="blog-post__related-item">
                    <a href="#">
                      <img
                        src="img/img2.jpg"
                        alt="All You Need To Know About Forest"
                      />
                      <h6>All You Need To Know About Forest</h6>
                    </a>
                    <span>November 10, 2018</span>
                  </div>
                  <div class="blog-post__related-item">
                    <a href="#">
                      <img
                        src="img/img3.jpg"
                        alt="Skills That You Can Learn From Book"
                      />
                      <h6>Skills That You Can Learn From Book</h6>
                    </a>
                    <span>November 7, 2018</span>
                  </div>
                </div>
                <div class="blog-post__comments">
                  <h5>3 Comments</h5>
                  <ul class="blog-post__comments-list">
                    <li class="blog-post__comments-item">
                      <div class="blog-post__comments-item-body">
                        <div class="blog-post__comments-item-avatar">
                          <img src="img/comment1.jpg" alt="Comment Author" />
                        </div>
                        <div class="blog-post__comments-item-right">
                          <div class="blog-post__comments-item-reply">
                            <a href="#">Reply</a>
                          </div>
                          <div class="blog-post__comments-item-info">
                            <div class="blog-post__comments-item-info-author">
                              <span>
                                <a href="#">Matt Kian</a>
                              </span>
                            </div>
                            <div class="blog-post__comments-item-info-date">
                              <span>
                                <a href="#">November 25, 2018 at 2:24 pm</a>
                              </span>
                            </div>
                          </div>
                          <div class="blog-post__comments-item-post">
                            <p>
                              Dignissim pharetra consequat condimentum
                              scelerisque. Vestibulum sagittis scelerisque
                              montes enim Cursus dui lectus cras mattis Laoreet
                              aliquam varius ut adipiscing interdum lacus risus
                              mattis urna semper cras hendrerit, morbi nonummy.
                            </p>
                          </div>
                        </div>
                      </div>
                      <ul class="blog-post__comments-children">
                        <li class="blog-post__comments-item">
                          <div class="blog-post__comments-item-body">
                            <div class="blog-post__comments-item-avatar">
                              <img
                                src="img/comment2.jpg"
                                alt="Comment Author"
                              />
                            </div>
                            <div class="blog-post__comments-item-right">
                              <div class="blog-post__comments-item-reply">
                                <a href="#">Reply</a>
                              </div>
                              <div class="blog-post__comments-item-info">
                                <div class="blog-post__comments-item-info-author">
                                  <span>
                                    <a href="#">Olyvia Becca</a>
                                  </span>
                                </div>
                                <div class="blog-post__comments-item-info-date">
                                  <span>
                                    <a href="#">
                                      September 11, 2018 at 5:35 pm
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div class="blog-post__comments-item-post">
                                <p>
                                  Aliquet arcu cubilia dignissim natoque posuere
                                  vestibulum malesuada integer Ridiculus
                                  suscipit justo In tempus penatibus diam arcu
                                  dictumst felis scelerisque nunc blandit
                                  cubilia condimentum class justo natoque
                                  volutpat nam.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="blog-post__comments-item">
                      <div class="blog-post__comments-item-body">
                        <div class="blog-post__comments-item-avatar">
                          <img src="img/comment3.jpg" alt="Comment Author" />
                        </div>
                        <div class="blog-post__comments-item-right">
                          <div class="blog-post__comments-item-reply">
                            <a href="#">Reply</a>
                          </div>
                          <div class="blog-post__comments-item-info">
                            <div class="blog-post__comments-item-info-author">
                              <span>
                                <a href="#">Jess Lavone</a>
                              </span>
                            </div>
                            <div class="blog-post__comments-item-info-date">
                              <span>
                                <a href="#">October, 2018 at 9:48 pm</a>
                              </span>
                            </div>
                          </div>
                          <div class="blog-post__comments-item-post">
                            <p>
                              Dapibus ullamcorper ullamcorper class potenti sed,
                              rhoncus arcu. Ligula iaculis aliquet, interdum
                              luctus porttitor lacinia eu etiam. Pede elementum
                              nisl dui facilisis at, metus facilisi, class
                              consectetuer. Feugiat malesuada dis.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="blog-post__comments-respond">
                    <h5>Leave a Comment</h5>
                    <form
                      action="http://feelman.info/html/westa/single-post.html"
                      method="post"
                    >
                      <p class="blog-post__comments-respond-comment">
                        <label for="comment">Comment</label>
                        <textarea
                          id="comment"
                          name="comment"
                          cols="45"
                          aria-required="true"
                        ></textarea>
                      </p>
                      <p class="blog-post__comments-respond-author">
                        <label for="author">Name*</label>
                        <input
                          id="author"
                          type="text"
                          name="author"
                          size="30"
                          aria-required="true"
                          required
                        />
                      </p>
                      <p class="blog-post__comments-respond-email">
                        <label for="email-form">Email*</label>
                        <input
                          id="email-form"
                          type="email"
                          name="email-form"
                          size="30"
                          aria-required="true"
                          required
                        />
                      </p>
                      <p class="blog-post__comments-respond-submit">
                        <input
                          id="submit"
                          type="submit"
                          name="submit"
                          size="30"
                          value="Post Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* home side bar!!! */}
          {/* <HomeSideBar /> */}
          <HomeSideBar />
        </div>
      </main>
      <HomeFooter />
    </>
  );
};

export default Post;
