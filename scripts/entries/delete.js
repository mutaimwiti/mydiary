import {getElement} from "../dom";
import {clearMessages} from "../flash";
import {getUri} from "../page";
import {displaySuccess, handleErrors} from "../flash";
import {requireSignIn} from "../auth/client";
import {getToken} from "../auth/client";
import {apiUrl} from "../api";

const deleteEntry = (id) => {
    let responseOk = false;
    let responseStatus = 0;
    fetch(apiUrl('entries/' + id), {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": getToken()
        }
    })
        .then((response) => {
            responseOk = response.ok;
            responseStatus = response.status;
            return response.json();
        })
        .then(data => {
                if (responseOk) {
                    if (getUri().startsWith('view.html')) {
                        displaySuccess('The entry was deleted successfully');
                        $('#entry_display').empty();
                    } else {
                        $('#entry_id_' +  id).remove();
                    }
                } else {
                    if (responseStatus === 401) {
                        requireSignIn();
                    } else {
                        handleErrors(responseStatus, data);
                    }
                }
            }
        )
        .catch((error) => {
            console.log(error)
        });
};

export const registerDeleteListener = () => {
    clearMessages();
    Array.from(getElement('.delete')).forEach((elem) => {
        elem.addEventListener('click', (ev) => {
            ev.preventDefault();
            deleteEntry(ev.target.dataset.entry);
        });
    });
};
