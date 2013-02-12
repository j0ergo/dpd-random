
/**
 * Module dependencies
 */

var Resource       = require('deployd/lib/resource'),
    util           = require('util'),
    random         = require('random');

/**
 * Module setup.
 */

function Random( options ) {

  Resource.apply( this, arguments );
}

util.inherits( Random, Resource );

Random.prototype.clientGeneration = true;


/**
 * Module methodes
 */

Random.prototype.handle = function ( ctx, next ) {

  var options = {};
  var randomCallback = function(string){
    console.log("Response Data: " + string);
    ctx.done( null, string[0] );
  }
  var errorCallback = function(type, code, string){
    console.log("RANDOM.ORG Error: Type: "+type+", Status Code: "+code+", Response Data: "+string);
    ctx.done("something went wrong");
  }
  random.generateStrings(randomCallback, options, errorCallback);
};

/**
 * Module export
 */

module.exports = Random;