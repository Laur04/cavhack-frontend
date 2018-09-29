import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
import { AddModal } from '../components/Modal/Modal'

import { getUserProfile } from '../actions/api'

class MyPortfolio extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
        <div id="portfolio">
        <h1 className="portfolioheading" id="portfolioref">My Portfolio</h1>
        <div className="portfoliopics1">
        <div className="row">
            <div className="col-md-4">
            <a href="https://s.codepen.io/LMDHockey/debug/LbwRwV/LQMExPYQdbgk" target="_blank"><Image className="img-responsive portfolioshot" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/16938814_189161551568526_1046055108403897297_n.jpg?oh=95db482aa21fc8ed5103fc5f39c592e9&oe=593798BB" alt="John Glenn Tribute Website"/></a>
            </div>
            <div className="col-md-4">
            <a href="#" target="_blank"><Image className="img-responsive portfolioshot" src="http://www.space.com/images/i/000/057/199/original/moon-spacewalk-apollo16.jpg?interpolation=lanczos-none&fit=inside%7C660:*" alt="Man on the Moon"/></a>
            </div>
            <div className="col-md-4">
            <a href="#" target="_blank"><Image className="img-responsive portfolioshot" src="http://www.space.com/images/i/000/057/199/original/moon-spacewalk-apollo16.jpg?interpolation=lanczos-none&fit=inside%7C660:*" alt="Man on the Moon"/></a>
            </div>
        </div>
        </div>
        <div className="portfoliocaptions">
        <div className="row">
            <div className="col-md-4">
            <p>My first ever FreeCodeCamp project was this tribute page to late astronaut John Glenn.</p>
            </div>
            <div className="col-md-4">
            <p>picture caption</p>
            </div>
            <div className="col-md-4">
            <p>picture caption</p>
            </div>
        </div>
        </div>
        <div className="portfoliopics2">
        <div className="row">
            <div className="col-md-4">
            <a href="#" target="_blank"><Image className="img-responsive portfolioshot" src="http://www.space.com/images/i/000/057/199/original/moon-spacewalk-apollo16.jpg?interpolation=lanczos-none&fit=inside%7C660:*" alt="Man on the Moon"/></a>
            </div>
            <div className="col-md-4">
            <a href="#" target="_blank"><Image className="img-responsive portfolioshot" src="http://www.space.com/images/i/000/057/199/original/moon-spacewalk-apollo16.jpg?interpolation=lanczos-none&fit=inside%7C660:*" alt="Man on the Moon"/></a>
            </div>
            <div className="col-md-4">
            <a href="#" target="_blank"><Image className="img-responsive portfolioshot" src="http://www.space.com/images/i/000/057/199/original/moon-spacewalk-apollo16.jpg?interpolation=lanczos-none&fit=inside%7C660:*" alt="Man on the Moon"/></a>
            </div>
        </div>
        </div>
        <div className="portfoliocaptions">
        <div className="row">
            <div className="col-md-4">
            <p>picture caption</p>
            </div>
            <div className="col-md-4">
            <p>picture caption</p>
            </div>
            <div className="col-md-4">
            <p>picture caption</p>
            </div>
        </div>
        </div>
    </div>
    
    );
}
}


export default MyPortfolio;
