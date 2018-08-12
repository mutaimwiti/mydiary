import API from "../API";
import Error from "../Error";
import Delete from "./Delete";
import DOM from "../DOM";

export default class View {
    static get(id) {
        API.get(`entries/${id}`, this);
    }

    static handle(ok, code, data) {
        if (ok) {
            this.display(data.entry);
            Delete.listen();
        } else {
            Error.handle(code, data);
        }
    }

    static display({id, title, body, created_at}) {
        DOM.html('#entry_display',
            `<div class="panel">
                <div class="panel-body">
                    <div class="entry">
                        <a href="edit.html?id=${id}" class="link-button">Edit</a>
                        <h4>Date: ${created_at}</h4>
                        <h4>Title: ${title}</h4>
                        <p>${body}</p>
                        <a href data-entry="${id}" class="delete link-button">Delete</a>
                    </div>
                </div>
            </div>`
        );
    }
}
