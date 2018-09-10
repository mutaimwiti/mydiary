import API from "../../modules/API";
import DOM from "../../modules/DOM";
import Auth from "../../modules/Auth";
import Error from "../../modules/Error";
import Router from "../../modules/Router";
import Message from "../../modules/Message";

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
            Auth.set(data);
            Router.redirectToEntries();
        } else {
            code === 401 ? Message.error(data.message) : Error.handle(code, data);
        }
    }
}
