import {showProfile} from "./profile";
import {showEntry} from "./entries/view";
import {showEntries} from "./entries/index";
import {registerLoginListener} from "./auth/signIn";
import {registerSignUpListener} from "./auth/signUp";
import {registerEditEntryListener} from "./entries/edit";
import {registerCreateEntryListener} from "./entries/create";
import {getToken, registerLogoutListener} from './auth/client';
import {hideLogoutLink, hideSignUpAndSignInLinks} from "./links";
import {getUrl, getUri, redirectToEntries, redirect} from "./router";

const loadAuthPage = (uri) => {
    switch (uri) {
        case 'signin.html':
            registerLoginListener();
            break;
        case 'signup.html':
            registerSignUpListener();
    }
    hideLogoutLink();
};

const loadEntryPage = (uri, url) => {
    if (uri === '') {
        return showEntries();
    } else if (uri === 'create.html') {
        return registerCreateEntryListener();
    } else {
        let id = (new URL(url)).searchParams.get('id');
        if (uri.startsWith('view.html')) {
            return showEntry(id);
        } else if (uri.startsWith('edit.html')) {
            return registerEditEntryListener();
        }
    }
    redirect();
};

export const loadPage = () => {
    let uri = getUri(), url = getUrl();
    const token = getToken();
    if (uri === 'signup.html' || uri === 'signin.html') {
        return token ? redirectToEntries() : loadAuthPage(uri);
    }
    if (token) {
        registerLogoutListener();
        hideSignUpAndSignInLinks();
        if (url.includes('/entries/')) {
            return loadEntryPage(uri, url);
        }
        else if (uri === 'profile.html') {
            return showProfile();
        }
        redirect();
    } else {
        redirect('signin.html');
    }
};
