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
app.intent('askIngredients',
  {
  "utterances":[ 
    "What do I need to start",
    "What are the ingredients",
    "What is the recipe list"]
  },
  function(request,response) {
    var recipeList = "For this recipe you will need the following. ";
    for (var i = food.ingredients.length - 1; i >= 0; i--) {
      if (food.ingredients[i].quantity == "") {
        recipeList += food.ingredients[i].name + "";
      }
      else if(food.ingredients[i].unit == ""){
        recipeList += food.ingredients[i].quantity + " of " + food.ingredients[i].name;
      }
      else {
        recipeList += food.ingredients[i].quantity + " " + food.ingredients[i].unit + " of " + food.ingredients[i].name;
      }
      if (food.ingredients[i].prep != "") {
        recipeList += " " + food.ingredients[i].prep + ". ";
      }
      else {
        recipeList += " . ";
      }
    response.say(recipeList);
    }
  }
);
module.exports = app;