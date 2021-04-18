import React, { Component } from 'react';

class Papers extends Component {
    render() {
        return (
            <div>
                <hr />
                <h2 align="center" className="title text-shadow-pop-bottom">ICC 2021 PAPERS</h2>
                <article align="left" style={{ fontFamily: 'arial', width: '75%', fontSize: 20, color: '#f8f1f1', padding: 5 }}>
                    <p>The <strong><abbr title="Internation Conference for Chess">ICC</abbr> 2021</strong> calls for papers to to be
                    submitted in all aspects of chess, with emphasis on Engine Analysis, Endgame Theory &amp; Tactics.</p>
                    <p>Relevant topics for the conference include, but not limited to, the following areas:</p>
                    <ul className="topics">
                        <li>ENGINE ANALYSIS</li>
                        <ul className="subtopics">
                            <li>Deep Neural Networks</li>
                            <li>Expert Systems</li>
                            <li>Chess Cognition</li>
                            <li>Real-time high performance analysis</li>
                            <li>Report generation</li>
                            <li>Move order exploration</li>
                            <li>Exploring opening theory</li>
                        </ul>
                        <li>ENDGAME THEORY</li>
                        <ul className="subtopics">
                            <li>Rook &amp; Pawn Endgames</li>
                            <li>Queen &amp; Pawn Endgames</li>
                            <li>Bishop Endgames</li>
                            <li>Knights vs Bishops Endgames</li>
                        </ul>
                        <li>TACTICS</li>
                        <ul className="subtopics">
                            <li>Puzzle Training</li>
                            <li>Puzzle Design</li>
                            <li>Artificial Puzzle Generation</li>
                            <li>Tactical analysis of positions</li>
                        </ul>
                    </ul>
                </article>
                <br /><br /><br />
            </div>
        );
    }
}

export default Papers;