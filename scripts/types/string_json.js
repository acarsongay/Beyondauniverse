export class string_json extends String {
	constructor( placeholder_json ) {
		super( placeholder_json );
		
		this.error = {};
        this.placeholder_json = placeholder_json; //May possible remove
		this.json = { 
			"placeholder_json": this.placeholder_json
		};
		this.string_json = new string_json(( JSON.stringify( this.json ) ));
    };
	
	json_stringify( ) {
		return JSON.stringify( this.json ) ;
	}

  // Overwrite species to the parent String constructor
  static get [Symbol.species]() { return String; }
}