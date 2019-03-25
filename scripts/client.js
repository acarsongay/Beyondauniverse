/*
 * File Header
 */

import { base } from './base.js';
import { library } from './objects/library.js'
import { pouchdb } from './pouchdb.js'

export class client extends base {
    constructor( placeholder_json ) {
		return {
			...placeholder_json,
			... ( (placeholder_json.hasOwnProperty( 'this' ) ) ? super( placeholder_json.this ) : super( placeholder_json ) ),
			...{
				"db": null,
				"library": null
			},
			...{
				"default_db": null,
				"default_library": null
			},
			...{
				"default_db": "pouchdb",
				"default_library": "async_library"
			},
			... {
				"pouchdb": new pouchdb( {} )
			},
			...{
				"self": ( this )
			}



		}
	}


    static new_client = async ( placeholder_json ) =>  await new this ( placeholder_json );

	/*
	 * 
	 */
	get db() {
		return (
			this.hasOwnProperty("json")  ?
				this.json.hasOwnProperty("db") ?
					this.json.db :
					() => 'static_get_memory_this_json_does_not_have_property_db' :
				() => 'static_get_memory_this_does_not_have_property_json'
		);
    };
	
	/*
	 *
	 */
	get memory() {
		return (
			this.hasOwnProperty("json")  ?
				this.json.hasOwnProperty("memory") ?
					this.json.memory :
					() => 'static_get_memory_this_json_does_not_have_property_memory' :
				() => 'static_get_memory_this_does_not_have_property_json'
		);
	};
	
	/*
	 *
	 */
    get json() {
        return ( this.hasOwnProperty("json") ) ? this.json : () => 'error_this_does_not_have_property_json';
    };
}