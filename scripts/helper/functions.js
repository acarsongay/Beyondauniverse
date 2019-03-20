
/*
 *
 */
export var aggregation = async (baseClass, ...mixins) => {
	class base extends baseClass {
		constructor (...args) {
			return ( ( super(...args) ) ? (
				mixins.forEach((mixin) => {
					copyProps(this,(new mixin));
				})
			) : () => 'ERROR');
		}
	}
	let copyProps = (target, source) => {  // this function copies all properties and symbols, filtering out some special ones
		Object.getOwnPropertyNames(source)
			.concat(Object.getOwnPropertySymbols(source))
			.forEach((prop) => {
				if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
					Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
			})
	};
	mixins.forEach((mixin) => { // outside contructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
		copyProps(base.prototype, mixin.prototype);
		copyProps(base, mixin);
	});
	return base;
};
/*
 *
 */
 export function launch( placeholder_json ) {
	var jquery_ajax_response;
	var jquery_ajax_response_merge;
	
	jquery_ajax_response = jquery_ajax( placeholder_json );
	console.log("Jquery Ajax Response");
	console.log(jquery_ajax_response);
	jquery_ajax_response_merge = jquery_ajax_merge( jquery_ajax_response );
	console.log("Jquery Ajax Response Merge");
	console.log(jquery_ajax_response_merge);
	
	return jquery_ajax_response_merge;
 }
 export function get_json( placeholder_json ) {
	return { "ajax": $.ajax({
	 type: 'GET',
	 placeholder_json: placeholder_json,
	 url: placeholder_json.get_json_string_url,
	 dataType: 'json',
	 success: eval( placeholder_json.get_json_callback_success )
	}) };
}

function jquery_ajax_merge( placeholder_json ) {
	return {  ...placeholder_json.responseJSON , ...placeholder_json };
}
	
export function jquery_ajax( placeholder_json ) {
	let jquery_ajax_placeholder_json;
	let jquery_ajax_response_json; 
	
	jquery_ajax_placeholder_json = $.ajax( placeholder_json );
	jquery_ajax_response_json = jquery_ajax_placeholder_json.responseJSON;
	
	return { ...jquery_ajax_response_json, ...placeholder_json };
}
window.get_function_from_string = function(string)
{
    var scope = window;
    var scopeSplit = string.split('.');
    for (var i = 0; i < scopeSplit.length - 1; i++)
    {
        scope = scope[scopeSplit[i]];

        if (scope == undefined) return;
    }

    return scope[scopeSplit[scopeSplit.length - 1]];
}
 export function merge_placeholder_json_with_data( data ) {
	 return (json = {...json, ...data, ...this.placeholder_json}) ? TRUE : FALSE;
 }
	 
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
export function output( placeholder_json ) {
	return placeholder_json && console.log( placeholder_json );
}



/*
 *
 */
export function jquery_get_json( placeholder_json ) {
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





export function function_get_json( placeholder_json ) {
	console.log( placeholder_json );
	let get_json_string_url;
	let get_json_callback_success;
	
	get_json_string_url = placeholder_json.function_get_json_string_url
	
	placeholder_json["get_json"] = getJSONP( get_json_string_url, (new Function('return '+ placeholder_json[placeholder_json.function_get_json_callback_success])())() );  
	
	return placeholder_json;
}






