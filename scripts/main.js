import { client } from './client.js';

var user_client = new client( { "type":"block", "label": "", "placeholder_json": {} } );
user_client.launch();
console.log(  user_client.json.launch_results );



