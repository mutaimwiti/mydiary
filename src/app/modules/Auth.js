import Store from "./Store";
import Router from "./Router";

class Auth {
    static init() {
        this.KEY = 'auth-token';
        this.EXP = 'auth-expiry';
    }

    static get() {
        let token = Store.get(this.KEY);
        let expiry = Store.get(this.EXP);
        if (token && expiry) {
            if ((new Date().getTime()) < (expiry * 1000)) {
                return token;
            }
        }
        this.clear();
        return null;
    }

    static set({token, expiry}) {
        Store.set(this.KEY, token, this.EXP, expiry);
    }

    static clear() {
        Store.remove(this.KEY, this.EXP);
    }

    static require() {
        this.clear();
        Router.redirect('auth/signin.html');
    }

    static logout() {
        this.clear();
        Router.redirect('index.html');
    }
}

Auth.init();

export default Auth;
