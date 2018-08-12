import Router from "./Router";
import DOM from "./DOM";

export default class Link {
    static hideLogout() {
        DOM.hide('#logout');
    }

    static hideSignUpSignIn() {
        DOM.hide('a[href^="sign"], a[href^="../sign"]');
    }

    static activateCurrent() {
        let uri = (Router.uri === '') ? './' : Router.uri;
        DOM.addClass(`a[href="${uri}"]`, 'active');
    }
}
