import API from "../API";
import DOM from "../DOM";
import Index from "./Index";
import Error from "../Error";
import Router from "../Router";
import Message from "../Message";

export default class Delete {
    static init() {
        DOM.registerListener('.delete', 'click', this);
        this.NOT_FOUND = {type: Message.ERROR, message: 'The entry no longer exists.'};
        this.DONE = {type: Message.SUCCESS, message: 'Your entry was deleted successfully.'};
    }

    static action(event) {
        API.delete(`entries/${event.target.dataset.entry}`, this);
    }

    static handle(ok, code, data, id) {
        if (Router.uri.startsWith('view.html')) {
            this.handleView(ok, code);
        } else {
            this.handleIndex(ok, code, id);
        }
        if (!ok && code !== 404) {
            Error.handle(code, data);
        }
    }

    static handleView(ok, code) {
        if (ok) {
            Router.flash({message: this.DONE}).redirectToEntries();
        } else if (code === 404) {
            Router.flash({message: this.NOT_FOUND}).redirectToEntries();
        }
    }

    static handleIndex(ok, code, id) {
        if (ok) {
            Index.remove(id);
            Message.success(this.DONE);
        } else if (code === 404) {
            Index.remove(id);
            Message.error(this.NOT_FOUND);
        }
    }
}
