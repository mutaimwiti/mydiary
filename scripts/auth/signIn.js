import {apiUrl} from "../api";
import {setToken} from "./client";
import {getElement, getValue} from "../dom";
import {displayError, handleErrors} from "../flash";

const postSignIn = (body) => {
    let responseOk = false;
    let responseStatus = 0;
    fetch(apiUrl('login'), {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            responseOk = response.ok;
            responseStatus = response.status;
            return response.json();
        })
        .then(data => {
            if (responseOk) {
                setToken(data.token);
                window.location = 'entries.html';
            } else {
                if (responseStatus === 401) {
                    displayError("Invalid email or password. Try again.")
                } else {
                    handleErrors(responseStatus, data);
                }
            }
        })
        .catch((error) => {
            console.log(error)
        });
};

const signIn = () => {
    let email = getValue('email');
    let password = getValue('password');
    postSignIn({email: email, password: password})
};

export const registerLoginListener = () => {
    getElement('#login_form').addEventListener('submit', (ev) => {
        ev.preventDefault();
        signIn();
    });
};
