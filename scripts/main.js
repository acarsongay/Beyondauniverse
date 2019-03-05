import { client } from './client.js';
var json;

json =  { 
	"type":"block",
	"label": "",
	"functions": {
		"new_date":"var date = new Date().toISOString(); date",
		"uuid":"var uuid = uuidv1(); uuid"
	},
	"placeholder_json": {
		"new_date":"var date = new Date().toISOString(); date",
		"uuid":"var uuid = uuidv1(); uuid",
		"text":"TEST", 
		"include_docs":true,
		"descending":true
	},
	"jquery_ajax_url":"./base_types.json"
}

var user_client = new client( json );

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
