import DOM from "./DOM";
import Router from "./Router";
import Auth from "./auth/Auth";
import Profile from "./Profile";
import Logout from "./auth/Logout";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import ViewEntry from "./entries/View";
import EditEntry from "./entries/Edit";
import ListEntries from "./entries/Index";
import CreateEntry from "./entries/Create";

export default class Page {
    static load() {
        const uri = Router.uri, auth = Auth.get();
        this.activatePageLink(uri);
        if (uri === 'signup.html' || uri === 'signin.html') {
            return auth ? Router.redirectToEntries() : this.loadAuthPage(uri);
        }
        if (auth) {
            Logout.listen();
            if (Router.url.includes('/entries/')) {
                return this.loadEntryPage(uri);
            }
            else if (uri === 'profile.html') {
                return Profile.get();
            }
            Router.redirect();
        } else {
            Auth.require();
        }
    }

    static activatePageLink(uri) {
        DOM.addClass(`a[href="${(uri === '') ? './' : uri}"]`, 'active');
    }

    static loadAuthPage(uri) {
        switch (uri) {
            case 'signin.html':
                SignIn.listen();
                break;
            case 'signup.html':
                SignUp.listen();
        }
    }

    static loadEntryPage(uri) {
        switch (uri) {
            case '':
                return ListEntries.get();
            case 'create.html':
                return CreateEntry.listen();
            default:
                if (uri.startsWith('view.html')) {
                    return ViewEntry.get(Router.param('id'));
                }
                if (uri.startsWith('edit.html')) {
                    return EditEntry.listen();
                }
        }
        Router.redirect();
    }
}
