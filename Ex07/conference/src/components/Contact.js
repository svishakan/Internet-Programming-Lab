import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <hr />
                <h2 align="center" className="title text-shadow-pop-bottom">CONTACT</h2>
                <br />
                <section align="center">
                    <p className="contact"><span className="name">Pentala Harikrishna</span> - <a href="mailto:harikrishna_p@chess.com">harikrishna_p@chess.com</a></p>
                    <p className="contact"><span className="name">Aryan Tari</span> - <a href="mailto:tari_aryan@chess24.com">tari_aryan@chess24.com</a></p>
                    <p className="contact"><span className="name">Ray Robson</span> - <a href="mailto:rrobson@lichess.org">rrobson@lichess.org</a></p>
                    <p className="contact"><span className="name">Simon Williams</span> - <a href="mailto:gingergm@chessable.com">gingergm@chessable.com</a></p>
                </section>
                <br /><br /><br />
            </div>
        );
    }
}

export default Contact;