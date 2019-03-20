/*
 *
 */
import {enumeration} from "./enumeration.js";
import {async_library} from "./async_library.js";
import {string_json} from "./types/string_json.js";

export class base {

	//default constructor?
	constructor( placeholder_json ) {
		return {
			... ( (placeholder_json.hasOwnProperty( 'this' ) ) ? placeholder_json.this : this ),
			...placeholder_json,
			...{
				"type":null,
				"self": null,
				"placeholder_json": null,
				"error":null,
				"callback":null
			},
			...{
				"default_type": null,
				"default_self": null,
				"default_placeholder_json": null,
				"default_error": null,
				"default_callback":null
			},
			...{
				"boolean": null,
				"string": null,
				"number": null,
				"function": null,
				"object": null,
				"undefined": null
			},
			...{
				"default_type": "string",
				"default_self": "this",
				"default_placeholder_json": "string_json",
				"default_error":"boolean",
				"default_callback": "function"
			},
			...{
				"boolean": new Boolean(null),
				"string": new String( "" ),
				"number": Number( 0 ),
				"function": Function( 'placeholder_json', 'return placeholder_json'),
				"object": Object( {"object": {} } ),
				"undefined": undefined,
				"this":this
			},
			...{
				"string_json": new string_json( {} )
			},
			...{
				"async_library":new async_library( {} )
			}
		};
	}

	"#has_key_default" = async ( placeholder_json ) => {
		return await Object.keys(placeholder_json).some(function (key) {
			return /default/.test(key);
		});
	};
	"#destroy_default_keys" = async (placeholder_json ) => {
		return await Promise.all(
			Object.keys(placeholder_json).map(async key => {
				return (/^(default|defaults)/.test(key)) ? delete placeholder_json [ key ] ? key : () => 'error_delete_placeholder_json_key' : false;
			})
		).then( response => {
			return ( placeholder_json.deleted_keys = response ) ? ( placeholder_json ) : () => 'ERROR';
		});
	};
	"#destroy_type_keys" = async (placeholder_json ) => {
		return await Promise.all(
			Object.keys(placeholder_json).map(async key => {
				return (/^(string|symbol|boolean|function|undefined|number)/.test(key)) ? delete placeholder_json [ key ] ? key : () => 'error_delete_placeholder_json_key' : false;
			})
		).then( response => {
			return ( placeholder_json.deleted_keys = response ) ? ( placeholder_json ) : () => 'ERROR';
		});
	};
	"#destroy_uneeded_keys" = async ( placeholder_json ) => {
		return await Promise.all(
			Object.keys(placeholder_json).map(async key => {
				return (/(default|defaults|async|self)/.test(key)) ? delete placeholder_json [ key ] ? key : () => 'error_delete_placeholder_json_key' : false;
			})
		).then( response => {
			return ( placeholder_json.deleted_keys = response ) ? ( placeholder_json ) : () => 'ERROR';
		});
	};
	"#map_default_keys_to_original" = async (placeholder_json ) => {
		return await Promise.all(
			Object.keys(placeholder_json).map(async key => {
				return (/^(default|defaults)/.test(key)) ? placeholder_json [ key.substring(8,) ] = placeholder_json [ key ] ? key : () => 'error' : false;
			})
		).then( response => {
			return ( placeholder_json.deleted_keys = response ) ? ( placeholder_json ) : () => 'ERROR';
		});
	};
	"#map_default_keys" = async ( placeholder_json ) => {
		return await Promise.all(
			Object.keys(placeholder_json).map(async key => {
				return await  (
					placeholder_json.hasOwnProperty(key) &&
					placeholder_json.hasOwnProperty(placeholder_json[key]) &&
						/^(default|defaults)/.test(placeholder_json[key])
				) ? ( placeholder_json[key] = placeholder_json[placeholder_json[key]] ) ? placeholder_json[placeholder_json[key]] : placeholder_json[key] :
					placeholder_json[key];
			})
		).then( response => {
			console.log ( response );
			return ( placeholder_json.map_default_results = response ) ? ( placeholder_json ) : () => 'ERROR';
		});
	};
	"#map_all_keys" = async ( placeholder_json ) => {
		return await Promise.all(
			Object.keys(placeholder_json).map(async key => {
				return await placeholder_json.hasOwnProperty(key) && placeholder_json.hasOwnProperty(placeholder_json[key]) ?
					placeholder_json[key] = placeholder_json[placeholder_json[key]] ? placeholder_json[placeholder_json[key]] : placeholder_json[key] :
					placeholder_json[key];
			})
		).then( response => {
			console.log ( response );
			return ( placeholder_json.map_default_results = response ) ? ( placeholder_json ) : () => 'ERROR';
		});
	};
	"#destroy_private_keys" = async ( placeholder_json ) => {
		return await Promise.all(
			Object.keys( placeholder_json ).map(async key => {
				return ( /#/.test( key ) ) ? delete placeholder_json [ key ] ? key : () => 'error_delete_placeholder_json_private_hash_key' : false;
			})
		).then( response => {
			return ( placeholder_json.destroyed_private_keys = response ) ? ( placeholder_json ) : () => 'ERROR';
		});
	};
	"#destroy_self_private_keys" = async ( placeholder_json ) => {
		return await Promise.all(
			Object.keys( placeholder_json ).map(async key => {
				return ( /#/.test( key ) ) ? delete placeholder_json [ key ] ? key : () => 'error_delete_placeholder_json_private_hash_key' : false;
			})
		).then( response => {
			return ( placeholder_json.destroyed_private_keys = response ) ? ( placeholder_json ) : () => 'ERROR';
		});
	};


}