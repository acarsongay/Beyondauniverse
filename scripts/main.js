import { client } from './client.js';

var user_client = new client( { "type":"block", "label": "", "placeholder_json": {} , "jquery_ajax_url":"./base_types.json" } );

console.log ( user_client.json );

console.log ( user_client.merge_json_and_placeholder_json() );

console.log ( user_client.merge_json_with ( {"type":"updated_block"} ) );

console.log ( user_client.merge_json_with_no_override ( {"type":"updated_block_unknown","did":"did"} ) );

console.log ( user_client.json_stringify( ) );

console.log ( user_client.json_flatten( ) );

console.log ( user_client.jquery_ajax( ) );

console.log ( user_client.merge_json_with_jquery_ajax( ) );

console.log ( user_client.json );
user_client.db.set('user.name', 'typicode').write();

console.log( user_client.db.getState( ) );

