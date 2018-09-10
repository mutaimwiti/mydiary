import API from "../../modules/API";
import DOM from "../../modules/DOM";
import Error from "../../modules/Error";
import Router from "../../modules/Router";
import Message from "../../modules/Message";

export default class SignUp {
    static init() {
        DOM.registerListener('#sign_up_form', 'submit', this);
    }

    static action() {
        let values = DOM.getValues('name', 'email', 'password', 'password_conf');
        if (values.password !== values.password_conf) {
            Message.error('The passwords do not match.');
        } else {
            API.message('Signing up').post('signup', values, this, false);
        }
    }

    static handle(ok, code, data) {
        if (ok) {
            let message = {type: Message.SUCCESS, message: 'Successfully signed up. Sign in to get started!'};
            let data = {email: DOM.getValue('email')};
            Router.flash({data, message}).redirect('signin.html');
        } else {
            Error.handle(code, data);
        }
    }
}
