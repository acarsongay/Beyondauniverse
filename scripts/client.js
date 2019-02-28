var functions = require(["./functions.js"]);

//console.log( functions.function_get_json( { 
//	"function_get_json_string_url" : "./story.js",
//	"function_get_json_callback_success" : "function( data ){ console.log( data ) }"
// } ) );
requirejs(["scripts/helper/functions"], function( functions ) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});