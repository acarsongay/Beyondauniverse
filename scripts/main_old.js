
/*
var json = {
	"local_db": new PouchDB('http://localhost:5984/pouchdb'),
	"browser_db": new PouchDB('browser_db'),
	"memory":  new PouchDB('memory', {adapter: 'memory'}),
	"placeholder_json": {},
	"jquery_ajax_success": "jquery_ajax_success",
	"type":"block",
	"block": [ "labels","functions","placeholder_json","jquery_ajax" ],
	"eval": "jquery_ajax_block",
	"labels": "labels.json",
	"functions": "functions.json",
	"function_map_default":"async_function_map",
	"async_local_db": "async_new_local_db",
	"async_show_db_all_docs": {
		"include_docs":true,
		"descending":true
	},
	"local_db": "this.async_local_db",
	"async_show_db_function": "function( document) { return document; }",
	"placeholder_json": {"value":"placeholder_json.json"},
	"jquery_ajax": "base_types.json",
	"callback": "async_show_local_db"
}
*/
var json_defaults = { "local_db": null };
var json_default_overrides = {
	"default_url":"http://localhost:5984/pouchdb",
	"local_db":async ( placeholder_json ) => {
		console.log( placeholder_json );
			return await new PouchDB(placeholder_json.default_url); //Hm
		}
}
json_default_overrides = { 
	"error": "null",
	"return_document":"async_function_return_document",
	"local_db": new PouchDB('http://localhost:5984/pouchdb'),
	"browser_db": new PouchDB('browser_db'),
	"memory":  new PouchDB('memory', {adapter: 'memory'}),
	"placeholder_json": {},
	"jquery_ajax_success": "jquery_ajax_success",
	"type":"block",
	"block": [ "labels","functions","placeholder_json","jquery_ajax" ],
	"eval": "jquery_ajax_block",
	"labels": "labels.json",
	"functions": "functions.json",
	"function_map_default":"async_function_map",
	"async_show_db_all_docs": {
		"include_docs":true,
		"descending":true
	},
	"local_db": json_default_overrides.local_db( json_default_overrides ),
	"async_show_db_function": "function( document) { return document; }",
	"placeholder_json": {"value":"placeholder_json.json"},
	"jquery_ajax": "base_types.json",
	"callback": "async_show_local_db_with_client_json"
};

var function_defaults = {
	"async_function_new_pouchdb_with_http_localhost_5984_pouchdb":null
};
var function_default_overrides = {
	"function_return_null": function ( ) {
		return null;
	},
	"async_show_local_db": async function( placeholder_json ) {
		console.log( placeholder_json );
		return (
			await (
				placeholder_json.local_db.allDocs( 
					placeholder_json.async_show_db_all_docs,
					placeholder_json.return_document 
				)
				.then(
					response => response
				)
				.catch(
					() => 'ERROR'
				)
			)
		);		
	},
	"show_db":"async_show_db",
	"async_placeholder_json_rocket_return_await_null": async function( placeholder_json ) {
		return await null; //Hm
	},
	"async_document_rocket_return_document": async ( document ) => {
		return document;
	}
};

var json;
var async_function_map;
var string_async_function_map;
var string_functions;
var function_map;
var functions;
var errors;
( json = json_defaults ) && 
( json = {...json, ...json_default_overrides} ) && 
( functions = function_defaults ) && 
( functions = function_default_overrides ) ? console.log( json ) : console.log( json.error ? json.error : "Wozers" ) ;



string_async_function_map = "async_placeholder_json_rocket_return_await_null_with_async_function_return_null_from_placehold_json_semicolen_async_document_rocket_return_document_with_async_function_return_document_and_return_document";
async_function_map = {
	"async_show_db": {
		
	},
	"async_placeholder_json_rocket_return_await_null": {
		"with":"async_function_return_null_from_placehold_json"
	},
	"async_document_rocket_return_document": {
		"with":"async_function_return_document",
		"and":"return_document"
	}
};
function_map = { "type":"function_map", ...json.function_map_default };
string_functions = {
	"async":[
		"async_document_rocket_return_document"
	]
}