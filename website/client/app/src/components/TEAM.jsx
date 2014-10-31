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
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/marcwilhite">
                    <img class="circular" src="devTeam/marc.jpg">
                    <span class="textDontMove">Marc</span>
                    <img src="icons/github.png">
                  </a> 
                  <a href="http://www.linkedin.com/in/marcwilhite"> 
                    <img src="icons/linkedin.gif">
                  </a>  
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/richguan">
                    <img class="circular" src="devTeam/rich.jpg">
                    <span class="textDontMove">Rich</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div> 

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <img class="circular" src="devTeam/teresa.jpg">
                  <a href="https://github.com/treelala">
                    <span class="textDontMove">Teresa</span>
                    <img src="icons/github.png">
                  </a>
                    <img src="icons/linkedin.gif">
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/jamesanthonyferguson">
                    <img class="circular" src="devTeam/james.jpg">
                    <span class="textDontMove">James</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/NickStefan">
                    <img class="circular" src="devTeam/nicks.jpg">
                    <span class="textDontMove">Nick</span>
                    <img src="icons/github.png">
                  </a>
                  <a href="http://www.linkedin.com/in/nickstefan">  
                    <img src="icons/linkedin.gif">
                  </a>  
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/doublelift">
                    <img class="circular" src="devTeam/greg.jpg">
                    <span class="textDontMove">Greg</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div>  
              </div>

              <div class="row">

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/bisutun">
                    <img class="circular" src="devTeam/katherine.jpg">
                    <span class="textDontMove">Katherine</span>
                    <img src="icons/github.png">
                  </a>
                  <a href="https://www.linkedin.com/in/gilhooley">  
                    <img src="icons/linkedin.gif">
                  </a>  
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/concreted">
                    <img class="circular" src="devTeam/aric.png">
                    <span class="textDontMove">Aric</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                <a href="https://github.com/johnheroy">
                  <img class="circular" src="devTeam/john.png">
                  <span class="textDontMove">John</span>
                  <img src="icons/github.png">
                </a>  
                <a href="http://www.linkedin.com/pub/john-heroy/23/274/a54">  
                  <img src="icons/linkedin.gif">
                </a>  
                </div> 

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/spencer48">
                    <img class="circular" src="devTeam/spencer.jpg">
                    <span class="textDontMove">Spencer</span>
                    <img src="icons/github.png">
                  </a>
                  <a href="http://www.linkedin.com/pub/spencer-handley/2b/8/2b1">  
                    <img src="icons/linkedin.gif">
                  </a>  
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/xue0chao">
                    <img class="circular" src="devTeam/chao.jpg">
                    <span class="textDontMove">Chao</span>
                    <img src="icons/github.png">
                  </a>
                  <a href="http://www.linkedin.com/pub/chao-xue/14/176/9a0">  
                    <img src="icons/linkedin.gif">
                  </a>  
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/alezucco">
                    <img class="circular" src="devTeam/ale.jpg">
                    <span class="textDontMove">Alejandro</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div>  
              </div>

              <div class="row">

               <div class="col-md-2 col-sm-4 col-xs-6">
                 <a href="https://github.com/fsbatista">
                    <img class="circular" src="devTeam/felipe.jpg">
                    <span class="textDontMove">Felipe</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div> 

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/warrenty">
                    <img class="circular" src="devTeam/warren.jpg">
                    <span class="textDontMove">Warren</span>
                    <img src="icons/github.png">
                  </a>
                  <a href="http://www.linkedin.com/pub/warren-tang/1a/a5b/7b9">  
                    <img src="icons/linkedin.gif">
                  </a>  
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/bace135">
                    <img class="circular" src="devTeam/bryan.jpg">
                    <span class="textDontMove">Bryan</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/morgantheplant">
                    <img class="circular" src="devTeam/morgan.png">
                    <span class="textDontMove">Morgan</span>
                    <img src="icons/github.png">
                  </a>  
                  <a href="http://www.linkedin.com/in/morganplant">
                    <img src="icons/linkedin.gif">
                  </a>  
                </div> 

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/sebastiandelgado">
                    <img class="circular" src="devTeam/seb.jpg">
                    <span class="textDontMove">Sebastian</span>
                    <img src="icons/github.png">
                  </a>
                  <a href="http://www.linkedin.com/pub/sebastian-delgado/38/9b/3a5">  
                    <img src="icons/linkedin.gif">
                  </a>  
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/polynickglot">
                    <img class="circular" src="devTeam/nickl.png">
                    <span class="textDontMove">Nick</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div>
              </div>

              <div class="row">
                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/radicalsauce">
                    <img class="circular" src="devTeam/kelly.jpg">
                    <span class="textDontMove">Kelly</span>
                    <img src="icons/github.png">
                  </a>
                  <a href="https://www.linkedin.com/in/krhale">  
                    <img src="icons/linkedin.gif">
                  </a>  
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/allenjprice">
                    <img class="circular" src="devTeam/allen.jpg">
                    <span class="textDontMove">Allen</span>
                    <img src="icons/github.png">
                  </a>
                  <a href="http://www.linkedin.com/pub/allen-price/91/882/583">  
                    <img src="icons/linkedin.gif">
                  </a>  
                </div> 

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/adzample">
                    <img class="circular" src="devTeam/adam.jpg">
                    <span class="textDontMove">Adam</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/darkstar21">
                    <img class="circular" src="devTeam/mike.jpg">
                    <span class="textDontMove">Mike</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/tgrrtt">
                    <img class="circular" src="devTeam/tyler.jpg">
                    <span class="textDontMove">Tyler</span>
                    <img src="icons/github.png">
                  </a>
                  <a href="http://www.linkedin.com/pub/tyler-garrett/9a/268/10b">  
                    <img src="icons/linkedin.gif">
                  </a>  
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6">
                  <a href="https://github.com/Pouncealot">
                    <img class="circular" src="devTeam/jasper.jpg">
                    <span class="textDontMove">Jasper</span>
                    <img src="icons/github.png">
                  </a>  
                    <img src="icons/linkedin.gif">
                </div>  
              </div>    
            </div>
          </div>   
        </div>
      )
  }
})

module.exports = TEAM;
