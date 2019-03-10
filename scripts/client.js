/*
 * File Header
 */

import { launch } from './helper/functions.js';

import { string_json } from './types/string_json.js';

function glob( placeholder_json ) {
	console.log(placeholder_json);
	return new Function("'use strict'; return this." + placeholder_json.callback + "()" ).call( placeholder_json );
}
function glob_this( placeholder_json ) {
	console.log(placeholder_json);
	return new Function("'use strict'; return this." + placeholder_json.callback + "()" ).call( this );
}

function double_turn( value ) {
	return value ? this : () => 'ERROR';
}
function question( value, truthy, falsy ) {
	return question ? truthy : falsy;
}
function rocket_error( ) {
	return () => 'ERROR';
}

export class client {
	
	/*
	 * 
	 */
    constructor( placeholder_json ) {
		return question(
			this.json = { ...this.json, ...placeholder_json, ...{ "placeholder_json":placeholder_json } },
			question( 
				glob( placeholder_json ),
				rocket_error( )	
			),
			rocket_error( )	
		);
		
		
		
		
		
		this.json = { ...this.json, ...placeholder_json, ...{ "placeholder_json":placeholder_json } } 
		
		if(this.json) {
			if(new Function("'use strict'; return this." + placeholder_json.callback + "()" ).call( this )) {
				return this;
			} else {
				return () => 'ERROR'
			}
		} else {
			() => 'ERROR'
		}
    };


	/*
	 * 
	 */
	static get db() {
		return this.json.db;		
    };
	
