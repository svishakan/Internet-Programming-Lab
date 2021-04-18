import logo from './logo.svg';
import './App.css';
import './styles.css'
import Home from './components/Home'
import Committee from './components/Committee'
import Papers from './components/Papers'
import Dates from './components/Dates'
import Workshops from './components/Workshops'
import Registration from './components/Registration';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/committee">
            <Committee />
          </Route>
          <Route path="/papers">
            <Papers />
          </Route>
          <Route path="/dates">
            <Dates />
          </Route>
          <Route path="/workshops">
            <Workshops />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
