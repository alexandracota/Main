import React from "react";
import ReactDOM from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
Add Comment


var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
var LoginPage = require("./pages/login");
var HomePage = require("./pages/home");
var PlayMateDescriptionPage = require("./pages/detailedplaymatedescription");
var CreatedDogProfilePage = require("./pages/createdogprofile");
var SearchResultsPage = require("./pages/searchresultspage");

// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Search" component={Search} />
      <Route path="Saved" component={Saved} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>
);