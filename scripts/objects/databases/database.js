
import { base } from '../type/base.js';

export class database extends base {
	constructor( placeholder_json = {"this": {"this": {}}}) {
        return {
            ...placeholder_json,
            ... ( (placeholder_json.hasOwnProperty( 'this' ) ) ? super( placeholder_json['this'] ) : super( placeholder_json ) ),
            ...{
                "host":null,
                "local_db": null,
                "browser_db": null
            },
            ...{
                "default_host": null,
                "default_local_db":null,
                "default_browser_db":null
            },
            ...{
                "default_db":"pouchdb",
            },
            ... {
                "default_local_db":"pouchdb",
                "default_host":"http://localhost:5984/database"
            },
            ...{
                "self": ( this )
            }

        };
	}
    "#destroy_uneeded_keys" = async ( placeholder_json ) => {
        return await placeholder_json.database["#destroy_uneeded_keys"]( placeholder_json.regex = /(default|defaults|async|self|this|destroyed|deleted|db)/ ? placeholder_json : () => 'ERROR' );
    };
	new_pouch_db_with_default_host = async ( placeholder_json ) => {
		return await new PouchDB('http://localhost:5984/database');
	};
	
	new_browser_db_with_default_browser_db_name = async ( placeholder_json ) => {
		return await new PouchDB( placeholder_json.default_browser_db_name );
	};
}