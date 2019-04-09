import {object} from "./object.js"

export class json extends object {
    /**
     * @return {Object}
     */
    constructor ( placeholder_json ) {
        return super( placeholder_json );

        object.await_new_object({ ...super( placeholder_json ), ...placeholder_json })
            .then( new_json => {
                return {...placeholder_json, ...{"new_json":new_json}};
            });
    }

}