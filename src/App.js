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
import EditProfile from "./views/user/profile/EditProfile";
import GatewayDetail from "./views/user/gateway/GatewayDetail";
import EditGatewayDetail from "./views/user/gateway/EditGatewayDetail";
import Announcement from "./views/announcement/Announcement";
import AnnouncementDetail from "./views/announcement/AnnouncementDetail";
import GroupListDetail from "./views/user/grouptest/GroupListDetail";

// palette: {
//   type: "dark",
// },
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
  let { path, url } = useRouteMatch();

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
          <Route path="/sensor/:id">
            <UserDashboard component={<Sensor />} />
          </Route>
          <Route path="/gateway">
            <UserDashboard component={<FirstPage />} />
          </Route>
          <Route path="/gatewaygroup">
            <UserDashboard component={<GroupTest />} />
          </Route>
          <Route path="/gatewaygroupdetail/:id" exact>
            <UserDashboard component={<GroupListDetail />} />
          </Route>
          <Route path="/gatewaydetail/:id" exact>
            <UserDashboard component={<GatewayDetail />} />
          </Route>
          <Route path="/gatewaydetail/:id/edit/:edit">
            <UserDashboard component={<EditGatewayDetail />} />
          </Route>
          <Route path="/linegraph">
            <UserDashboard component={<LineGraph />} />
          </Route>
          <Route path="/dashboard">
            <UserDashboard component={<Announcement />} />
          </Route>
          <Route path="/profile/edit/:edit">
            <UserDashboard component={<EditProfile />} />
          </Route>
          <Route path="/profile" exact>
            <UserDashboard component={<Profile />} />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/announcement">
            <Announcement />
          </Route>
          <Route path="/announcementdetail/:id" exact>
            <UserDashboard component={<AnnouncementDetail />} />
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
