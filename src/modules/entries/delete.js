import api from "../api";
import {getUri} from "../router";
import {getElement} from "../dom";
import {clearMessages} from "../flash";
import {displaySuccess, handleErrors} from "../flash";

const responseHandler = (ok, code, data, id) => {
    if (ok) {
        if (getUri().startsWith('view.html')) {
            displaySuccess('The entry was deleted successfully');
            $('#entry_display').empty();
        } else {
            $('#entry_id_' +  id).remove();
        }
    } else {
        handleErrors(code, data);
    }
};

export const registerDeleteListener = () => {
    clearMessages();
    Array.from(getElement('.delete')).forEach((elem) => {
        elem.addEventListener('click', (ev) => {
            ev.preventDefault();
            let id = ev.target.dataset.entry;
            api.delete(`entries/${id}`, responseHandler);
        });
    });
};
