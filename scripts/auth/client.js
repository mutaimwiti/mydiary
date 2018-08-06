import {getElement} from "../dom";

export const getToken = () => localStorage.getItem('auth-token');

export const setToken = (value) => localStorage.setItem('auth-token', value);

export const clearToken = () => localStorage.removeItem('auth-token');

export const checkAuth = (uri) => {
    // the sign up and sign in pages are not protected pages
    if (uri === 'signup.html' || uri === 'signin.html') {
        return
    }
    if (!getToken()) {
        // always require login if token is missing
        window.location.href = 'signin.html';
    }
};

export const requireSignIn = () => {
    clearToken();
    window.location = 'signin.html';
};

const logout = () => {
    clearToken();
    window.location = 'index.html';
};

export const registerLogoutListener = () => {
    getElement('#logout').addEventListener('click', (ev) => {
        ev.preventDefault();
        logout();
    })
};
