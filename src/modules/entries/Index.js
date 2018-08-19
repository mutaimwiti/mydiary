import API from "../API";
import DOM from "../DOM";
import Error from "../Error";
import Delete from "./Delete";
import Message from "../Message";

export default class Index {
    static init() {
        API.get('entries', this);
    }

    static handle(ok, code, data) {
        if (ok) {
            let {entries, count} = data;
            if (count) {
                this.display(entries, count);
                Delete.init();
            } else {
                Message.success("You have no entries.");
            }
        } else {
            Error.handle(code, data);
        }
    }

    static display(entries, count) {
        for (let i = 0; i < count; i++) {
            let {id, title, created_at} = entries[i];
            DOM.append('#entries_display',
                `<div class="entry-card" id="entry_id_${id}">
                    <div class="row">
                        <div class="col-m4">
                            <a href="view.html?id=${id}" class="btn btn-sm">${title}</a>
                        </div>
                        <div class="col-m4">${created_at}</div>
                        <div class="col-m4">
                            <a href="edit.html?id=${id}" class="btn-small">Edit</a>
                            <a href data-entry="${id}" class="delete btn-small">Delete</a>
                        </div>
                    </div>
                </div>`
            );
        }
    }

    static remove(id) {
        DOM.remove(`#entry_id_${id}`);
    }
}
