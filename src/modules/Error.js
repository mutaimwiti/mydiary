import Flash from "./Flash";
import Auth from "./auth/Auth";

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

    static validation(payload) {
        let errors = [];
        for (let field of payload.errors) {
            errors.push(payload.errors[field])
        }
        Flash.error(errors);
    }

    static generic(payload) {
        Flash.error(payload.message ? payload.message : this.fallback);
    }

    static get fallback() {
        return 'OOPS! Seems like something went wrong.';
    }
}
