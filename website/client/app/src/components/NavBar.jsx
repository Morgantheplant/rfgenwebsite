/** @jsx React.DOM */


'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var Router = require('react-router');
var Link = Router.Link;

function getAppState(){
  return AppStore.getData();
};

var NAV = React.createClass({
  
  render: function(){
    return (
        <div className="contianer">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">REACT FULLSTACK GENERATOR</a>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="" data="Top">Home</a></li>
              <li><a href="" data="Why">About</a></li>
              <li><a href="" data="Howto">How To</a></li>
              <li><a href="" data="Team">Team</a></li>
              <li><a href="" data="Questions">Questions</a></li>
            </ul>
            <div className="navbar-header navbar-right">
              <p className="navbar-text">
              </p>
            </div>
          </div>
        </nav>
        
        </div>
    );
  }
})

module.exports = NAV