import DOM from "./DOM";
import API from "./API";
import Error from "./Error";
import {timeSince} from "./helpers";

export default class Profile {
    static init() {
        API.message('Loading profile').get('profile', this);
    }

    static handle(ok, code, data) {
        if (ok) {
            this.display(data);
        } else {
            Error.handle(code, data);
        }
    }

    static display({name, since, entry_count, latest_entry}) {
        let count = `You have no entries...<a href="entries/create.html">create entry</a>.`, latest = ``;
        if (entry_count) {
            count = `Number of entries: ${entry_count}`;
            latest = `Latest entry: <a href="entries/view.html?id=${latest_entry.id}">${latest_entry.title}</a>`;
        }
        DOM.html('#profile',
            `<div class="panel">
                <div class="panel-body">
                    <b><h4>${name}</h4></b>
                    <h5>Joined: ${timeSince(`${since} UTC`)}</h5>
                    <h5>${count}</h5>
                    <h5>${latest}</h5>
                </div>
            </div>`
        );
    }
}
