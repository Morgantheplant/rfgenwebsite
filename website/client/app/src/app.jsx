/** @jsx React.DOM */

/*ReadMe:
  Components are where you will be designing your view in the
  render section.  This code is written in jsx; <this.props.activeRouteHandler/>
  is used below for changing views for routing.  

  To add components, you can run react-fullstack:component, and it will create a new component file in the folder.
*/


'use strict';

var React = require('react');

var HOME = require('./components/Home.jsx');


var NAV = require('./components/NavBar.jsx');
var BANNER = require('./components/Banner.jsx');
var WHY = require('./components/Why.jsx');
var HOWDO = require('./components/HowDo.jsx');
var TEAM = require('./components/team.jsx');
var QUESTIONS = require('./components/questions.jsx');
var FOOTER = require('./components/Footer.jsx');


var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;


var APP = React.createClass({
  render: function(){
    return (
      <div id="scrollTop">
        <NAV />
        <BANNER />
        <WHY />
        <HOWDO />
        <TEAM />
        <QUESTIONS />
        <FOOTER />
      </div>
    )
  }
})

var routes = (
  <Routes location="history">
    <Route handler={APP}>
      <Route name="home" path="/" handler={HOME}/>
      <DefaultRoute handler={APP}/>
    </Route>
  </Routes>
);

module.exports = React.renderComponent(routes, document.body);
