import Store from "../Store";
import Router from "../Router";

class Auth {
    static init() {
        this.KEY = 'auth-token';
    }

    static get() {
        return Store.get(this.KEY);
    }

    static set(token) {
        Store.set(this.KEY, token);
    }

    static clear() {
        Store.remove(this.KEY);
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

Auth.init();

export default Auth;
