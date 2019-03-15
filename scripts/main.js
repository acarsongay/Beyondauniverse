/*
 * File Header
 */
 
import { client } from './client.js';


client.launch({
    "library":"default_library",
    "placeholder_json": {
        "callback": "console.log( placeholder_json )"
    }
}).then( live_client => {
    console.log( live_client );
    client.has_key_default( live_client ).then( results => {
        console.log( results );
        console.log(  live_client );
        client.async_delete_default_keys( live_client ).then( results => {
            console.log( results );
            console.log(  live_client );
            client.async_delete_all_undefined_in_placeholder_json( live_client ),then ( results => {
                console.log( results);
                console.log( live_client );
            })
        })
    });
});
