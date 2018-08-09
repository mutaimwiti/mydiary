import {getElement} from "../dom";
import {getUri, redirect} from "../router";


export const getToken = () => localStorage.getItem('auth-token');

export const setToken = (value) => localStorage.setItem('auth-token', value);

export const clearToken = () => localStorage.removeItem('auth-token');

export const checkAuth = () => {
    let uri = getUri();
    // the sign up and sign in pages are not protected pages
    if (uri === 'signup.html' || uri === 'signin.html') {
        return
    }
    if (!getToken()) {
        // always require login if token is missing
        redirect('signin.html');
    }
};

export const requireSignIn = () => {
    clearToken();
    redirect('signin.html');
};

const logout = () => {
    clearToken();
    redirect('index.html');
};

export const registerLogoutListener = () => {
    getElement('#logout').addEventListener('click', (ev) => {
        ev.preventDefault();
        logout();
    })
};
