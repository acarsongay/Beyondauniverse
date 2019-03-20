
import { base } from './base.js';

class pouchdb extends base {
	constructor( placeholder_json ) {
		super( placeholder_json );
		this.json = {
			...{
				"host":null,
				"default_host": null,
				"local_db": null,
				"default_local_db_name":null,
				"browser_db": null,
				"default_browser_db_name":null
			},
			...this.json
		};
		
		this.json = {
			...this.json,
			...{
				"host": placeholder_json.host,
				"default_local_db_name":"pouchdb",
				"default_host":"`http://localhost:5984/${this.json.default_local_db_name}`",
				"local_db": {
					"type":"function",
					"function":"new_pouch_db_with_default_host"
				},
				"browser_db": "new_browser_db_with_default_browser_db_name",
				"default_browser_db_name": "browser_db"
			}
		};
		return this;
	}
	
	new_pouch_db_with_default_host = async ( placeholder_json ) => {
		return await new PouchDB('http://localhost:5984/pouchdb');
	}
	
	new_browser_db_with_default_browser_db_name = async ( placeholder_json ) => {
		return await new PouchDB( placeholder_json.default_browser_db_name );
	}
}