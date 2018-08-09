import {getUri} from "./router";

export const hideLogoutLink = () =>  $('#logout').hide();

export const hideSignUpAndSignInLinks = () => {
    $('a[href^="sign"], a[href^="../sign"]').hide()
};

export const activateLocationLink = () => {
    const uri = (getUri() === '') ? './' : getUri();
    const current = document.querySelector(`a[href="${uri}"]`);
    if (current !== null) {
        current.className += ' active';
    }
};
