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
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/marcwilhite">
                    <img className="circular" src="app/images/devTeam/marc.jpg" />
                    <span className="textDontMove">Marc</span>
                    <img src="app/images/icons/github.png" />
                  </a> 
                  <a href="http://www.linkedin.com/in/marcwilhite"> 
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/richguan">
                    <img className="circular" src="app/images/devTeam/rich.jpg" />
                    <span className="textDontMove">Rich</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div> 

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <img className="circular" src="app/images/devTeam/teresa.jpg" />
                  <a href="https://github.com/treelala">
                    <span className="textDontMove">Teresa</span>
                    <img src="app/images/icons/github.png" />
                  </a>
                    <img src="app/images/icons/linkedin.gif" />
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/jamesanthonyferguson">
                    <img className="circular" src="app/images/devTeam/james.jpg" />
                    <span className="textDontMove">James</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/NickStefan">
                    <img className="circular" src="app/images/devTeam/nicks.jpg" />
                    <span className="textDontMove">Nick</span>
                    <img src="app/images/icons/github.png" />
                  </a>
                  <a href="http://www.linkedin.com/in/nickstefan">  
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/doublelift">
                    <img className="circular" src="app/images/devTeam/greg.jpg" />
                    <span className="textDontMove">Greg</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div>  
              </div>

              <div className="row">

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/bisutun">
                    <img className="circular" src="app/images/devTeam/katherine.jpg" />
                    <span className="textDontMove">Katherine</span>
                    <img src="app/images/icons/github.png" />
                  </a>
                  <a href="https://www.linkedin.com/in/gilhooley">  
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/concreted">
                    <img className="circular" src="app/images/devTeam/aric.png" />
                    <span className="textDontMove">Aric</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                <a href="https://github.com/johnheroy">
                  <img className="circular" src="app/images/devTeam/john.png" />
                  <span className="textDontMove">John</span>
                  <img src="app/images/icons/github.png" />
                </a>  
                <a href="http://www.linkedin.com/pub/john-heroy/23/274/a54">  
                  <img src="app/images/icons/linkedin.gif" />
                </a>  
                </div> 

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/spencer48">
                    <img className="circular" src="app/images/devTeam/spencer.jpg" />
                    <span className="textDontMove">Spencer</span>
                    <img src="app/images/icons/github.png" />
                  </a>
                  <a href="http://www.linkedin.com/pub/spencer-handley/2b/8/2b1">  
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/xue0chao">
                    <img className="circular" src="app/images/devTeam/chao.jpg" />
                    <span className="textDontMove">Chao</span>
                    <img src="app/images/icons/github.png" /> 
                  </a>
                  <a href="http://www.linkedin.com/pub/chao-xue/14/176/9a0">  
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/alezucco">
                    <img className="circular" src="app/images/devTeam/ale.jpg" />
                    <span className="textDontMove">Alejandro</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div>  
              </div>

              <div className="row">

               <div className="col-md-2 col-sm-4 col-xs-6">
                 <a href="https://github.com/fsbatista">
                    <img className="circular" src="app/images/devTeam/felipe.jpg" />
                    <span className="textDontMove">Felipe</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div> 

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/warrenty">
                    <img className="circular" src="app/images/devTeam/warren.jpg" />
                    <span className="textDontMove">Warren</span>
                    <img src="app/images/icons/github.png" />
                  </a>
                  <a href="http://www.linkedin.com/pub/warren-tang/1a/a5b/7b9">  
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/bace135">
                    <img className="circular" src="app/images/devTeam/bryan.jpg" />
                    <span className="textDontMove">Bryan</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/morgantheplant">
                    <img className="circular" src="app/images/devTeam/morgan.png" />
                    <span className="textDontMove">Morgan</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                  <a href="http://www.linkedin.com/in/morganplant">
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div> 

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/sebastiandelgado">
                    <img className="circular" src="app/images/devTeam/seb.jpg" />
                    <span className="textDontMove">Sebastian</span>
                    <img src="app/images/icons/github.png" />
                  </a>
                  <a href="http://www.linkedin.com/pub/sebastian-delgado/38/9b/3a5">  
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/polynickglot">
                    <img className="circular" src="app/images/devTeam/nickl.png" />
                    <span className="textDontMove">Nick</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/radicalsauce">
                    <img className="circular" src="app/images/devTeam/kelly.jpg" />
                    <span className="textDontMove">Kelly</span>
                    <img src="app/images/icons/github.png" />
                  </a>
                  <a href="https://www.linkedin.com/in/krhale">  
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/allenjprice">
                    <img className="circular" src="app/images/devTeam/allen.jpg" />
                    <span className="textDontMove">Allen</span>
                    <img src="app/images/icons/github.png" />
                  </a>
                  <a href="http://www.linkedin.com/pub/allen-price/91/882/583">  
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div> 

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/adzample">
                    <img className="circular" src="app/images/devTeam/adam.jpg" />
                    <span className="textDontMove">Adam</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/darkstar21">
                    <img className="circular" src="app/images/devTeam/mike.jpg" />
                    <span className="textDontMove">Mike</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/tgrrtt">
                    <img className="circular" src="app/images/devTeam/tyler.jpg" />
                    <span className="textDontMove">Tyler</span>
                    <img src="app/images/icons/github.png" />
                  </a>
                  <a href="http://www.linkedin.com/pub/tyler-garrett/9a/268/10b">  
                    <img src="app/images/icons/linkedin.gif" />
                  </a>  
                </div>

                <div className="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/Pouncealot">
                    <img className="circular" src="app/images/devTeam/jasper.jpg" />
                    <span className="textDontMove">Jasper</span>
                    <img src="app/images/icons/github.png" />
                  </a>  
                    <img src="app/images/icons/linkedin.gif" />
                </div>  
              </div>    
            </div>
        </div>   
      </div>
      )
  }
})

module.exports = TEAM;
