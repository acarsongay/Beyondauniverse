export class symbol extends Symbol {
    /**
     * @return {Symbol}
     */
    constructor ( placeholder_json ) {
        placeholder_json.await_new_symbol({...super(), ...placeholder_json }).then( response => {
            return response;
        });
    }

    await_new_symbol = async ( placeholder_json ) => {
        return await new Symbol();
    }
}