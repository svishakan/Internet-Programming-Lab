import React, { Component } from 'react';

class Dates extends Component {
    render() {
        return (
            <div>
                <hr />
                <h2 align="center" className="title text-shadow-pop-bottom">IMPORTANT DATES</h2>
                <br />
                <table width="75%" border="2px" solid black>
                    <thead style={{ color: '#ffbd39', fontSize: 25 }}>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Commencement of Paper Submission</td>
                            <td>December 05, 2020</td>
                        </tr>
                        <tr>
                            <td><strike>Closing of Paper Submission</strike></td>
                            <td><strike>January 05, 2021</strike></td>
                        </tr>
                        <tr>
                            <td>Acceptance Notification</td>
                            <td>January 10, 2021</td>
                        </tr>
                        <tr>
                            <td>Payment Deadline</td>
                            <td>January 15, 2021</td>
                        </tr>
                        <tr>
                            <td>Pre-Conference Workshops</td>
                            <td>January 25, 2021</td>
                        </tr>
                        <tr>
                            <td><strong>Closing of Paper Submission</strong></td>
                            <td><strong>January 20, 2020</strong></td>
                        </tr>
                        <tr>
                            <td>Conference</td>
                            <td>January 28<sup>th</sup> - February 2<sup>nd</sup>, 2021</td>
                        </tr>
                    </tbody>
                </table>
                <br /><br /><br />
            </div>
        );
    }
}

export default Dates;