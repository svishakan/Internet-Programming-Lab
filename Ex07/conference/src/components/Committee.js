import React, { Component } from 'react';

class Committee extends Component {
    render() {
        return (
            <div>
                <hr />
                <h2 align="center" className="title text-shadow-pop-bottom">COMMITTEE</h2>
                <article>
                    <ul className="committee">
                        <li>CHIEF CHAIR</li>
                        <ul className="members">
                            <li>Garry Kasparov, Grandmaster</li>
                        </ul>
                        <li>PATRON</li>
                        <ul className="members">
                            <li>Magnus Carlsen, Grandmaster</li>
                            <li>Hikaru Nakamura, Grandmaster</li>
                            <li>Viswanathan Anand, Grandmaster</li>
                        </ul>
                        <li>CONFERENCE CHAIR</li>
                        <ul className="members">
                            <li>Fabiano Caruana, Grandmaster</li>
                            <li>Wesley So, Grandmaster</li>
                            <li>Anish Giri, Grandmaster</li>
                        </ul>
                        <li>PROGRAM COMMITTEE</li>
                        <ul className="members">
                            <li>Levy Rozman, International Master</li>
                            <li>Alexandra Botez, Woman FIDE Master</li>
                        </ul>
                        <li>MEDIA COMMITTEE</li>
                        <ul className="members">
                            <li>Sagar Shah, International Master</li>
                            <li>Samay Raina, YouTuber</li>
                            <li>Antonio Radic (Agadmator), YouTuber</li>
                        </ul>
                        <li>STRATEGIC PARTNERS</li>
                        <ul className="members">
                            <li>Danny Rensch, Chief Chess Officer, Chess.com</li>
                            <li>Robert Hess, Analyst, Chess.com</li>
                        </ul>
                    </ul>
                </article>
                <br /><br /><br />
            </div>
        );
    }
}

export default Committee;