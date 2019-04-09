
import {type_function} from "./type_function.js";

export class callback extends type_function {
    /**
     * @return {Function}
     */
    constructor ( placeholder_json ) {
        super( placeholder_json );

        return this;
    }

}