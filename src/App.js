import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import NavBar from"./NavBar";
import Profile from "./Profile";
import Exercises from "./Exercises";
import Calendar from "./Calendar";
import SingleRound from "./SingleRound";
import MovementRound from "./MovementRound";
import Movements from "./Movements";
import AddToCalendar from "./AddToCalendar";

function App() {

  const [user, setUser] = useState(null);
  const [page, setPage] = useState("/")
  const [exercise, setExercise] = useState([])

  useEffect(() => {
    fetch('http://localhost:5555/exercises')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      return response.json();
    })
    .then(setExercise)
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [])


  return (
    <div className="App">
      <Router>
      <NavBar onChangePage={setPage} />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/exercises">
            <Exercises exercise={exercise} setExercise={setExercise} />
          </Route>
          <Route path="/rounds">
            <SingleRound user={user} exercise={exercise}/>
          </Route>
          <Route path="/calendar">
            <Calendar user={user} exercise={exercise} setExercise={setExercise} />
          </Route>
          <Route path="/movementround">
            <MovementRound />
          </Route>
          <Route path="/exercise/:id/addtocalendar">
            <AddToCalendar exercise={exercise} />
          </Route>
          <Route path="/movements">
            <Movements />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
  }

  export default App;