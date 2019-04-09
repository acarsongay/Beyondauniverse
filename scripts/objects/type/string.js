export class string extends String {
    /**
     * @return {String}
     */
    constructor ( placeholder_json ) {
        return new String( {...super(),...placeholder_json}.toString() );
    }
}