import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
import { AddModal } from '../components/Modal/Modal'

import { getUserProfile } from '../actions/api'

class MyAbout extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
    <div id="about">
        <h1 className="aboutheading" id="aboutref">About Me</h1>
        <div className="row">
        <div className="col-md-4"> <Image className="aboutimage img-responsive" src="http://www.space.com/images/i/000/057/199/original/moon-spacewalk-apollo16.jpg?interpolation=lanczos-none&fit=inside%7C660:*" alt="Man on the Moon"/></div>
            <div className="col-md-8">
                <div className="aboutbox abouttext">
                <h2>Bio</h2>
                <p> I am a teenager in Northern Virginia attending Lake Braddock Secondary School. I play travel field hockey and travel soccer, but am also on my school's math team and the editor of the school paper. All STEM subjects interest me, but I especially
                    love computers, aerodynamics and astronomy.</p>
                <h2>Experience and Education</h2>
                <ul>
                    <li>FreeCodeCamp Certificate in Front End Developmemt</li>
                    <li>Gradutation from 6th Grade</li>
                    <li>Accepted into SEP Technology Camp</li>
                </ul>
                <h2>Mission Statement</h2>
                <p>My mission is to build beautiful, functional websites that are tailored to <b>your</b> needs. All of my profits from building websites will go directly to helping underprivilaged children have the oppurtinuty to reach their full potental and
                    to fostering good relationships between the future leaders and scientists of tomorrow.</p>
                </div>
            </div>
        </div>
    </div>
    );
}
}


export default MyAbout;
