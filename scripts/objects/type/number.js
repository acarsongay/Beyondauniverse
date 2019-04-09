export class number extends Number {
    /**
     * @return {Number}
     */
    constructor ( placeholder_json ) {
        return new Number( super() & placeholder_json.number);
    }
}