import API from "../API";
import DOM from "../DOM";
import Index from "./Index";
import Error from "../Error";
import Router from "../Router";
import Message from "../Message";

export default class Delete {
    static init() {
        this.handler = Router.uri.startsWith('view.html') ? this.handleView : this.handleIndex;
        this.DONE = 'Your entry was deleted successfully.';
        this.NOT_FOUND = 'The entry no longer exists.';
        DOM.registerListener('.delete', 'click', this);
    }

    static action(event) {
        API.message('Deleting entry').delete(`entries/${event.target.dataset.entry}`, this);
    }

    static handle(ok, code, data, id) {
        (ok || code === 404) ? this.handler(ok, code, id) : Error.handle(code, data);
    }

    static handleView(ok) {
        let message = {type: (ok ? Message.SUCCESS : Message.ERROR), message: (ok ? this.DONE : this.NOT_FOUND)};
        Router.flash({message}).redirectToEntries();
    }

    static handleIndex(ok, code, id) {
        Index.remove(id);
        ok ? Message.success(this.DONE) : Message.error(this.NOT_FOUND);
    }
}
