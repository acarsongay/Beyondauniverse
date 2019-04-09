/*
 * File Header
 * acg  3/24/2019   Comment
 *
 */

import {client} from './objects/client.js';

let promise_new_client = client.new_client().then(  response => {
        return response;
    }).catch( error =>  {
        return error;
});

let promise_ready_new_client = promise_new_client.then( response => {

    let promise_response_new_client_super_merge_super_on_top = response.new_client["#super"]["#merge_super_on_top"](response.new_client).then(new_client => {
        return new_client;
    });

    /*
    let promise_new_client_setup_library = promise_response_new_client_super_merge_super_on_top.then( new_client => {
        return new_client.library["#setup"](new_client.library).then(ready_library => {
            return ready_library;
        })
    });
*/
    return promise_response_new_client_super_merge_super_on_top.then(new_client => {
        return new_client["#setup"](new_client).then(ready_client => {
            return ready_client;
        })
    });
});

promise_ready_new_client.then(response => {
    console.log( response );
})



