export class functions extends base {
	constructor( placeholder_json ) {
		super( placeholder_json );
		this.json = {
			...{
				"null":null
			},
			...this.json
		};
		
		this.json = {
			...{
				"null":null
			},
			...this.json
		}
		return this;
	}
}