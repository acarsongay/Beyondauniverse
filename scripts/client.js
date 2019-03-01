import { launch } from './helper/functions.js';
export class client {
    constructor( placeholder_json ) {
        this.placeholder_json = placeholder_json; //May possible remove
		this.json = { "placeholder_json": this.placeholder_json };
    };

    static draw(circle, canvas) {
        // Canvas drawing code
    };

    static get json() {
        return !this.json ? {} : this.json;
    };
    static set json( placeholder_json ) {
		this.json = { ...this.json, ...this.placeholder_json };
		this.placeholder_json = placeholder_json;
		this.json.placeholder_json = this.placeholder_json;
    };

    launch() {
        this.json.launch_results = launch( this.json.placeholder_json );
    };
	
	
	client.prototype.launch = function launch() {
    if (arguments.length === 0)
       this.json.launch_results = launch( this.json.placeholder_json );

    if (arguments.length === 1 and typeof(arguments[1]) === 'string')
		this.json.launch_results = launch( this.json.placeholder_json );
      return findByFullName.apply(this, arguments);

   // by default, search using first and last name
   return findBySurname.apply(this, arguments);
  }
}