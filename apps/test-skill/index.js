module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var food = require( './recipe.json' );
var app = new alexa.app( 'test-skill' );

app.launch( function( request, response ) {
	response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('askRecipe',
  {
	"utterances":[ 
		"What am I cooking?",
    "What is for dinner?",
    "What recipe is loaded?",
    "What am I making?"]
  },
  function(request,response) {
    response.say("The recipe I have prepared is " + food.recipe.name);
  }
);
module.exports = app;