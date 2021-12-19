import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'
import Project from "./Pages/Project";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Japanese from "./Pages/Japanese";

export class App extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {


        return (
            <div className="App container-fluid">
                <BrowserRouter>
                    <div className="navigationMenu">
                        <div className="links w-row">
                            <div className="column w-col w-col-4">
                                <div className="text-block-2"><Link to="/" className="navigationItems">Home</Link></div>
                            </div>
                            <div className="column-2 w-col w-col-4">
                                <div className="text-block-2"><Link to="/about" className="navigationItems">About</Link></div>
                            </div>
                            <div className="w-col w-col-4">
                                <div className="text-block-2"><Link to="/japanese" className="navigationItems">Japanese</Link></div>
                            </div>
                        </div>

                    </div>

                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/about" element={<About/>}/>
                        <Route exact path="/projects" element={<Project/>}/>
                        <Route exact path="/japanese" element={<Japanese/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;