import api from "../api";
import {handleErrors} from "../flash";
import {registerDeleteListener} from "./delete";

const displayEntry = ({id, title, body, created_at}) => {
    $('#entry_display').html(
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
};

const responseHandler = (ok, code, data) => {
    if (ok) {
        displayEntry(data.entry);
        registerDeleteListener();
    } else {
        handleErrors(code, data);
    }
};

export const showEntry = (id) => {
    api.get(`entries/${id}`, responseHandler);
};
