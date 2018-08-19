import Auth from "./auth/Auth";
import Message from "./Message";

export default class Error {
    static handle(code, payload) {
        switch (code) {
            case 401:
                Auth.require();
                break;
            case 422:
                this.validation(payload);
                break;
            default:
                this.generic(payload);
        }
    }

    static validation({errors}) {
        let allErrors = [];
        for (let fieldErrors of Object.values(errors)) {
            for (let error of fieldErrors) {
                allErrors.push(error)
            }
        }
        Message.error(allErrors);
    }

    static generic(payload) {
        Message.error(payload.message ? payload.message : this.fallback);
    }

    static get fallback() {
        return 'OOPS! Seems like something went wrong.';
    }
}
