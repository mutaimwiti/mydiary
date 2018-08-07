import {apiUrl} from "../api";
import {getValue, getElement} from "../dom";
import {displayError, displaySuccess, handleErrors} from "../flash";

const postSignUp = (body) => {
    let responseOk = false;
    let responseStatus = 0;
    fetch(apiUrl('signup'), {
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
                displaySuccess('Successfully signed up. <a href="signin.html">Sign in</a> to get started!')
            } else {
                handleErrors(responseStatus, data);
                if (responseStatus === 409) {
                    displayError("A user with the same email address already exists.");
                } else {
                    handleErrors(responseStatus, data);
                }
            }
        })
        .catch((error) => {
            console.log(error)
        });
};

const signUp = () => {
    let name = getValue('name');
    let email = getValue('email');
    let password = getValue('password');
    // let password_conf = getValue('password_conf');
    postSignUp({name: name, email: email, password: password});
};

export const registerSignUpListener = () => {
    getElement('#sign_up_form').addEventListener('submit', (ev) => {
        ev.preventDefault();
        signUp();
    });
};
