

/*
 *
 */
function evaluate_json( placeholder_json ) {
	
}

/*
 *
 */
function string_replace( placeholder_json ) {
	return String( json_stringify( placeholder_json ) ).replace( placeholder_json.replace_search_value , placeholder_json.replace_new_value );
}

/*
 *
 */
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
function jquery_get_json( placeholder_json ) {
	JQuery.getJSON( placeholder_json.jquery_get_json_file_name, function( placeholder_json_from_file ) {
	  return { ...placeholder_json, ...placeholder_json_from_file }; 
	});
}

/*
 *
 */
function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);
}

function function_get_json( placeholder_json ) {
	let get_json_string_url;
	let get_json_callback_success;
	
	get_json_url = placeholder_json.function_get_json_string_url
	get_json_callback_success = (new Function('return '+ placeholder_json.function_get_json_callback_success)())();
	
	placeholder_json["get_json"] = getJSONP( get_json_url, get_json_callback_success );  
	
	return placeholder_json;
}

module.exports = {
	function_get_json: function_get_json,
	json_flatten: json_flatten
};

