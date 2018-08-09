import api from "../api";
import {getValue, getElement} from "../dom";
import {displaySuccess, handleErrors} from "../flash";

const responseHandler = (ok, code, data) => {
    if (ok) {
        displaySuccess('Successfully signed up. <a href="signin.html">Sign in</a> to get started!');
    } else {
        handleErrors(code, data);
    }
};

const signUp = () => {
    // confirm password
    // let password_conf = getValue('password_conf');
    let body = {
        name: getValue('name'),
        email: getValue('email'),
        password: getValue('password')
    };
    api.post('signup', body, responseHandler, false);
};

export const registerSignUpListener = () => {
    getElement('#sign_up_form').addEventListener('submit', (ev) => {
        ev.preventDefault();
        signUp();
    });
};
