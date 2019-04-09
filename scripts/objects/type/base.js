/*
 *
 */
import {enumeration} from "./enumeration.js";
import {async_library} from "../library/async_library.js";
import {string_json} from "./string_json.js";

import {boolean} from "./boolean.js";
import {string} from "./string.js";
import {type_function} from "./type_function.js";
import {number} from "./number.js";
import {object} from "./object.js";
import {type_undefined} from "./type_undefined.js";
import {audio} from "./audio.js";
import {json} from "./json.js";
import {error} from "./error.js";
import {callback} from "./callback.js";

export class base {
    constructor( placeholder_json ) {
        return {
            ...placeholder_json ? placeholder_json : placeholder_json = {},
            ...((placeholder_json.hasOwnProperty('this')) ? placeholder_json["this"] : this),

            ...{
                "placeholder_json": null,
                "error": null,
                "callback": null
            },
            ...{
                "default_placeholder_json": null,
                "default_error": null,
                "default_callback": null
            },
            ...{
                "new_json": null,
                "new_error": null,
                "new_callback": null
            },
            ...{
                "new_json": new json( placeholder_json ),
                "new_error": new error( placeholder_json ),
                "new_callback": new callback( placeholder_json )
            },
            ...{
                "default_placeholder_json": "new_json",
                "default_error": "new_error",
                "default_callback": "new_callback"
            },

            ...{
                "type": null,
                "boolean": null,
                "string": null,
                "number": null,
                "function": null,
                "object": null,
                "audio":null,
                "undefined": null
            },
            ...{
                "default_type": null,
                "default_boolean": null,
                "default_string": null,
                "default_number": null,
                "default_function": null,
                "default_object": null,
                "default_audio": null,
                "default_undefined": null
            },
            ...{
                "new_type": null,
                "new_boolean": null,
                "new_string": null,
                "new_number": null,
                "new_function": null,
                "new_object": null,
                "new_audio": null,
                "new_undefined": null
            },
            ...{
                "new_type": async function*() { yield new base(placeholder_json.hasOwnProperty("base") ? placeholder_json : {"base": null}) },
                "new_boolean": new boolean(placeholder_json.hasOwnProperty("boolean") ? placeholder_json : {"boolean": false}),
                "new_string": new string(placeholder_json.hasOwnProperty("string") ? placeholder_json : {"string": ""}),
                "new_number": new number(placeholder_json.hasOwnProperty("number") ? placeholder_json : {"number": 0}),
                "new_function": new type_function({
                    "function": async function* () {
                        yield null
                    }
                }),
                "new_object": new object({}),
                "new_audio": async () => await new Promise( (resolve, reject) => resolve(new Audio ( "./sounds/sound.mp3" )) ),
                "new_undefined": new type_undefined({}),
            },
            ...{
                "default_type": "new_type",
                "default_boolean": "new_boolean",
                "default_string": "new_string",
                "default_number": "new_number",
                "default_function": "new_function",
                "default_object": "new_object",
                "default_audio": "new_audio",
                "default_undefined": "new_undefined"
            },

            ...{
                "self": null,
                "present": null,
                "past":null,
                "future":null
            },
            ...{
                "default_self": null,
                "default_present": null,
                "default_past":null,
                "default_future":null
            },
            ...{
                "this":null
            },
            ...{
                "this":this
            },
            ...{
                "default_self": "this"
            },

            ...{
                "#setup": async (placeholder_json) => await this["#map_default_keys_to_original"](placeholder_json)
                    .then((async response => await this["#map_default_keys"](response)))
                    .then((async response => await this["#destroy_default_keys"](response)))
                    .then((async response => await this["#map_all_keys"](response)))
                    .then((async response => await this["#destroy_uneeded_keys"](response)))
                    .then((async response => await this["#destroy_private_keys"](response)))
                    .then((async response => await {...response, ...placeholder_json}))
            },
            ...{
                async * "#destroy"(placeholder_json) {
                    yield await new Promise(async (resolve, reject) => {
                            return await resolve((Object.keys(placeholder_json).map(async key => {
                                    return await ((placeholder_json.hasOwnProperty("regex") ? placeholder_json.regex.test(key) : /^(this|self|#|default|async)/.test(key)) ? delete placeholder_json [key] ? key : reject(() => 'error_delete_placeholder_json_key') : false);
                                })
                            ));
                        }
                    ).then(
                        async (result) => {
                            return await ((placeholder_json.deleted_keys = result) ? (placeholder_json) : () => 'error_private_destroy_then_result');
                        },
                        async (error) => {
                            return await (placeholder_json.error = error) ? (placeholder_json) : () => 'error_private_destroy_then_error';
                        }
                    );
                }
            }
        };
    }


    "#merge_super_on_top" = async ( placeholder_json ) => await {...placeholder_json["#super"],...placeholder_json};

    "#merge_this_on_top" = async ( placeholder_json ) => await {...placeholder_json["#this"],...placeholder_json};

    "#merge_this_on_bottom" = async ( placeholder_json ) => await {...placeholder_json,...placeholder_json["#this"]};

    "#has_key_default" = async (placeholder_json) => await Object.keys( placeholder_json ).some(async (key) => await /default/.test(key) );

    "#destroy" = async (placeholder_json) => await new Promise(async (resolve, reject) => await
            resolve(Object.keys(placeholder_json).map(async key => await
                ( placeholder_json.hasOwnProperty("regex") ? placeholder_json.regex.test(key) : /^(this|self|#)/.test(key) ) ?
                    delete placeholder_json [key] ?
                        key : reject( ( ) => 'error_delete_placeholder_json_key') : false )
                )
            ).then(
            async (result) => await ((placeholder_json.deleted_keys = result) ? (placeholder_json) : () => 'error_private_destroy_then_result'),
            async (error) =>  await (placeholder_json.error = error) ? (placeholder_json) : () => 'error_private_destroy_then_error'
            );

    "#destroy_this" = async (placeholder_json) => await placeholder_json["#destroy"]({...placeholder_json, ...{"regex": /^(this)/}});

    "#destroy_self" = async ( placeholder_json ) => await new Promise(async (resolve, reject) => await
            resolve( Object.keys(placeholder_json).map(async key => await
                /^(self)/.test(key) ? delete placeholder_json [ key ] ?
                    key : reject( () => 'error_delete_placeholder_json_key' ) : false
                )
            )
        ).then(async (result) =>  await
                placeholder_json.deleted_keys = result ? placeholder_json : () => 'error_private_destroy_self_then_result',
            async (error) => await
                placeholder_json.error = error ? placeholder_json : () => 'error_private_destroy_self_then_error'
        );

    "#destroy_default_keys" = async (placeholder_json) => {
        return await Promise.all(
            Object.keys(placeholder_json).map(async key => {
                return (/^(default|defaults)/.test(key)) ? delete placeholder_json [key] ? key : () => 'error_delete_placeholder_json_key' : false;
            })
        ).then(response => {
            return (placeholder_json.deleted_keys = response) ? (placeholder_json) : () => 'ERROR';
        });
    };
    "#destroy_type_keys" = async (placeholder_json) => {
        return await Promise.all(
            Object.keys(placeholder_json).map(async key => {
                return (placeholder_json.hasOwnProperty("regex") ? placeholder_json.regex.test(key) : /^(string|symbol|boolean|function|undefined|number)/.test(key))
                    ? delete placeholder_json [key] ? key : () => 'error_delete_placeholder_json_key' : false;
            })
        ).then(response => {
            return (placeholder_json.deleted_keys = response) ? (placeholder_json) : () => 'ERROR';
        });
    };
    "#destroy_uneeded_keys" = async (placeholder_json) => {
        return await Promise.all(
            Object.keys(placeholder_json).map(async key => {
                return (placeholder_json.hasOwnProperty("regex") ?
                    placeholder_json.regex.test(key)
                    : /(uneeded|boolean|object|type|undefined|function|default|defaults|async|this|destroyed|deleted|db|string|string_json|error)/.test(key))
                    ? delete placeholder_json [key] ? key : () => 'error_delete_placeholder_json_key' : false;
            })
        ).then(response => {
            return (placeholder_json.uneeded_keys = response) ? (placeholder_json) : () => 'ERROR';
        })
    };
    "#map_default_keys_to_original" = async (placeholder_json) => {
        return await Promise.all(
            Object.keys(placeholder_json).map(async key => {
                return (/^(default|defaults)/.test(key)) ? placeholder_json [key.substring(8,)] = placeholder_json [key] ? key : () => 'error' : false;
            })
        ).then(response => {
            return (placeholder_json.deleted_keys = response) ? (placeholder_json) : () => 'ERROR';
        });
    };
    "#map_default_keys" = async (placeholder_json) => await
        Promise.all(
            Object.keys(placeholder_json).map(async key => await (
                ( placeholder_json.hasOwnProperty(key) && placeholder_json.hasOwnProperty(placeholder_json[key]) && /^(default|defaults)/.test(placeholder_json[key]) ) ?
                    (placeholder_json[key] = placeholder_json[placeholder_json[key]]) ?
                        placeholder_json[placeholder_json[key]] : placeholder_json[key] : placeholder_json[key]
                )
            )
        ).then(async response => await placeholder_json["map_default_keys_results"] = response ? placeholder_json : () => 'error_map_default_keys_result');

    "#map_all_keys" = async (placeholder_json) => await (
        Promise.all( Object.keys( placeholder_json ).map(async key => await
            placeholder_json.hasOwnProperty( key ) && placeholder_json.hasOwnProperty( placeholder_json [ key ] ) ?
            placeholder_json[key] = placeholder_json[placeholder_json[key]] ?
                placeholder_json[placeholder_json[key]] : placeholder_json[key] : placeholder_json[key])
        ).then(async response => await
            placeholder_json["map_all_keys_results"] = response ? placeholder_json : () => 'error_map_all_keys_results'
        )
    );

    "#destroy_logic_keys" = async (placeholder_json) => await
        Promise.all(
            await Object.keys( placeholder_json ).map(async key => await
                (/\?/.test(key)) ? delete placeholder_json [key] ?
                key : () => 'error_destroy_logic_keys' : false )
        ).then(
            async response => await
                placeholder_json.destroyed_private_keys = response ?
                placeholder_json : () => 'ERROR'
        );
    "#destroy_private_keys" = async (placeholder_json) => await
        Promise.all(
            await Object.keys( placeholder_json ).map(async key => await
                    (/#/.test(key)) ? delete placeholder_json [key] ?
                        key : () => 'error_delete_placeholder_json_private_hash_key' : false )
        ).then(
            async response => await
                placeholder_json.destroyed_private_keys = response ?
                placeholder_json : () => 'ERROR'
        );

    async * "#destroy_self_private_keys"(placeholder_json)  {
        yield await Promise.all(async function*() {

            yield await Object.keys(
                placeholder_json.hasOwnProperty("self")
                    ? placeholder_json.self
                    : () => "error_destroy_self_private_keys_placeholder_json_does_not_have_property_self").map(async function* (key) {
                yield await (/#/.test(key)) ? delete placeholder_json [key] ? key : () => 'error_delete_placeholder_json_private_hash_key' : false;
            });

            yield Object.keys(
                placeholder_json.hasOwnProperty("this")
                    ? placeholder_json.this
                    : () => "error_destroy_self_private_keys_placeholder_json_does_not_have_property_this").map(async key => {
                return (/#/.test(key)) ? delete placeholder_json [key] ? key : () => 'error_delete_placeholder_json_private_hash_key' : false;
            });
        }).then(response => {
            return (placeholder_json.destroyed_private_keys = response) ? (placeholder_json) : () => 'ERROR';
        });
    };

    "?this" = async ( placeholder_json ) => await
            placeholder_json["?this"] = placeholder_json.hasOwnProperty("this") ?
            placeholder_json : () => 'error_has_this';

    "?this_unmapped" = async ( placeholder_json ) => await
            placeholder_json["?this_unmapped"] = placeholder_json.hasOwnProperty(placeholder_json["?this"]( placeholder_json )["this"]) ?
            placeholder_json : () => 'error_has_this_unmapped';
}