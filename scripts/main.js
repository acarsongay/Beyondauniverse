/*
 * File Header
 */
 
import { client } from './client.js';
var json;

json =  { 
	"error": null,
	"return_document":function return_document( document ) {
		return document;
	},
	"local_db": new PouchDB('http://localhost:5984/pouchdb'),
	"memory":  new PouchDB('memory', {adapter: 'memory'}),
	"placeholder_json": {},
	"jquery_ajax_success": "jquery_ajax_success",
	"type":"block",
	"block": [ "labels","functions","placeholder_json","jquery_ajax" ],
	"eval": "jquery_ajax_block",
	"labels": "labels.json",
	"functions": "functions.json",
	"async_show_db_all_docs": {
		"include_docs":true,
		"descending":true
	},
	"async_show_db_function": "function( document) { return document; }",
	"placeholder_json": {"value":"placeholder_json.json"},
	"jquery_ajax": "base_types.json",
	"callback": "async_show_local_db_with_this_json_then_console_log_response"
}

try {
	new client( json );
} catch (err) {
	console.log(err);
}
/*
try {
	user_client.async_add_todo_in_memory( 
		user_client.placeholder_json 
	).then( 
		response => user_client.async_show_memory( response )
		.then( 
			response => console.log( response ) 
		)
	);
} catch (err) {
  console.log(err);
}
*/










/*
console.log ( user_client.json );

console.log ( user_client.merge_json_and_placeholder_json() );

console.log ( user_client.merge_json_with ( {"type":"updated_block"} ) );

console.log ( user_client.merge_json_with_no_override ( {"type":"updated_block_unknown","did":"did"} ) );

console.log ( user_client.json_stringify( ) );

console.log ( user_client.json_flatten( ) );

console.log ( user_client.jquery_ajax( ) );

console.log ( user_client.merge_json_with_jquery_ajax( ) );

console.log ( user_client.json );
*/

//console.log( user_client.add_todo_in_memory( " Work on client side db"  ) );
//user_client.show_todos( );
//user_client.show_todos_in_memory( );
//user_client.merge_todos_in_memory_with( user_client.db );
//user_client.show_todos( );
//user_client.show_todos_in_memory( );
//console.log ( user_client.string_json );

//console.log( user_client.add_todo_in_memory( " Work on client side db"  ) );

//user_client.add_todo_in_memory(user_client.placeholder_json).then(response => user_client.show_memory( response ) );

//user_client.add_todo(user_client.placeholder_json).then( response => user_client.show_db( response ) );

//user_client.all_dbs( user_client.placeholder_json ).then( response => console.log( response ) );
//user_client.add_todo("Working on adding todo client side db").then(response => user_client.merge_todos_in_memory_with( response ).then(response => user_client.add_todo( response ) ); );
