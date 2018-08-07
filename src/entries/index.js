import {apiUrl} from "../api";
import {getToken} from "../auth/client";
import {requireSignIn} from "../auth/client";
import {registerDeleteListener} from "./delete";
import {displaySuccess, handleErrors} from "../flash";

export const showEntries = () => {
    let responseOk = false;
    let responseStatus = 0;
    fetch(apiUrl('entries'), {
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
                let {entries, count} = data;
                if (count) {
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
                    registerDeleteListener();
                } else {
                    displaySuccess("You have no entries.")
                }
            } else {
                if (responseStatus === 401) {
                    requireSignIn();
                } else {
                    handleErrors(responseStatus, data);
                }
            }
        })
        .catch((error) => {
            console.log(error)
        });
};
