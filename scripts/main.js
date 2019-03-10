/*
 * File Header
 */
 
import { client } from './client.js';

var json;
var async_function_map;
var string_async_function_map;
var string_functions;
var function_map;
var functions;
var errors;
(json = {
	"local_db": null
})
?
json =  { 
	"default_url":"http://localhost:5984/pouchdb",
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
	"local_db": 
	( json.local_db = 
		async (  ) => {
			return await new PouchDB(json.default_url); //Hm
		}
	) ? json.local_db( ) : "ERROR",
	"async_show_db_function": "function( document) { return document; }",
	"placeholder_json": {"value":"placeholder_json.json"},
	"jquery_ajax": "base_types.json",
	"callback": "async_show_local_db"
}
?
(functions =  {
	"async_function_new_pouchdb_with_http_localhost_5984_pouchdb":null
}) &&
(
functions = {
	"function_return_null": function ( ) {
		return null;
	},
	"async_show_local_db": async function( placeholder_json ) {
		console.log( this );
		return (
			await (
				this.local_db.allDocs( 
					this.async_show_db_all_docs,
					this.return_document 
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
})
:
errors = {
	"null":"function_return_null"
}
:
errors = {
	"null":"function_return_null"
};


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

try {
new client( { ...json, ...functions } );
} catch (err) {
	console.log(err);
}