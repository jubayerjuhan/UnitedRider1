import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header.js';
import Homepage from "./Components/Homepage/Homepage";
import RideDetails from "./Components/RideDetails/RideDetails";
import SignUp from "./Components/SignUp/SignUp";
function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/ride/:type">
          <RideDetails/>
        </Route>

        <Route path="/Sign-up">
          <SignUp/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
