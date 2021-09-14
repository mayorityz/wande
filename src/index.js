import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./component/Landing";
import AdminHome from "./component/Admin/Index";
import Post from "./component/HomePage/Post";
import AboutMe from "./component/HomePage/Aboutme";
import ContactUs from "./component/HomePage/ContactUs";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminHome />
        </Route>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/contactme">
          <ContactUs />
        </Route>
        <Route path="/:slug">
          <Post />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// ! category
// ! replies
// !
reportWebVitals();
