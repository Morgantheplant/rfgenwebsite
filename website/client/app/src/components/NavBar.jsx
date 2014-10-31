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
        <nav className="navbar navbar-default" role="navigation">
          <div className="wrapper">
            <Link className="navbar-brand" to="home">React Flux Fullstack Generator</Link>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="" data="Why">About</a></li>
              <li><a href="" data="Howto">How To</a></li>
              <li><a href="" data="Team">Team</a></li>
              <li><a href="" data="Questions">Questions</a></li>
              <li><a href="" data="Blog">Blog</a></li>
            </ul>
          </div>
        </nav>
        </div>
    );
  }
})

module.exports = NAV