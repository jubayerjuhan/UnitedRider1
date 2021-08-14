import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header.js';
import Homepage from "./Components/Homepage/Homepage";
import RideDetails from "./Components/RideDetails/RideDetails";
import SignUp from "./Components/SignUp/SignUp";
import ShowPrice from "./Components/ShowPrice/ShowPrice";
import Protectedroute from "./Components/ProtectedRoute/Protectedroute";
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

          <Protectedroute path="/ride/:type/price">
            <ShowPrice />
          </Protectedroute>

          <Protectedroute path="/ride/:type">
            <RideDetails />
          </Protectedroute>

          <Route path="/login">
            <SignUp />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;//kjmcfzv
