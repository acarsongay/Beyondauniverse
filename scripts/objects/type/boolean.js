export class boolean extends Boolean {
    /**
     * @return {boolean}
     */
    constructor ( placeholder_json ) {
        super();
        return new Boolean( placeholder_json.boolean );
    }
}