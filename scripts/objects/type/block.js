import {base} from "./base.js";

export class block extends base {
    constructor( placeholder_json = {"previous_hash":""} ) {
        return {
            ...placeholder_json,
            ... ( (placeholder_json.hasOwnProperty( 'this' ) ) ? super( placeholder_json.this ) : super( placeholder_json ) ),
            ...{
                "index": null,
                "timestamp": null,
                "data": null,
                "previous_hash": ""
            }
        }
    }

    async * "#calculate_hash" ( placeholder_json ) {
        yield placeholder_json;
    }

    async "#has_own_property_string" ( placeholder_json ) {
        return await ( placeholder_json["#has_own_property_string"] = placeholder_json.hasOwnProperty("string") ) ? placeholder_json : () => "error_has_own_property_string"
    }
    async "#has_own_property_placeholder_json_string" ( placeholder_json ) {
        return await ( placeholder_json["#has_own_property_placeholder_json_string"] = placeholder_json.hasOwnProperty(placeholder_json["string"]) ) ? placeholder_json : () => "error_has_own_property_placeholder_json_string";
    }

    /*
    async "#string_to_boolean_string" ( placeholder_json ) {
        return await ( ( placeholder_json["#has_own_property_string"] ) ? placeholder_json["#has_own_property_placeholder_json_string"] ?
                    placeholder_json[placeholder_json["string"]] = await new Promise.all(placeholder_json.map(response => {
                        console.log(response);
                    })) : () => "" : () => "")
    };
    */
}