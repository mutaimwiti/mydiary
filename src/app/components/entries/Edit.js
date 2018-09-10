import API from "../../modules/API";
import DOM from "../../modules/DOM";
import Error from "../../modules/Error";
import Router from "../../modules/Router";
import Message from "../../modules/Message";

class Load {
    static trigger() {
        DOM.resetValues('title', 'body');
        API.message('Loading entry').get(`entries/${Router.param('id')}`, this);
    }

    static handle(ok, code, data) {
        ok ? DOM.setValues('title', data.entry.title, 'body', data.entry.body) : Error.handle(code, data);
    }
}

export default class Edit {
    static init() {
        DOM.registerListener('#cancel_entry_edits', 'click', () => Load.trigger());
        DOM.registerListener('#edit_entry_form', 'submit', this);
        DOM.getElement('#cancel_entry_edits').click();
    }

    static action() {
        API.message('Updating entry').put(`entries/${Router.param('id')}`, DOM.getValues('title', 'body'), this);
    }

    static handle(ok, code, data) {
        if (ok) {
            let message = {type: Message.SUCCESS, message: 'Your entry was updated successfully.'};
            Router.flash({message}).redirectToEntries(`view.html?id=${data.entry.id}`);
        } else {
            Error.handle(code, data);
        }
    }
}
