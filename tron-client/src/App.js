import "./App.css";

import {
  // BrowserRouter as Router,
  Router,
  Route,
  Switch,
  // useLocation,
} from "react-router-dom";

// constants
import history from "./config/history";
import { routesToRender } from "./constants/appConstants";

// components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="contentContainer">
        <Router history={history} basename={process.env.PUBLIC_URL}>
          <Switch>
            {routesToRender.map((route, routeIdx) => (
              <Route
                key={routeIdx}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
        <div className="creditsContainer">
          <div>
            Made with 💙 by Team TRoN. All rights reserved &copy; 2021 -
            present.
          </div>
          <div>Tanishq Vyas | Raghav Goyal | Nitin Bindal</div>
        </div>
      </div>
    </div>
  );
};

export default App;
