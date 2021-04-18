import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <hr />
                <h2 align="center" className="title text-shadow-pop-bottom">HOME</h2>
                <br />
                <article align="center" style={{ fontFamily: 'arial', position: 'relative', overflow: 'auto', margin: 'auto', width: '35%', border: '3px solid black' }}>
                    <h2 style={{ color: '#ffbd39' }}>ABOUT</h2>
                    <p style={{ fontSize: 20, color: '#f8f1f1', padding: 5 }}>The <strong><abbr title="Internation Conference for Chess">ICC</abbr> 2021</strong> is organized proudly by the
                        <b>Tata Steel Foundation</b>. Leading Grandmasters and key chess figures will be present in this grand
                        event.
                        It provides an opportunity for chess enthusiasts, professional chess players, researchers and related
                        specialists to discuss on how <b><i>Artificial Intelligence</i></b> has influenced the game and propose
                        novel ideas for further development and research.
                    </p>
                </article>
                <br /><br />
                <div align="center" className="logo">
                    <figure>
                        <img src="tata_logo.png" height="125," width={125} alt="Tata Logo" style={{ border: '3px solid black' }} />
                        <figcaption>Tata Steel Chess Tournament</figcaption>
                    </figure>
                </div>
                <br /><br /><br />
            </div>
        );
    }
}

export default Home;