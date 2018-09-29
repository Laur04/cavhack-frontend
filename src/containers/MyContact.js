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
    <div id="contact">
        <h1 class="contactheading" id="contactref">Contact Me</h1>
        <hr width="350px" style="margin-top:-25px">
        <div class="text-center">
        <form action="#">
            <input type="text" required placeholder="Your Name" class="contactinput">
            <input type="text" required placeholder="Your Email" class="contactinput">
            <input type="text" required placeholder="Inquiry Description" class="contactinput" style="padding-bottom:80px">
            <label class="contactradio"><input type="radio" name="type">Business</label>
            <label class="contactradio"><input type="radio" name="type">Personal</label>
            <button type="submit" class="btn contactsubmit">Submit</button>
        </form>
        </div>
    </div>
    </div>
    </div>
    
    );
}
}


export default MyHome;
