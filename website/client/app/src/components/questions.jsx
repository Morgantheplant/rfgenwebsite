/** @jsx React.DOM */


'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var QUESTIONS  = React.createClass({

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
          <h1 id="scrollQuestions">QUESTIONS</h1>
          <p>No quesitons.. Submit one below!<br /><br />
          <b>Email:</b>  <input type="text"></input></p>
          <button className="btn-primary">Submit</button>
        </div>   
      </div>
      )
  }
})

module.exports = QUESTIONS;
