import DOM from "../../modules/DOM";
import API from "../../modules/API";
import Error from "../../modules/Error";
import Router from "../../modules/Router";
import Message from "../../modules/Message";

export default class Create {
    static init() {
        DOM.registerListener('#create_entry_form', 'submit', this);
    }

    static action() {
        API.message('Creating entry').post('entries', DOM.getValues('title', 'body'), this);
    }

    static handle(ok, code, data) {
        if (ok) {
            let message = {type: Message.SUCCESS, message: 'Your entry was created successfully.'};
            Router.flash({message}).redirectToEntries(`view.html?id=${data.entry.id}`);
        } else {
            Error.handle(code, data);
        }
    }
}
