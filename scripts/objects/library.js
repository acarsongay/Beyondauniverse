import {base} from "../base.js";
import {book} from "./book.js";
import {videotape} from "./videotape.js";

export class library extends base {

    constructor ( placeholder_json ) {
        return {
            ...super( placeholder_json ),
            ...{
                "default_catalog":{
                    "empty_video":new videotape({}),
                    "empty_book":new book({})
                }
            }
        };
    }
}