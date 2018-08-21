import API from "../API";
import DOM from "../DOM";
import Auth from "./Auth";
import Error from "../Error";
import Router from "../Router";
import Message from "../Message";

export default class SignIn {
    static init() {
        DOM.registerListener('#login_form', 'submit', this);
        this.flash(Router.data());
    }

    static flash(data) {
        if (data) {
            DOM.setValue('email', data.email);
        }
    }

    static action() {
        API.message('Signing in').post('login', DOM.getValues('email', 'password'), this, false);
    }

    static handle(ok, code, data) {
        if (ok) {
            Auth.set(data.token);
            Router.redirectToEntries();
        } else {
            code === 401 ? Message.error(data.message) : Error.handle(code, data);
        }
    }
}
