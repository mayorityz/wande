import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Home, Edit3 } from "react-feather";

const Sidebar = () => {
  const { url } = useRouteMatch();
  return (
    <div className="__sidebar">
      <div>Logo</div>
      <ul>
        <li>
          <Link to={url}>
            <Home size={12} /> Home
          </Link>
        </li>
        <li>
          <Link to={`${url}/posts`}>
            <Edit3 size={12} /> My Posts
          </Link>
        </li>
        <li>
          <a href="#">
            Replies <span className="notification">3</span>{" "}
          </a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
