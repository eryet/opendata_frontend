import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

// component
import Login from "./views/login/Login";
import ForgotPassword from "./views/forgotpassword/ForgotPassword";
import FirstPage from "./views/user/FirstPage";
import UserDashboard from "./views/user/Dashboard";
import Gateway from "./views/user/gateway/Gateway";
import LineGraph from "./views/user/graph/LineGraph";
import Sensor from "./views/user/sensor/Sensor";
import OpenGateWay from "./views/opendata/gateway/OpenGateway";
import Group from "./views/user/group/Group";
import Test from "./views/user/test/Test";
import GroupTest from "./views/user/grouptest/GroupTest";
import Profile from "./views/user/profile/Profile";

// theme setup for general component
const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 12,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "Helvetica",
      },
    },
  },
});
const responsivetheme = responsiveFontSizes(theme);

const App = () => {
  return (
    <div>
      <ThemeProvider theme={responsivetheme}>
        <Switch>
          <Route path="/test">
            <UserDashboard component={<Test />} />
          </Route>
          <Route path="/opengateway">
            <UserDashboard component={<OpenGateWay />} />
          </Route>
          <Route path="/sensor">
            <UserDashboard component={<Sensor />} />
          </Route>
          <Route path="/sensor/:id">
            <UserDashboard component={<Sensor />} />
          </Route>
          <Route path="/gateway">
            <UserDashboard component={<Gateway />} />
          </Route>
          <Route path="/gatewaygroup">
            <UserDashboard component={<GroupTest />} />
          </Route>
          <Route path="/gateway/:id">
            <UserDashboard component={<Gateway />} />
          </Route>
          <Route path="/linegraph">
            <UserDashboard component={<LineGraph />} />
          </Route>
          <Route path="/dashboard">
            <UserDashboard component={<FirstPage />} />
          </Route>
          <Route path="/profile">
            <UserDashboard component={<Profile />} />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default App;
