/*
 * File Header
 */

import { launch } from './helper/functions.js';
import { base } from './base.js';
import { async_library } from './async_library.js'
import { pouchdb } from './pouchdb.js';

import { string_json } from './types/string_json.js';

function return_new_function_args_use_strict_return_this_placeholder_json_callback_with_placeholder_json( placeholder_json ) {
	return new Function("'use strict'; return this." + placeholder_json.callback + "()" ).call( placeholder_json );
}
function return_new_function_args_use_strict_return_this_placeholder_json_callback_with_this( placeholder_json ) {
	return new Function("'use strict'; return this." + placeholder_json.callback + "()" ).call( this );
}


function turn( value ) {
	return value ? this : () => 'ERROR';
}
function double_turn( value ) {
	return turn( value ) ? this : () => 'ERROR';
}
function question( value, truthy, falsy ) {
	return question ? truthy : falsy;
}
function rocket_error( ) {
	return () => 'ERROR';
}




export class client extends base {
	/*
	 * Declarations
	 */
	json;

	/*
	 * 
	 */
    constructor( placeholder_json ) {
    	/*
    	 *
    	 */
		super( placeholder_json );

		/*
    	 * Null Assignments
    	 */
		this.json = {
			...this.json,
			...{
				"async_library":null,
				"default_async_library":null,
				"db":null,
				"default_db":null,
				"pouchdb": null,
				"default_pouchdb": null,
				"new_async_library_with_placeholder_json": null
			}
		};

		/*
    	 * Default Constructor Setup
    	 */
		this.json = {
			...this.json,
			...{
				"self" : "async_await_new_client_with_this_json",
				"async_library" : "new_async_library_with_placeholder_json",
				"pouchdb" : "async_await_new_pouchdb_with_placeholder_json",
				"new_async_library_with_placeholder_json":this.new_async_library_with_placeholder_json,
				"placeholder_json" : placeholder_json,
				"error" : this.json.error,
				"callback" : placeholder_json.callback ? placeholder_json.callback : "default_callback"
			}
		};

		/*
    	 * Safe Merge (keep this.json over given placeholder_json)
    	 */
		this.json = { ...placeholder_json, ...this.json };

		/*
    	 * Evaluate functions
    	 */
		this.json = {
			...this.json,
			...{

			}
		};

		
		//Override merge 
		// this.json = { ...this.json, ...placeholder_json }
		
		return new Function( "'use strict'; return this." + this.json [ this.json.callback ] ).call( this.json ) && this;
    };

	/*
	 * 
	 */
	static get db() {
		return ( this.json ? this.json.db : () => 'static_get_db_error');
    };
	
	/*
	 *
	 */
	static get memory() {
		return ( this.json ? this.json.memory : () => 'static_get_memory_error');
	};
	
	/*
	 *
	 */
    static get json() {
        return this.json;
    };
	
	/*
	 *
	 */
	static get placeholder_json() {
		return this.json.placeholder_json;
	}
	
	/*
	 *
	 */
    static set json( placeholder_json ) {
		this.json = { ...this.json, ...placeholder_json };
    };
	
	/*
	 *
	 */
	static set placeholder_json( placeholder_json ) {
		this.json.placeholder_json = placeholder_json;
		this.placeholder_json = placeholder_json;
	}

	/*
	 *
	 */
	static set delete_placehholder_json( placeholder_json ) {
		this.json.placeholder_json = placeholder_json;
		this.json.delete_placeholder_json = delete this.placeholder_json;
		return this.json;
	}

	/*
	 *
	 */
	static set delete_json_placehholder_json( placeholder_json ) {
		return this.json.placeholder_json = this.json.delete_json_placeholder_json = delete this.json.placeholder_json && placeholder_json && this.json;
	}

	new_async_library_with_placeholder_json = async ( placeholder_json ) => await new async_library( placeholder_json );
}