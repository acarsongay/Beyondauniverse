export class enumeration {
    constructor( placeholder_json ) {
        return this.async_enumeration_constructor( placeholder_json ).then( response => {
           return response;
        });
    }

    async_enumeration_constructor = async ( placeholder_json ) => {
        return await Promise.all(
            Object.keys(placeholder_json).map(async key => {
                return ( this [ key ] = placeholder_json [ key ] ) ? placeholder_json : () => 'error_async_enumeration_constructor';
            })
        ).then( async response => {
            return await ( placeholder_json.placeholder_json = {...placeholder_json, ...response } ) ? (Object.freeze(this) ? this : () => 'ERROR' ) : () => 'error_async_enumeration_constructor';
        });
    };

    has = async (key) => {
        return await this.hasOwnProperty(key)
    }
}