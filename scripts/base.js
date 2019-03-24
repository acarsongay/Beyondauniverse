/*
 *
 */
import {enumeration} from "./enumeration.js";
import {async_library} from "./async_library.js";
import {string_json} from "./types/string_json.js";

export class base {
    constructor(placeholder_json) {
        return {
            ...((placeholder_json.hasOwnProperty('this')) ? placeholder_json.this : this),
            ...placeholder_json,
            ...{
                "type": null,
                "self": null,
                "placeholder_json": null,
                "error": null,
                "callback": null
            },
            ...{
                "default_type": null,
                "default_self": null,
                "default_placeholder_json": null,
                "default_error": null,
                "default_callback": null
            },
            ...{
                "boolean": null,
                "string": null,
                "number": null,
                "function": null,
                "object": null,
                "undefined": null
            },
            ...{
                "default_type": "string",
                "default_self": "this",
                "default_placeholder_json": "string_json",
                "default_error": "boolean",
                "default_callback": "setup"
            },
            ...{
                "boolean": new Boolean(null),
                "string": new String(""),
                "number": Number(0),
                "function": Function('placeholder_json', 'return placeholder_json'),
                "object": Object({"object": {}}),
                "undefined": undefined,
                "this": this
            },
            ...{
                "string_json": new string_json({})
            },
            ...{
                "async_library": new async_library({})
            },
            ...{
                "#setup": async (placeholder_json) => await placeholder_json["#map_default_keys_to_original"](placeholder_json)
                    .then((async response => await placeholder_json["#map_default_keys"](response)))
                    .then((async response => await placeholder_json["#destroy_default_keys"](response)))
                    .then((async response => await placeholder_json["#map_all_keys"](response)))
                    .then((async response => await placeholder_json["#destroy_uneeded_keys"](response)))
                    .then((async response => await placeholder_json["#destroy_private_keys"](response)))
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
            },
            ... {

            },
            ... {

            }
        };
    }


    "#has_key_default" = async (placeholder_json) => {
        return await Object.keys(placeholder_json).some(function (key) {
            return /default/.test(key);
        });
    };
    "#destroy" = async (placeholder_json) => {
        return await new Promise(async (resolve, reject) => {
                return await resolve((Object.keys(placeholder_json).map(async key => {
                        return await ((placeholder_json.hasOwnProperty("regex") ? placeholder_json.regex.test(key) : /^(this|self|#)/.test(key)) ? delete placeholder_json [key] ? key : reject(() => 'error_delete_placeholder_json_key') : false);
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
    };
    "#destroy_this" = async (placeholder_json) => {
        return await placeholder_json["#destroy"]({...placeholder_json, ...{"regex": /^(this)/}});
    };
    "#destroy_self" = async (placeholder_json) => {
        return await new Promise(async (resolve, reject) => {
                return await resolve((Object.keys(placeholder_json).map(async key => {
                        return await ((/^(self)/.test(key)) ? delete placeholder_json [key] ? key : reject(() => 'error_delete_placeholder_json_key') : false);
                    })
                ));
            }
        ).then(
            async (result) => {
                return await ((placeholder_json.deleted_keys = result) ? (placeholder_json) : () => 'error_private_destroy_self_then_result');
            },
            async (error) => {
                return await (placeholder_json.error = error) ? (placeholder_json) : () => 'error_private_destroy_self_then_error';
            }
        );
    };
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
    "#map_default_keys" = async (placeholder_json) => {
        return await Promise.all(
            Object.keys(placeholder_json).map(async key => {
                return await (
                    placeholder_json.hasOwnProperty(key) &&
                    placeholder_json.hasOwnProperty(placeholder_json[key]) &&
                    /^(default|defaults)/.test(placeholder_json[key])
                ) ? (placeholder_json[key] = placeholder_json[placeholder_json[key]]) ? placeholder_json[placeholder_json[key]] : placeholder_json[key] :
                    placeholder_json[key];
            })
        ).then(response => {
            console.log(response);
            return (placeholder_json.map_default_results = response) ? (placeholder_json) : () => 'ERROR';
        });
    };
    "#map_all_keys" = async (placeholder_json) => {
        return await Promise.all(
            Object.keys(placeholder_json).map(async key => {
                return await placeholder_json.hasOwnProperty(key) && placeholder_json.hasOwnProperty(placeholder_json[key]) ?
                    placeholder_json[key] = placeholder_json[placeholder_json[key]] ? placeholder_json[placeholder_json[key]] : placeholder_json[key] :
                    placeholder_json[key];
            })
        ).then(response => {
            console.log(response);
            return (placeholder_json.map_default_results = response) ? (placeholder_json) : () => 'ERROR';
        });
    };
    "#destroy_private_keys" = async (placeholder_json) => {
        return await Promise.all(
            Object.keys(placeholder_json).map(async key => {
                return (/#/.test(key)) ? delete placeholder_json [key] ? key : () => 'error_delete_placeholder_json_private_hash_key' : false;
            })
        ).then(response => {
            return (placeholder_json.destroyed_private_keys = response) ? (placeholder_json) : () => 'ERROR';
        });
    };
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
}