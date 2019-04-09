export class audio extends Audio {
    constructor( placeholder_json ) {
        return super( placeholder_json.url );
    }

    static await_new_audio = async ( placeholder_json ) => {
        return await new audio ( placeholder_json );
    }
}