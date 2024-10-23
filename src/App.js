import logo from './logo.svg';
import './App.css';

import 'D:/reactjs/truesays/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'D:/reactjs/truesays/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import WhyUs from './components/WhyUs'
import Mission from './components/Mission'
import Team from './components/Team'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
        <Header/>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/WhyUs" component={WhyUs} />
            <Route path="/Mission" component={Mission} />
            <Route path="/Team" component={Team} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
