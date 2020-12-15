import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

// component
import Login from "./views/login/Login";
import FirstPage from "./views/user/FirstPage";
import UserDashboard from "./views/user/Dashboard";
import Gateway from "./views/user/gateway/Gateway";
import LineGraph from "./views/user/graph/LineGraph";
import Sensor from "./views/user/sensor/Sensor";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/sensor">
          <UserDashboard component={<Sensor />} />
        </Route>
        <Route path="/gateway">
          <UserDashboard component={<Gateway />} />
        </Route>
        <Route path="/linegraph">
          <UserDashboard component={<LineGraph />} />
        </Route>
        <Route path="/dashboard">
          <UserDashboard component={<FirstPage />} />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
