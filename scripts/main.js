/*
 * File Header
 */
 
import { client } from './client.js';

client.new_client ( {} ).then( response => {
    console.log ( response );
        response["#map_default_keys_to_original"]( response ).then( response => {
            response["#map_default_keys"]( response ).then( response => {
                response["#destroy_default_keys"]( response ).then( response => {
                    response["#map_all_keys"]( response ).then( response => {
                        response["#destroy_private_keys"]( response ).then( response => {
                            //From here you can access private functions locally through placeholder_json.self, however do NOT send self to another user on the network to avoid security vul.
                            console.log ( response );
                            
                            response.self["#destroy_uneeded_keys"]( response ).then( response => {
                                //From here it is safe to send over the network
                                console.log ( response );

                            })
                        })
                    });
                });
            });
        });

}).catch( error => {
    return error;
});

