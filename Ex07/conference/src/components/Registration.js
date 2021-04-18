import React, { Component } from 'react';

class Registration extends Component {
    render() {
        return (
            <div>
                <hr />
                <h2 align="center" className="title text-shadow-pop-bottom">REGISTRATION</h2>
                <br />
                <p align="left" style={{ fontFamily: '"Tahoma", sans-serif', fontSize: 18, color: '#f8f1f1', width: '60%' }}>
                    The registration fee for main conference with workshop will cover conference &amp; workshop, full access to all
                    sessions/invited talks including the pre-conference workshop.
    <br />
    Currently the only possible mode of payment is NEFT/RTGS for Dutch participants and wire transfer for foreign
    participants.
    <br />
                    <b>Kindly fill out the form below to commence the registration process and receive payment information in
      your e-mail.</b>
                </p>
                <hr />
                <div id="form">
                    <form>
                        <p className="title"><b><u>NAME &amp; E-MAIL</u></b></p>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="text" name="name" placeholder="Anatoly Karpov" />
                        <br /><br />
                        <label htmlFor="email">Email</label>
                        <input type="text" id="text" name="email" placeholder="karpov_anatoly@email.com" />
                        <br />
                        <p className="title"><b><u>GENDER</u></b></p>
                        <input type="radio" id="male" name="gender" defaultValue="male" />
                        <label htmlFor="male">Male</label><br />
                        <input type="radio" id="female" name="gender" defaultValue="female" />
                        <label htmlFor="female">Female</label><br />
                        <input type="radio" id="other" name="gender" defaultValue="other" />
                        <label htmlFor="other">Other</label><br />
                        <p className="title"><b><u>EVENTS INTERESTED</u></b></p>
                        <input type="checkbox" id="event1" name="event1" defaultValue="Flank Opening Theories" />
                        <label htmlFor="event1">Flank Opening Theories</label><br />
                        <input type="checkbox" id="event2" name="event2" defaultValue="DeepMind Workshop" />
                        <label htmlFor="event2">DeepMind Workshop</label><br />
                        <input type="checkbox" id="event3" name="event3" defaultValue="Pre-Conference Workshop" />
                        <label htmlFor="event3">Pre-Conference Workshop</label><br /><br />
                        <input type="submit" defaultValue="Submit" id="button" />
                        <input type="reset" defaultValue="Clear" id="button" />
                    </form>
                </div>
                <br /><br /><br />
            </div>
        );
    }
}

export default Registration;