import API from "../API";
import DOM from "../DOM";
import Error from "../Error";
import Router from "../Router";
import Message from "../Message";

class Load {
    static trigger() {
        DOM.resetValues('title', 'body');
        API.get(`entries/${Router.param('id')}`, this);
    }

    static handle(ok, code, data) {
        if (ok) {
            DOM.setValues('title', data.entry.title, 'body', data.entry.body);
        } else {
            Error.handle(code, data)
        }
    }
}

export default class Edit {
    static init() {
        DOM.registerListener('#cancel_entry_edits', 'click', () => Load.trigger());
        DOM.registerListener('#edit_entry_form', 'submit', this);
        DOM.getElement('#cancel_entry_edits').click();
    }

    static action() {
        API.put(`entries/${Router.param('id')}`, DOM.getValues('title', 'body'), this);
    }

    static handle(ok, code, data) {
        if (ok) {
            Message.success('The entry was updated successfully.');
        } else {
            Error.handle(code, data);
        }
    }
}
