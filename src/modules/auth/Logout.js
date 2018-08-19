import DOM from "../DOM";
import Auth from "./Auth";

export default class Logout {
    static init() {
        DOM.registerListener('#logout', 'click', this);
    }

    static action() {
        Auth.logout();
    }
}
