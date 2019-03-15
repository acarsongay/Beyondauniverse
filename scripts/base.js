export class base {
	constructor( placeholder_json ) {
		//Null Assignments
		this.json = {
			"type":null,
			"self": null,
			"default_self": null,
			"placeholder_json": null,
			"error":null,
			"default_callback":null,
			"callback":null
		};
		
		//Default setup
		this.json =  {
			...this.json,
			...{
				"default_type": "base",
				"default_self": "async_default_self",
				"default_placeholder_json": "async_placeholder_json",
				"default_callback": "async_placeholder_json_callback"
			}
		};

		/*
		 * Export Functions
		 */

		this.json = {
			...{
				"async_default_self": this.async_default_self ( this ),
				"async_placeholder_json": this.async_placeholder_json ( placeholder_json ),
				"async_placeholder_json_callback": this.async_placeholder_json_callback( placeholder_json )
			},
			...this.json
		};

		/*
		 *
		 */

		this.json = {
			...this.json,
			...{"this":this}
		};

		return this.json;
	}

	static has_key_default = async ( placeholder_json ) => {
		return await Object.keys(placeholder_json).some(function (key) {
			return /default/.test(key);
		});
	};

	static async_delete_default_keys = async ( placeholder_json ) => {
		return await Promise.all(Object.keys(placeholder_json).map(async key => {
			return (/^(default|defaults)/.test(key)) ? delete placeholder_json [ key ] ? key : () => 'error_delete_placeholder_json_key' : false;
		})).then( response => placeholder_json.deleted_keys = response ? placeholder_json : () => 'ERROR');

	};

	async_delete_all_undefined_in_placeholder_json = async ( placeholder_json ) => await Promise.all(
		await Object.keys(placeholder_json).map(async key =>
		await placeholder_json [ await key ] === await undefined ? await delete await placeholder_json [ await key ] : '')
	).then( async response => await placeholder_json.deleted_keys = await response ? await placeholder_json : async () => await 'ERROR');

	async_delete_placeholder_json = async ( placeholder_json ) => await ( delete placeholder_json [ placeholder_json [ "delete" ] ] ) ? placeholder_json : () => 'ERROR';

	async_undefine_placeholder_json = async ( placeholder_json ) => await ( placeholder_json [ placeholder_json [ "undefine" ] ] = undefined) ? placeholder_json : () => 'ERROR';

	async_default_self = async ( placeholder_json ) => await placeholder_json;

	async_placeholder_json = async ( placeholder_json ) => await placeholder_json;

	async_placeholder_json_callback = async( placeholder_json ) => await placeholder_json.callback


}