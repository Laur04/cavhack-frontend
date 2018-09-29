import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
import { AddModal } from '../components/Modal/Modal'

import { getUserProfile } from '../actions/api'

class MyHome extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
    <div>
        <div id="home">
            <Image className="homeimage" src="http://www.space.com/images/i/000/057/199/original/moon-spacewalk-apollo16.jpg?interpolation=lanczos-none&fit=inside%7C660:*" alt="Man on the Moon" />
            <h1 className="homename"><b>Lauren Delwiche</b></h1>
                <p className="hometext">I am a novice website designer with the drive and skills to make your website just right.</p>
                <div className="row">
                <div className="col-md-3"><a href="https://codepen.io/LMDHockey/" target="_blank" className="homebutton">CodePen</a></div>
                <div className="col-md-3"><a href="https://www.instagram.com/?hl=en" target="_blank" className="homebutton">Instagram</a></div>
                <div className="col-md-3"><a href="https://www.facebook.com/login.php?login_attempt=1&lwv=110" target="_blank" className="homebutton">Facebook</a></div>
                <div className="col-md-3"><a href="https://twitter.com/login/error?redirect_after_login=%2F" target="_blank" className="homebutton">Twitter</a></div>
                </div>
        </div>
    </div>
    
    );
}
}


export default MyHome;
