export class object extends Object {
    /**
     * @return {Object}
     */
    constructor ( placeholder_json ) {
        return object.await_new_object({ ...super( placeholder_json ), ...placeholder_json })
            .then( new_object => {
            return {...placeholder_json, ...{"new_object":new_object}};
        });
    }

    static await_new_object = async ( placeholder_json ) => {
        return await new Object( placeholder_json );
    }
}