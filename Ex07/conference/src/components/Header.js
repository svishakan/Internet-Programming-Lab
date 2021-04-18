import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 title="ICC 2021 Welcomes You!">The International Conference for Chess 2021</h1>
                    <h2>3rd International Conference on the Role of AI in Chess</h2>
                    <h3>28<sup>th</sup> January 2021 - 2<sup>nd</sup> February 2021</h3>
                    <h3>Tata Chess Amphitheatre, Wijk Aan Zee, Netherlands</h3>
                </header>
                <br />
                <nav align="center">
                    <ul>
                        <li><a><Link to="/"> HOME </Link></a></li>
                        <li><a><Link to="/committee"> COMMITTEE </Link></a></li>
                        <li><a><Link to="/papers"> CALL FOR PAPERS </Link></a></li>
                        <li><a><Link to="/dates"> IMPORTANT DATES </Link></a></li>
                        <li><a><Link to="/workshops"> WORKSHOPS </Link></a></li>
                        <li><a><Link to="/registration"> REGISTRATION </Link></a></li>
                        <li><a><Link to="/contact"> CONTACT </Link></a></li>
                    </ul>
                </nav>

            </div>
        )
    }
};

export default Header;