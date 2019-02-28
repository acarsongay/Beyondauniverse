
function default_constructor( placeholder_json ) {
	return {
		"template": $('#template').html(),
		"target": "#template",
		"elemment":"body",
		"override_me":"test",
		"get_json": {
			"file_name":"story.json"
		},
		...placeholder_json
	};
}
function evaluate_json( placeholder_json ) {
	
}

function parse_flat_json_string( json_string ) {
    return String(json_string)
            .replace(/&/g, 'ampersand_ampersand_abbriviation_semicolon')
            .replace(/"/g, 'ampersand_quote_abbriviation_semicolon')
            .replace(/#/g, 'ampersand_octothorp_thirty_nine_semicolen')
            .replace(/</g, 'ampersand_less_than_semicolen')
            .replace(/>/g, 'ampersand_greater_than_semicolen');
}
function de_parse( json_string ) {
	 return String(json_string)
            .replace(/ampersand_ampersand_abbriviation_semicolon/g, '&')
            .replace(/ampersand_quote_abbriviation_semicolon/g, '"')
            .replace(/ampersand_octothorp_thirty_nine_semicolen/g, '#')
            .replace(/ampersand_octothorp_thirty_nine_semicolen/g, '#')
            .replace(/</g, 'ampersand_less_than_semicolen')
            .replace(/>/g, 'ampersand_greater_than_semicolen');
}

/*
 *
 */
function json_unflatten( placeholder_json ) {
	return JSON.unflatten( placeholder_json );
}

/*
 *
 */
function json_stringify( placeholder_json ) {
	return JSON.stringify( placeholder_json ) ;
}

/*
 *
 */
function json_flatten( placeholder_json ) {
	return JSON.flatten( placeholder_json );
}

/*
 *
 */
function mustache_render( placeholder_json ) {
	return Mustache.render( $( placeholder_json.element ).html() , placeholder_json );
}

/*
 *
 */
function mustache_parse( placeholder_json ) {
	return Mustache.parse( placeholder_json.template );
}

/*
 *
 */
function mustache_to_html( placeholder_json ) {
	return $( placeholder_json.target ) . html 
			( Mustache.to_html ( placeholder_json.template, placeholder_json ) );
}

/*
 *
 */
function output( placeholder_json ) {
	return placeholder_json && console.log( placeholder_json );
}

/*
 *
 */
function get_json( placeholder_json ) {
	$.getJSON( placeholder_json.get_json_file_name, function( json ) {
	  return { ...global_json, ...placeholder_json }; 
	});
}

/*
 *
 */
var json = {
	"callback": {
		"type":"function",
		"eval":"",
		"default":"rotation",
	},
	"rotation": {
		"type":"label",
		"eval":""
	},
	"default": {
		"type":"function",
		"eval":""
	},
	"override_me":"test2",
	"header_one":{
		"type":"html_element",
		"id":"header_one",
		"element":"h1",
		"text":"Beyondauniverse"
	},
	"loading_template": {
		"type":"html_element",
		"id":"loading_template",
		"element":"div",
		"text":"Loading"
	},
	"a_scene": {
		"type":"aframe_element",
		"element":"a_scene",
		"inner_html": {
			"type":"html_structure",
			"a_box":{
				"type":"aframe_element",
				"element":"a_box",
				"position":"-1 0.5 -3",
				"color":"#FFFFFF",
				"rotation":"0 50 0 "
			},
			"a_sky":{
				"type":"aframe_element",
				"element":"a_sky",
				"color":"#FFAAFF"
			}
		}
	},
	"base_types": {
		"boolean": {
			"type":"base_type",
			"default":"false",
			"extra": {
				"static_values" : {
					"type":"extra",
					"range":"zero_to_one",
					"zero":"false",
					"one":"true"
				}
			}
		}
	},
	"types": {
		"html_element": {
			"eval": ""
		},
		"aframe_element": {
			"extends":"html_element",
			"eval": ""
		}
	},
	"required": {
		"*": {
			"type": {
				"type":"machine"
			}
		}	
	},
	"rules": {
		"html_elements": {
			
		}
	},
	"validation": {
		"range": {
			"eval":""
		}
	}
};
output( json_flatten( default_constructor( json ) ) );
output( mustache_to_html( json_flatten( default_constructor( json ) ) ) );
