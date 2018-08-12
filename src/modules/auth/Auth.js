import Router from "../Router";

export default class Auth {
    static get() {
        return localStorage.getItem('auth-token');
    }

    static set(token) {
        localStorage.setItem('auth-token', token);
    }

    static clear() {
        localStorage.removeItem('auth-token');
    }

    static check() {
        // the sign up and sign in pages are not protected pages
        if (Router.uri !== 'signup.html' && Router.uri !== 'signin.html') {
            if (!this.get()) {
                this.require();
            }
        }
    }

    static require() {
        this.clear();
        Router.redirect('signin.html');
    }

    static logout() {
        this.clear();
        Router.redirect('index.html');
    }
}
