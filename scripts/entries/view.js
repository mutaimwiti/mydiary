import {registerDeleteListener} from "./delete";
import {requireSignIn} from "../auth/client";
import {handleErrors} from "../flash";
import {apiUrl} from "../api";
import {getToken} from "../auth/client";

export const showEntry = (id) => {
    let responseOk = false;
    let responseStatus = 0;
    fetch(apiUrl('entries/' + id), {
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
                    let {id, title, body, created_at} = data.entry;
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
                    registerDeleteListener();
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
