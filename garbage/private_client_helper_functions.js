/*
	 * properties defined as strings with a symbol in front of the variable name should be destroy during the construction phase.
	 * We do not want any of these functions making their way over the network. Soon # will automatically be turned into a private
	 * field.
	 */
"#destroy_client" = async ( placeholder_json ) => {
    return await Promise.all(
        Object.keys( placeholder_json )
            .map(async key =>
                await delete placeholder_json [ key ] ) )
        .then( async response =>
            await ( placeholder_json.destroyed = response ) ? placeholder_json : () => 'ERROR' );
};