/*
 * File Header
 */

import { launch } from './helper/functions.js';

import { string_json } from './types/string_json.js';


export class client {
	
	/*
	 * 
	 */
    constructor( placeholder_json ) {
		this.json = { 
			...placeholder_json,
			...{
				"error": null,
				"pouchdb": "pouchdb",
				"memory":  "memory",
				"placeholder_json": placeholder_json,
				"jquery_ajax_success": "jquery_ajax_success"
			}
		};
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
        return ( this.json );
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
		 return ( this.db = async_await_new_pouch_db_default_url( placeholder_json ) )  ? placeholder_json : placeholder_json;;
	 }
	 
	 /*
	  *
	  */
	  async_await_new_pouch_db_default_url = async ( placeholder_json ) => {
		  return await new PouchDB('http://localhost:5984/database')
	  }
	 
	
	/*
	 *
	 */
	async_show_db = async ( placeholder_json ) => {
		return await this.db.allDocs( placeholder_json.async_show_db_all_docs, placeholder_json.async_show_db_function );
	}
	
	
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
		return await return JSON.flatten( placeholder_json );
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
	 
    launch() {
        this.json["launch_results"] = launch( this.json["placeholder_json"] );
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