import React from 'react';
import { HashRouter , Route} from "react-router-dom";
import Home from "./../Home/Home";
import About from "./../About/About";
import Skills from "./../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "./../Contact/Contact";
import './App.css';
import Navv from '../Nav/Navv';
import Gohome from '../Gohome/Gohome';

const App = () => {
    return (<div>
            
            <HashRouter>
            <div>
                <Navv/>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Gohome/>
            </div>
            </HashRouter>
    </div>);
};
 export default App;