import api from "../api";
import {setToken} from "./client";
import {redirectToEntries} from "../router";
import {getElement, getValue} from "../dom";
import {displayError, handleErrors} from "../flash";

const responseHandler = (ok, code, data) => {
    if (ok) {
        setToken(data.token);
        redirectToEntries();
    } else {
        if (code === 401) {
            displayError(data.message);
        } else {
            handleErrors(code, data);
        }
    }
};

const signIn = () => {
    let body = {
        email: getValue('email'),
        password: getValue('password')
    };
    api.post('login', body, responseHandler, false);
};

export const registerLoginListener = () => {
    getElement('#login_form').addEventListener('submit', (ev) => {
        ev.preventDefault();
        signIn();
    });
};
