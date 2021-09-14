import "./App.css";
import Landing from "./component/Landing";
import { Switch, Route } from "react-router-dom";
import AdminHome from "./component/Admin/Index";

function App() {
  return (
    <Switch>
      <Route path="/admin">
        {/* <AdminHome /> */}
        <h4>ok!</h4>
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  );
}

export default App;
