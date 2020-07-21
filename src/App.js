import React from "react";

import AnonymousHome from "./components/Anonymous_Home";
import AnonymousPostView from "./components/Anonymous_Post_View";
import PageNotFound from './components/Page_Not_Found'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={AnonymousHome} exact />
          <Route path="/post" component={AnonymousPostView} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
