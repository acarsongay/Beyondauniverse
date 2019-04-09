/*
 * File Header
 */

import { base } from './type/base.js';
import { library } from './library/library.js'
import { database } from './databases/database.js'
import {block} from "./type/block.js";

export class client extends base {
    constructor(
    	placeholder_json = {
    		"placeholder_json": null,
			"json": null,
			"db": null,
			"graphics": null,
			"memory": null,
			"this": null
    	}) {
    	return {
			...(placeholder_json.hasOwnProperty("this") ?
				placeholder_json["#super"] = super(placeholder_json["this"]) :
				placeholder_json["#super"] = super(placeholder_json)) ? placeholder_json : () => "error_client_constructor_this",
    		...{
				"constructor_placeholder_json":null
			},
    		...{
    			"constructor_placeholder_json": placeholder_json
			},
			...{
				"database": null,
				"library": null,
				"block": null
			},
			...{
				"default_database": null,
				"default_library": null,
				"default_block": null
			},
			...{
				"default_database": "database",
				"default_library": "async_library",
				"default_block": "empty_block"
			},
			... {
				"new_database": new database,
				"new_library": new library,
				"new_block": new block
			},
			... {
				"empty_database": "new_database",
				"empty_block": "new_block",
				"empty_library": "new_library"
			},
			...{
				"pouchdb": new database({...{"default_database":"pouchdb"}}),
				"async_library": new library({...{"default_library":"async"}})
			}
    	};
	}

    static new_client = async ( placeholder_json ) =>  await {...{ "constructed_placeholder_json": placeholder_json }, ...{ "new_client": new this( placeholder_json ) } };

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

    /*
	 *
	 */
    get placeholder_json() {
        return ( this.hasOwnProperty("placeholder_json") ) ? this.placeholder_json : () => 'error_this_does_not_have_property_placeholder_json';
    };
}