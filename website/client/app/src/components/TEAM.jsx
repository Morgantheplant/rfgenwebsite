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
          <div className="navbar tooltip-demo">
                  <ul className="nav">
                    <li><a className="top" title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Tooltip on top">Tooltip on top</a></li>
                    <li><a className="right" title="" data-placement="right" data-toggle="tooltip" href="#" data-original-title="Tooltip on right">Tooltip on right</a></li>
                    <li><a className="bottom" title="" data-placement="bottom" data-toggle="tooltip" href="#" data-original-title="Tooltip on bottom">Tooltip on bottom</a></li>
                    <li><a className="left" title="" data-placement="left" data-toggle="tooltip" href="#" data-original-title="Tooltip on left">Tooltip on left</a></li>
                  </ul>
                </div>
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
