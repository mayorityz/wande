import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import HttpServices from "./../../../utils/Httpservices";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState("");

  const submitPost = async (e) => {
    e.preventDefault();
    let service = new HttpServices("/post/createpost", {
      title,
      category,
      content,
    });

    let response = await service.post();
    if (response.status) setNotification("Post Created Successfully!");
    else setNotification("An Error Occured! Please Try Again!");
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3 className="text-center">Create A New Post.</h3>
          <hr />
          <form action="" onSubmit={submitPost}>
            <div className="mb-3">
              <label htmlFor="">Enter Post Title :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Post Title"
                value={title}
                onChange={({ target: { value } }) => setTitle(value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Select Post Category :</label>
              <select
                className="form-control"
                required
                value={category}
                onChange={({ target: { value } }) => setCategory(value)}
              >
                <option value="">-- Select A Category --</option>
                <option value="writing">-- Writing --</option>
                <option value="parenting">-- Parenting --</option>
                <option value="self development">-- Self Development --</option>
                <option value="history">-- History --</option>
                <option value="politics">-- Politics --</option>
                <option value="women">-- Women --</option>
                <option value="faith">-- Faith --</option>
                <option value="music">-- Music --</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="">Enter Content :</label>
              <SunEditor
                height={200}
                placeholder="Start Typing Your Content ..."
                onChange={(e) => setContent(e)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Post Image</label>
              <input type="file" className="form-control" />
            </div>
            {notification && (
              <p style={{ textAlign: "center" }}>{notification}</p>
            )}
            <button className="btn btn-success">Submit Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
