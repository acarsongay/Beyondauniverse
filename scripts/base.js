export class base {
	constructor( placeholder_json ) {
		//Null Assignments
		this.json = {
			"type":null,
			"self": null,
			"placeholder_json": null,
			"error":null,
			"callback":null
		};
		
		//Default setup
		this.json =  {
			...this.json,
			...{
				"type":"base",
				"self": this.json,
				"placeholder_json": placeholder_json,
				"error": this.json.error,
				"callback": placeholder_json.callback
			}
		};
		return this;
	}
}