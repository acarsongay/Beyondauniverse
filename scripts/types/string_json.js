export class string_json extends String {
	constructor( placeholder_json ) {
		return super( JSON.stringify( placeholder_json ) );
    };

  // Overwrite species to the parent String constructor
  static get [Symbol.species]() { return String; }
}