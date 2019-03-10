show_db = async ( placeholder_json ) => {
	with( {...placeholder_json, ...placeholder_json.db} ) {
		return await allDocs( async_show_db_all_docs, async_document_rocket_return_await_document )
	}
};