import DOM from "../../modules/DOM";
import Auth from "../../modules/Auth";

export default class Logout {
    static init() {
        DOM.registerListener('#logout', 'click', this);
    }

    static action() {
        Auth.logout();
    }
}
