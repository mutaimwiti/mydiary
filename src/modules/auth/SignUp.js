import API from "../API";
import DOM from "../DOM";
import Error from "../Error";
import Router from "../Router";
import Message from "../Message";

export default class SignUp {
    static init() {
        DOM.registerListener('#sign_up_form', 'submit', this);
        this.DONE = {type: Message.SUCCESS, message: 'Successfully signed up. Sign in to get started!'};
    }

    static action() {
        let values = DOM.getValues('name', 'email', 'password', 'password_conf');
        if (values.password !== values.password_conf) {
            Message.error('The passwords do not match.');
        } else {
            API.post('signup',values, this, false);
        }
    }

    static handle(ok, code, data) {
        if (ok) {
            let data = {data: {email: DOM.getValue('email')}, message: this.DONE};
            Router.flash(data).redirect('signin.html');
        } else {
            Error.handle(code, data);
        }
    }
}
