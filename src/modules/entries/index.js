import api from "../api";
import {registerDeleteListener} from "./delete";
import {displaySuccess, handleErrors} from "../flash";

const displayEntries = (entries, count) => {
    for (let i = 0; i < count; i++) {
        let {id, title, created_at} = entries[i];
        $('#entries_display').append(
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
};

const responseHandler = (ok, code, data) => {
    if (ok) {
        let {entries, count} = data;
        if (count) {
            displayEntries(entries, count);
            registerDeleteListener();
        } else {
            displaySuccess("You have no entries.");
        }
    } else {
        handleErrors(code, data);
    }
};

export const showEntries = () => {
    api.get('entries', responseHandler);
};
