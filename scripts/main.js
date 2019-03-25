/*
 * File Header
 * acg  3/24/2019   Comment
 *
 */
 
import { client } from './client.js';


client.new_client ( ( {"checkout":"hello_world"} ) )
    .then( response => {
        console.log( response );
        response["#destroy_self_private_keys"](response).next().then(response=>{
            console.log(response);
        })
    }).catch( error => {
    return error;
});


