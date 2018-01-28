import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className= "top-nav">
            <div className= "container">
              <div className= "nav-wrapper">
                <h1></h1>
              </div>
            </div>
            <div>
              <ul className= "side-nav fixed">
                <li className= "name">
                <h3>Nathan Voirol</h3>
                </li>
                <li className="divider"></li>
                <li className= "bold">
                  <Link className="waves-effect waves-light" to="/">Home</Link>
                </li>
                <li className= "bold">
                  <Link className="waves-effect waves-light" to="/textiles">Textiles</Link>
                </li>
                <li className= "bold">
                  <Link className="waves-effect waves-light" to="/tiles">Tiles</Link>
                </li>
                <li className= "bold">
                  <Link className="waves-effect waves-light" to="/paper">Paper</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
};

//<li className= "logo"> <img src="./images/star.jpg" style={{height: 275, width: "auto"}}/>/></li>