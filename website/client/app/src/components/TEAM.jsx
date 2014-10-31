/** @jsx React.DOM */


'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var TEAM  = React.createClass({

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
          <h1 id="scrollTeam">Dev TEAM</h1>
          <ul>
          <li>Person</li>
          <li>Person</li>
          <li>Person</li>
          <li>Person</li>
          <li>Person</li>
          <li>Person</li>
          </ul>
        </div>   
      </div>
      )
  }
})

module.exports = TEAM;
