import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./containers/Main";
import Welcome from "./containers/Welcome";
import PostContainer from "./containers/PostContainer";
import NavHeader from "./containers/NavHeader";
import ErrorHandler from "./ErrorHandler";
import RedirectHome from "./components/RedirectHome";
import UserPage from "./containers/UserPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavHeader />
          <ErrorHandler />
          <Route exact path="/home" component={Main} />
          <Route exact path="/posts/:post_id" component={PostContainer} />
          <Route exact path="/users/:user_id" component={UserPage} />
          <Route exact path="/" component={Welcome} />
          <Route exact path="*" component={RedirectHome} />
        </Router>
      </div>
    );
  }
}

export default App;
