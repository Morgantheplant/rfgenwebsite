/** @jsx React.DOM */


'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');


var HOWDO  = React.createClass({

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
          <h1 id="scrollHowto">HOW DO I USE IT?</h1>
          <textarea id="fakeConsole"></textarea>
          <div className="code">npm install slush react-fullstack</div>
          <button className="downloadit">Download Here</button>
          <button className="forkit">Fork it on GitHUb</button>
        </div>   
      </div>
      )
  }
})

module.exports = HOWDO;
