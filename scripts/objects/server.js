import {base} from "./type/base.js";

export class server extends base {
    constructor ( placeholder_json ) {
        return super( placeholder_json ) ? this.json : () => 'ERROR';
    }
}