	/*
	 *
	 */
	static get memory() {
		return this.json.memory;
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
	async_new_websql_db = async ( placeholder_json ) => {
		return ( this.db = await new PouchDB('database', {adapter: 'websql'}) ) ? placeholder_json : placeholder_json;
	}
	
	/*
	 *
	 */
	 async_new_pouchdb_couchdb = async ( placeholder_json ) => {
		 return ( placeholder_json.db = async_await_new_pouchdb_default_url( placeholder_json ) )  ? placeholder_json : placeholder_json;;
	 }
	 
	 /*
	  *
	  */
	  async_await_new_pouchdb_default_url = async ( placeholder_json ) => {
		  return await new PouchDB('http://localhost:5984/pouchdb').then(response => response).catch(() => 'ERROR');
	  }
	 
	/*
	 *
	 */
	async_show_local_db = async ( placeholder_json ) => {
		return (
			await (
				placeholder_json.local_db.allDocs( 
					placeholder_json.async_show_db_all_docs,
					placeholder_json.return_document 
				)
				.then(
					response => response
				)
				.catch(
					() => 'ERROR'
				)
			)
		);		
	}
	async_show_local_db_with_this_json_then_console_log_response  = async ( placeholder_json ) => {
		return await placeholder_json.async_show_local_db( placeholder_json ).then( response => console.log( response ) );		
	}
	
	/*
	 *
	 */
	async_document_rocket_return_await_document = async ( document ) => {
		return await document;
	}
	
	return_document = function( document ) {
		return document;
	}
	
	/*
	 *
	 */
	async_show_db = async ( placeholder_json ) => {
		return await placeholder_json.db.allDocs( 
			placeholder_json.async_show_db_all_docs, 
			placeholder_json.async_document_rocket_return_await_document );
	};
	
	
	/*
	 *
	 */
	async_all_dbs = async ( placeholder_json ) => {
		return await PouchDB.allDbs(function callback(err, response) {
				if (!err) {
					return {...this.placeholder_json, ...response};
				}
			})
			.then(response => response)
			.catch(() => 'ERROR');
	}
	
	
	/*
	 *
	 */
	async_show_memory = async ( placeholder_json ) => {
		return await this.memory.allDocs( {
				include_docs: placeholder_json.include_docs, 
				descending:  placeholder_json.descending
			}, function callback(err, response) {
				if (!err) {
					console.log( response );
					console.log( placeholder_json );
					return {...placeholder_json, ...{"response": response}};
				}
			}
		).then(response => response).catch(() => 'ERROR');
	};
	
	/*
	 *
	 */
	async_add_todo = async ( placeholder_json ) => {
		return await this.db.put({
				"type":"todo",
				_id: eval("'use strict';" + placeholder_json.uuid),
				title: placeholder_json.add_todo_text,
				completed: false
			}, function callback(err, response) {
				if (!err) {
					return response;
				}
			})
			.then(response => response)
			.catch(() => 'ERROR');
	};
	
	/*
	 *
	 */
	async_pouchdb_put = async ( placeholder_json ) => {
		return await this.pouchdb.put({
				"type": placeholder_json.type,
				_id: eval("'use strict';" + placeholder_json.uuid),
				title: placeholder_json.add_todo_text,
				completed: false
			}, function callback(err, response) {
				if (!err) {
					return response;
				}
			})
			.then(response => response)
			.catch(() => 'ERROR');
	}
	
	/*
	 *
	 */
	async_add_todo_in_memory = async ( placeholder_json ) => {
		return await this.memory.put({
					"type":"todo",
					_id: eval("'use strict';" + placeholder_json.uuid),
					title: placeholder_json.text,
					completed: false
				}, function callback(err, response) {
					if (!err) {
						console.log( response );
						console.log( placeholder_json );
						return {...placeholder_json, ...{"response": response}};
					}
					console.log( err );
					console.log( response );
						console.log( placeholder_json );
				})
			.then(response => response)
			.catch(() => 'ERROR');;
	};
	
	/* 
	 *
	 */
	async_json_flatten_this = async ( placeholder_json ) => {
		return await JSON.flatten( placeholder_json );
	}
	
	/*
	 *
	 */
	 async_create_index = async ( placeholder_json ) => {
		 const response = this.db.createIndex( {
				"index": {
					"fields": placeholder_json.fields,
					"name": placeholder_json.name,
					"ddoc": placeholder_json.ddoc,
					"type": placeholder_json.type
				}
			})
			.then(response => response)
			.catch(() => 'ERROR');
	 }
	 
	 /*
	  *
	  */
	  launch = async ( placeholder_json ) => {
		  return (this.json["launch_results"] = launch( this.json["placeholder_json"] )) ? this.json : () => 'ERROR';
	  };
	  
	jquery_ajax( ) {
		return ( this.json.jquery_ajax = $.ajax(
		{
			type: 'GET',
			url: this.json.jquery_ajax_url,
			dataType: 'json',
			success: function ( data ) {
				this.json = { ...this.json, ...data }
			}
		}) ) ? this.json : false;
	}
	jquery_ajax_success( data ) {
		this.json = { ...this.json, ...data }
	}
	merge_json_with( placeholder_json ) {
		return ( ( this.json = { ...this.json, ...placeholder_json } ) ? this.json : this.error );
	};
	merge_json_with_jquery_ajax( ) {
		console.log("HERE");
		console.log( this.json);
		console.log( this.json.jquery_ajax );
		
		console.log( this.json.jquery_ajax["responseJSON"] );
		return ( ( this.json = { ...this.json, ...this.json.jquery_ajax } ) ? this.json : this.error );
	}
	merge_json_with_no_override( placeholder_json ) {
		return ( ( this.json = { ...placeholder_json, ...this.json } ) ? this.json : this.error );
	}
	merge_json_and_placeholder_json( ) {
		return ( this.json = { ...this.json, ...this.placeholder_json } ) ? this.json : this.error ;
	};
	json_stringify( ) {
		return JSON.stringify( this.json ) ;
	}
	placeholder_json_stringify( )  {
		return JSON.stringify( this.placeholder_json ) ;
	}
	json_flatten( ) {
		return JSON.flatten( this.json );
	}
	placeholder_json_flatten( ) {
		return JSON.flatten( this.placeholder_json );
	}
	
	
	jquery_ajax__( ) {
		return ( this.json.jquery_ajax = $.ajax(
		{
			type: 'GET',
			url: this.json.jquery_ajax_url,
			dataType: 'json',
			success: function ( data ) {
				return ( ( this.json = { ...this.json, ...data } ) ? this.json : this.error );
			}
		}).done(function() {
		  return this.merge_json_with( this.json.jquery_ajax.responseJSON );
		}) );
	}
	
	
	mustache_to_html( ) {
		return $( this.json.target ).html( Mustache.to_html ( eval ( this.json.template ), this.json_flatten( ) ) );
	}
}