import {base} from "./base.js";

export class async_boolean extends base {
    constructor( placeholder_json ){
        return super ( placeholder_json ) ? this : () => 'ERROR';
    }

}