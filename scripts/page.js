import {getToken, registerLogoutListener} from './auth/client'
import {clearMessages} from "./flash";
import {registerLoginListener} from "./auth/signIn";
import {registerSignUpListener} from "./auth/signUp";
import {showEntries} from "./entries/list";
import {showEntry} from "./entries/view";

export const getUri = (href) => {
    let location = href ? href : window.location.href;
    return location.substr(location.lastIndexOf('/') + 1);
};

export const loadPage = (uri, url) => {
    clearMessages();
    // hide any error or success messages when the user starts typing
    $('input').keyup(() => clearMessages());
    const token = getToken();
    if (uri === 'signup.html' || uri === 'signin.html') {
        if (token) {
            window.location = 'entries.html'
        }
        switch (uri) {
            case 'signin.html':
                registerLoginListener();
                break;
            case 'signup.html':
                registerSignUpListener();
        }
        // hide logout link
        $('#logout').hide();
        return
    }
    if (token) {
        registerLogoutListener();
        $('a[href^="sign"]').hide();
        // hide sign in and sign up links
        switch (uri) {
            case 'entries.html':
                showEntries();
                break;
            case 'create.html':
                break;
            case 'profile.html':
                showProfile();
                break;
        }
        if (uri.startsWith('view.html')) {
            let id = (new URL(url)).searchParams.get('id');
            showEntry(id);
        }
    } else {
        window.location = 'signin.html'
    }
};
