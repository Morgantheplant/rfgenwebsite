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
         <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <h2>What this is:</h2>
                    I think you've let your personal feelings cloud your judgement. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Travel time to the nearest starbase? Fate. It protects fools, little children, and ships named "Enterprise." Now we know what they mean by 'advanced' tactical training. We know you're dealing in stolen ore. Yes, absolutely, I do indeed concur, wholeheartedly!
                </div>
                <div className="col-md-4 col-xs-12">
                  <h2>How it works:</h2>
                    The game's not big enough unless it scares you a little. Your shields were failing, sir. We have a saboteur aboard. It's better than music. It's jazz. What's a knock-out like you doing in a computer-generated gin joint like this?  We know you're dealing in stolen ore. I'm afraid I still don't understand, sir. They were just sucked into space. Now we know what they mean by 'advanced' tactical training. Fear is the true enemy, the only enemy. Mr. Worf, you do remember how to fire phasers? 
                </div>
                <div className="col-md-4 col-xs-12">
                  <h2>What this is:</h2>
                    Shields up! Rrrrred alert! You bet I'm agitated! I may be surrounded by insanity, but I am not insane. Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Mr. Crusher, ready a collision course with the Borg ship. Why don't we just give everybody a promotion and call it a night - 'Commander'? Well, I'll say this for him - he's sure of himself. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know.
                </div>
              </div> 
          </div>     
        </div>   
      </div>
      )
  }
})

module.exports = WHY;
