import { launch } from './helper/functions.js';

import { low } from '../third_party/low.js';
import { lodash } from '../third_party/lodash.min.js';
import { LocalStorage } from '../third_party/LocalStorage.min.js';

import { string_json } from './types/string_json.js';


export class client {
    constructor( placeholder_json ) {
		
		this.error = {};
        this.placeholder_json = placeholder_json; //May possible remove
		this.json = { 
			"jquery_ajax_success": "jquery_ajax_success",
			"placeholder_json": this.placeholder_json
		};
		this.adapter = new LocalStorage('db');
		this.db = low(adapter);
    };

	static get db() {
		return db;
		this.string_json = new string_json( "" );
		
    };

	static get string_json () {
		return this.string_json;
	}
    static get json() {
        return ( ( !this.json ) ? ( json.error = { ...this.error, ...{} } ) ? ( this.json ) : ( {} ) : ( this.json ) );
    };
    static set json( placeholder_json ) {
		this.error = {};
		this.json = { ...this.json, ...this.placeholder_json };
		this.placeholder_json = placeholder_json;
		this.json.placeholder_json = this.placeholder_json;
		this.json.merge_json_with = merge_json_with;
    };

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