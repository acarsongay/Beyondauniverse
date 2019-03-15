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
				"default_library":null,
				"default_db":null
			}
		};

		/*
    	 * Default Constructor Setup
    	 */
		this.json = {
			...this.json,
			...{
				"self" : { ...this.json.self, ...{ "type":"client" } },
				"pouchdb" : "async_await_new_pouchdb_with_placeholder_json",
				"default_library":"async_library",
				"default_db":"pouchdb",
				"async_library": "new_async_library_with_placeholder_json",
				"async_default_self": "this.async_default_self ( this )",
				"placeholder_json" : placeholder_json,
				"callback" : placeholder_json.callback ? placeholder_json.callback : "default_callback"
			}
		};

		/*
    	 * Safe Merge (keep this.json over given placeholder_json)
    	 */
		this.json = { ...placeholder_json, ...this.json };

		/*
		 * Export Functions
		 */

		 this.json = {
			...{
				"new_async_library_with_placeholder_json":this.new_async_library_with_placeholder_json
			},
		 	...this.json

		 };
		/*
    	 * Evaluate functions
    	 */
		this.json = {
			...this.json,
			...{

			}
		};

		return {...this.json, ...{"self": { ...this, ...this.json.self } } };
    };

    static has_key_default = async ( placeholder_json ) => {
		return await Object.keys(placeholder_json).some(function (key) {
			return /default/.test(key);
		});
	};

    static new_client = async ( placeholder_json ) => await new client ( placeholder_json );

    static user_client = async( placeholder_json ) => this.new_client( placeholder_json ).then( placeholder_json => placeholder_json );

    static launch = async ( placeholder_json ) => {
		try {
			return this.user_client( placeholder_json ).then( ( placeholder_json => placeholder_json ) );
		} catch (err) {
			return err;
		} finally {
			console.log( "Not sure when to use this");
		}
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