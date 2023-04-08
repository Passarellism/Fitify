import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home"
// import Profile from "./Profile";

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/profile">
            <Profile user={user} />
          </Route> */}
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
  }

  export default App;