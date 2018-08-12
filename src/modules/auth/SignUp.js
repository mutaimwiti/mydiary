import API from "../API";
import DOM from "../DOM";
import Error from "../Error";
import Flash from "../Flash";

export default class SignUp {
    static listen() {
        DOM.registerListener('#sign_up_form', 'submit', this);
    }

    static action() {
        // need to confirm the password
        API.post('signup', DOM.getValues('name', 'email', 'password'), this, false);
    }

    static handle(ok, code, data) {
        if (ok) {
            Flash.success('Successfully signed up. <a href="signin.html">Sign in</a> to get started!');
        } else {
            Error.handle(code, data);
        }
    }
}
