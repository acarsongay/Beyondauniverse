/*
 *
 */
import { base } from './base.js';

/*
 *
 */
export class async_library extends base {

    /*
     *
     */
    constructor( placeholder_json ) {
        /*
         *
         */
        super( placeholder_json );

        /*
         *
         */
        this.json = { ...this.json, ...{ "placeholder_json" : placeholder_json } };

        /*
         *
         */
        return this;
    }

    /*
     *
     */
    async_placeholder_json_return_value_turnary_this_colon_rocket_error = async ( placeholder_json ) => {
        return placeholder_json.value ? this : () => 'ERROR'
    };

    /*
     *
     */
    async_safe_merge = async ( placeholder_json ) => {
        return await {...placeholder_json, ...this.json};
    };

    /*
	 *
	 */
    async_new_callback = async ( placeholder_json ) => {
        return await new Function("'use strict'; return " + placeholder_json[placeholder_json.callback]).call( placeholder_json )
    };

    /*
     *
     */
    async_new_websql_db = async ( placeholder_json ) => {
        return ( this.db = await new PouchDB('database', {adapter: 'websql'}) ) ? placeholder_json : placeholder_json;
    };

    /*
     *
     */
    async_new_pouchdb_couchdb = async ( placeholder_json ) => {
        return ( placeholder_json.db = async_await_new_pouchdb_default_url( placeholder_json ) )  ? placeholder_json : placeholder_json;;
    };

    /*
     *
     */
    async_await_new_pouchdb_default_url = async ( placeholder_json ) => {
        return await new PouchDB('http://localhost:5984/pouchdb').then(response => response).catch(() => 'ERROR');
    };

    async_new_local_db = async ( placeholder_json ) => {
        console.log( placeholder_json );
        return await new PouchDB( placeholder_json.default_url );
    };

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
    };
    async_show_local_db_with_client_json = async (  ) => {
        return (
            await (
                    this.json.local_db.allDocs(
                    this.json.async_show_db_all_docs,
                    this.json.return_document
                )
                .then( ( response => ( this.json.response = response ) && response ) )
                .catch( ( ( this.json.onrejected = ( ( ) => 'ERROR' ) ) && this.json.onrejected ) )
            )
        );
    };
    async_show_local_db_with_this_json_then_console_log_response  = async ( placeholder_json ) => {
        return await placeholder_json.async_show_local_db( placeholder_json )
            .then( ( response => ( this.json.response = response ) && response ) )
            .catch( ( ( this.json.onrejected = ( ( ) => 'ERROR' ) ) && this.json.onrejected ) );
    };

    /*
     *
     */
    async_document_rocket_return_await_document = async ( document ) => {
        return await document;
    };

    return_document = function( document ) {
        return document;
    };

    /*
     *
     */
    async_show_db = async ( placeholder_json ) => {
        return await placeholder_json.db.allDocs(
            placeholder_json.async_show_db_all_docs,
            placeholder_json.async_document_rocket_return_await_document )
            .then( ( response => ( this.json.response = response ) && response ) )
            .catch( ( ( this.json.onrejected = ( ( ) => 'ERROR' ) ) && this.json.onrejected ) );;
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
            .then( ( response => ( this.json.response = response ) && response ) )
            .catch( ( ( this.json.onrejected = ( ( ) => 'ERROR' ) ) && this.json.onrejected ) );
    };


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
        )
            .then( ( response => ( this.json.response = response ) && response ) )
            .catch( ( ( this.json.onrejected = ( ( ) => 'ERROR' ) ) && this.json.onrejected ) );
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
            .then( ( response => ( this.json.response = response ) && response ) )
            .catch( ( ( this.json.onrejected = ( ( ) => 'ERROR' ) ) && this.json.onrejected ) );
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
            .then( ( response => ( this.json.response = response ) && response ) )
            .catch( ( ( this.json.onrejected = ( ( ) => 'ERROR' ) ) && this.json.onrejected ) );
    };

    /*
     *
     */
    async_add_todo_in_memory = async ( placeholder_json ) => {
        return await this.memory.put({
            "type":"todo",
            _id: placeholder_json.memory_uuid,
            title: placeholder_json.memory_title,
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
            .then( ( response => ( this.json.response = response ) && response ) )
            .catch( ( ( this.json.onrejected = ( ( ) => 'ERROR' ) ) && this.json.onrejected ) );
    };

    /*
     *
     */
    async_json_flatten_this = async ( placeholder_json ) => {
        return await JSON.flatten( placeholder_json );
    };

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
    };
}