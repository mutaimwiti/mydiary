import API from "../API";
import DOM from "../DOM";
import Auth from "./Auth";
import Flash from "../Flash";
import Error from "../Error";
import Router from "../Router";

export default class SignIn {
    static listen() {
        DOM.registerListener('#login_form', 'submit', this);
    }

    static action() {
        API.post('login', DOM.getValues('email', 'password'), this, false);
    }

    static handle(ok, code, data) {
        if (ok) {
            Auth.set(data.token);
            Router.redirectToEntries();
        } else {
            if (code === 401) {
                Flash.error(data.message);
            } else {
                Error.handle(code, data);
            }
        }
    }
}
