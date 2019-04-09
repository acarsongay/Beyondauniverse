export class type_function extends Function {
    /**
     * @return {Function}
     */
    constructor ( placeholder_json ) {
        super();
        return function() {
            return {...this,...placeholder_json};
        }
    }
}