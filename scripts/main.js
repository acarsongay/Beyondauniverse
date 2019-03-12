/*
 * File Header
 */
 
import { client } from './client.js';

/*
 *
 */
const new_client = async ( placeholder_json ) => await new client ( placeholder_json );
const user_client = async( placeholder_json ) => new_client( placeholder_json ).then( placeholder_json => placeholder_json );
const launch = async ( placeholder_json ) => {
    try {
        return user_client( placeholder_json ).then( ( placeholder_json => placeholder_json ) );
    } catch (err) {
        return err;
    } finally {
        console.log( "Not sure when to use this");
    }
};

launch({ "placeholder_json": { "callback": "console.log( placeholder_json )" } }).then( live_client => {
    console.log( live_client );


    /** @namespace live_client.json */
    live_client.json.new_async_library_with_placeholder_json( live_client )
        .then ( ( async_library => {
            console.log( async_library );

            let json = {
                ...live_client.json,
                ...async_library
            };
            console.log( {"json": json, "live_client": live_client, "async_library": async_library} );
        } ) );
});
