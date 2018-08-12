import API from "../API";
import DOM from "../DOM";
import Index from "./Index";
import Flash from "../Flash";
import Error from "../Error";
import Router from "../Router";

export default class Delete {
    static listen () {
        DOM.registerListener('.delete', 'click', this);
    }

    static action(event) {
        let id = event.target.dataset.entry;
        API.delete(`entries/${id}`, this);
    }

    static handle (ok, code, data, id) {
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
            Flash.success('The entry was deleted successfully');
            $('#entry_display').empty();
        } else {
            if (code === 404) {
                Router.redirectToEntries();
            }
        }
    }

    static handleIndex(ok, code, id) {
        if (ok) {
            Index.remove(id);
        } else {
            if (code === 404) {
                Index.remove(id);
            }
        }
    }
}
