import React, { Component } from 'react';
import {Link} from 'react-router';

//import Footer from './Footer';
import Header from './Header';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    })
  }
  render() {
    return (
        <div>
          <Header/>
          <div className="homeContainer">
            <div className="row">
              <div className="col s12 m9 l10">
                 <div className= "homeImage"> <img src="./images/star_1.jpg"/></div>      
              </div>
            </div>
          </div>
        </div>
    )     
  }
};
