/*
 * File Header
 */
 
import { client } from './client.js';

const new_client = async ( placeholder_json ) => {
	return ( await ( new client( placeholder_json ) ) );
};
try {
	new_client( { } ).then( placeholder_json => {
		console.log(placeholder_json);

		placeholder_json.json.async_library.async_new_callback( placeholder_json ).then(( placeholder_json ) => {
			//placeholder_json.placeholder_json = placeholder_json;

			//console.log ( placeholder_json );
		});
	});
} catch (err) {
	console.log(err);
}