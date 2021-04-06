import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/header";
import TopIndia from "./components/TopIndia";

import Home from "./components/World";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import Health from "./components/Health";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import General from "./components/General";


function App() {
  return (
    <HashRouter>
      <Header />
      < Route exact path='/' component={ Home }/>
      < Route exact path='/TopIndia' component={TopIndia}/>
      < Route exact path='/Business' component={Business}/>
      < Route exact path='/Entertainment' component={Entertainment}/>
      < Route exact path='/Health' component={Health}/>
      < Route exact path='/Science' component={Science}/>
      < Route exact path='/Sports' component={Sports}/>
      < Route exact path='/Technology' component={Technology}/>
      < Route exact path='/General' component={General}/>
    </HashRouter>
  );
}

export default App;
