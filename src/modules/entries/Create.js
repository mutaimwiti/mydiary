import DOM from "../DOM";
import API from "../API";
import Error from "../Error";
import Router from "../Router";
import Message from "../Message";

export default class Create {
    static init() {
        DOM.registerListener('#create_entry_form', 'submit', this);
        this.DONE = 'Your entry was created successfully.';
    }

    static action() {
        API.post('entries', DOM.getValues('title', 'body'), this);
    }

    static handle(ok, code, data) {
        if (ok) {
            Router.flash({message: {type: Message.SUCCESS, message: this.DONE}}).redirectToEntries();
        } else {
            Error.handle(code, data);
        }
    }
}
