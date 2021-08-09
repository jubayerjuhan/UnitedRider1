import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header.js';
import Homepage from "./Components/Homepage/Homepage";
import RideDetails from "./Components/RideDetails/RideDetails";
import SignUp from "./Components/SignUp/SignUp";
import Privateroute from "./Components/SignUp/Privateroute/Privateroute";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/ride/:type">
            <RideDetails />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
