import api from "../api";
import {getUri} from "../router";
import {getElement} from "../dom";
import {clearMessages} from "../flash";
import {displaySuccess, handleErrors} from "../flash";

const removeFromList = (id) => {
    $('#entry_id_' +  id).remove();
};

const responseHandler = (ok, code, data, id) => {
    if (ok) {
        if (getUri().startsWith('view.html')) {
            displaySuccess('The entry was deleted successfully');
            $('#entry_display').empty();
        } else {
            removeFromList(id);
        }
    } else {
        if (code === 404) {
            removeFromList(id);
        } else {
            handleErrors(code, data);
        }
    }
};

export const registerDeleteListener = () => {
    Array.from(getElement('.delete')).forEach((elem) => {
        elem.addEventListener('click', (ev) => {
            clearMessages();
            ev.preventDefault();
            let id = ev.target.dataset.entry;
            api.delete(`entries/${id}`, responseHandler);
        });
    });
};
