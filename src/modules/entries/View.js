import API from "../API";
import DOM from "../DOM";
import Error from "../Error";
import Delete from "./Delete";
import Router from "../Router";

export default class View {
    static init() {
        API.get(`entries/${Router.param('id')}`, this);
    }

    static handle(ok, code, data) {
        if (ok) {
            this.display(data.entry);
            Delete.init();
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
