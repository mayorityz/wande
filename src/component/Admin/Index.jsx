import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import "./Style/style.css";
import Posts from "./Pages/Posts";
import CreatePost from "./Pages/CreatePost";
import Dasboard from "./Pages/Dashboard";

const AdminHome = () => {
  const { path } = useRouteMatch();
  return (
    <div className="admin_area">
      <Sidebar />
      <section className="admin_main_content">
        <Switch>
          <Route path={`${path}/create-post`}>
            <CreatePost />
          </Route>
          <Route path={`${path}/posts`}>
            <Posts />
          </Route>
          <Route path={path}>
            <Dasboard />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default AdminHome;
