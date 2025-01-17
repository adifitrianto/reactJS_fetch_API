import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Australia from "./Australia";
import Turkey from "./Turkey";
import Ireland from "./Ireland";
import About from "./About";



class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1 className="title">Fetching Data API</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/australia">Australia</NavLink></li>
                        <li><NavLink to="/turkey">Turkey</NavLink></li>
                        <li><NavLink to="/ireland">Ireland</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>

                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/australia" component={Australia} />
                        <Route exact path="/turkey" component={Turkey} />
                        <Route exact path="/ireland" component={Ireland} />
                        <Route exact path="/about" component={About} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;