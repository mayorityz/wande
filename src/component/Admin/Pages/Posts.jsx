import React, { useState, useEffect } from "react";
import { Clock, Edit2, FileText, Trash, Underline } from "react-feather";
import { useRouteMatch, Link } from "react-router-dom";
import HttpServices from "./../../../utils/Httpservices";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    
    (async () => {
      let Call = new HttpServices("/post/allposts");
      let response = await Call.get();
      if(response.status) setPosts(response.data);
      setLoading(false);
    })();
  }, []);

  if(isLoading){
    return <div className="container">
      Fetching Data
    </div>
  }
  return (
    <div className="container">
      <h3>Existing Posts</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Link
            to={`/admin/create-post`}
            // style={{ height: 40, lineHeight: 40 }}
            className="btn btn-success btn-xs"
          >
            Create New Post
          </Link>
          <br />
          <br />

          {
            !posts.length && <div>No Posts Found!</div>
          }
          {
            posts.length &&           <table
            className="table table-stripped table-hover table-sm table-borderless"
            id="post_table"
          >
            <thead>
              <tr>
                <th>S/N</th>
                <th>
                  <FileText size={12} /> Title
                </th>
                <th>
                  <Clock size={12} /> Date Posted
                </th>
                <th>
                  <Edit2 size={12} /> Action
                </th>
                <th>
                  <Trash size={12} /> Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map((post, id)=>(
                  <tr>
                <td>{id+1}</td>
                <td>
                  <span className="inner_text">
                    {post.title}
                  </span>
                </td>
                <td>
                  <span className="inner_text">{post.createdAt}</span>
                </td>
                <td>
                  <button className="btn btn-xs btn-warning">edit</button>
                </td>
                <td>
                  <button className="btn btn-xs btn-danger">delete</button>
                </td>
              </tr>
                ))
              }
            </tbody>
          </table>
          }
        </div>
      </div>
    </div>
  );
};

export default Posts;
