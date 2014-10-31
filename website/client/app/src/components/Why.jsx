/** @jsx React.DOM */


'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var WHY  = React.createClass({

  handleClick: function(){
    console.log("at handleClick in Signup")
  },

  handleInput: function(e) {
    console.log("at handleInput in Login")
  },
  
  render: function(){
    return (
      <div>
        <div className="container">
          <h1 id="scrollWhy">WHY US REACT FULLSTACK?</h1>
          <ul>
            <li>Reason 1</li>
            <li>Reason 2</li>
            <li>Reason 3</li>
          </ul>
          <h3>Check out all this code!</h3>
          <img src="./app/src/components/nickcage.jpg"/>
        </div>   
      </div>
      )
  }
})

module.exports = WHY;
