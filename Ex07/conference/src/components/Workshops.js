import React, { Component } from 'react';

class Workshops extends Component {
    render() {
        return (
            <div>
                <hr />
                <h2 align="center" className="title text-shadow-pop-bottom">ICC 2021 WORKSHOPS</h2>
                <br />
                <div align="left" style={{ fontFamily: 'arial', width: '50%' }}>
                    <p style={{ fontSize: 20, color: '#f8f1f1', padding: 5 }}>The <strong><abbr title="Internation Conference for Chess">ICC</abbr> 2021</strong> is organizing two extensive,
                        in-depth workshops that will be held for two hours on all the days of the conference, from <strong>10 AM -
                        12 PM</strong>. Interested people can register for attending the workshops from our registration page.
                    </p>
                    <p style={{ fontFamily: 'arial', width: '75%', fontSize: 15, color: '#f8f1f1', fontWeight: 'bold' }}>(Please note that
                        registrations are served on a first-come, first-serve basis)</p>
                </div>
                <div className="content">
                    <p>
                        <img src="radjabov.png" alt="Radjabov's Picture" width="300px" height="200px" />
                        A workshop on detailed analysis of <b>flank opening</b> theories including King's Indian Defense, Reti
                        Opening, English Opening, Caro-Kann, etc. will be held by <strong>GM Teimour Radjabov</strong>.
                    </p>
                    <br /><br /><br />
                </div>
                <div className="content">
                    <p>
                        <img src="alphazero.jpeg" alt="AlphaZero Logo" width="300px" height="200px" />
                        <b>DeepMind</b> in partnership with <b>Chess.com</b> is hosting a workshop on the role of AI in Chess with a
                        case-study of their own chess engine, <mark>AlphaZero</mark>. Attendees will be able to understand how
                        conventional chess ideologies are translated into notions that can be perceived by the computer. No prior
                        technical knowledge is required to join this workshop.
                    </p>
                    <br /><br /><br />
                </div>
                <br /><br /><br />
            </div>
        );
    }
}

export default Workshops;