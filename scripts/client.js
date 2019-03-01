import { launch } from './helper/functions.js';

var json;

json = {
		type: 'GET',
		url: "base_types.json",
		dataType: 'json',
		success: "merge_placeholder_json_with_data",
		"get_json_string_url":"base_types.json",
		"get_json_callback_success":"merge_placeholder_json_with_data"
	};

let placeholder_json;

placeholder_json = {};

json["launch_results"] = launch( json );

console.log( "Launch Results: " );
console.log(  json );



