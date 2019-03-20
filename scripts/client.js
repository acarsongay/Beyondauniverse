/*
 * File Header
 */

import { base } from './base.js';
import { async_library } from './async_library.js'

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
			...{
				"self": ( this )
			}
		};
	}

	/*
	 * properties defined as strings with a symbol in front of the variable name will be destroy during the construction phase.
	 */
	"#destroy_client" = async ( placeholder_json ) => {
    	return await Promise.all(
    		Object.keys( placeholder_json )
				.map(async key =>
					await delete placeholder_json [ key ] ) )
			.then( async response =>
				await ( placeholder_json.destroyed = response ) ? placeholder_json : () => 'ERROR' );
	};

    static new_client = async ( placeholder_json ) =>  await new this ( placeholder_json );


	/*
	 * 
	 */
	static get db() {
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
	static get memory() {
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
    static get json() {
        return ( this.hasOwnProperty("json") ) ? this.json : () => 'error_this_does_not_have_property_json';
    };
}