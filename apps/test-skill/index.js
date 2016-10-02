module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var recipe = require( './recipe.json' );
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

app.intent('testRecipe',
  {
  "utterances":[ 
    "Test my stuff"]
  },
  function(request,response) {
    response.say(+ recipe.recipe.directions[0].step);
  }
);
module.exports = app;