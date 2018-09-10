import DOM from "./modules/DOM";
import Auth from "./modules/Auth";
import Router from "./modules/Router";
import Message from "./modules/Message";
import Profile from "./components/Profile";
import Logout from "./components/auth/Logout";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ViewEntry from "./components/entries/View";
import EditEntry from "./components/entries/Edit";
import ListEntries from "./components/entries/Index";
import CreateEntry from "./components/entries/Create";

class Bootstrap {
    static init() {
        this.URI = Router.uri;
        this.URL = Router.url;
        this.AUTH = Auth.get();
        this.MESSAGE = Router.message();
        this.IS_AUTH_PAGE = this.URI === 'signup.html' || this.URI === 'signin.html';
        this.preparePage();
    }

    static preparePage() {
        // activate page link
        DOM.addClass(`a[href="${(this.URI === '') ? './' : this.URI}"]`, 'active');
        // display flash message
        if (this.MESSAGE) {
            Message[this.MESSAGE.type](this.MESSAGE.message);
        }
    }

    static boot() {
        if (this.IS_AUTH_PAGE) {
            this.AUTH ? Router.redirectToEntries() : this.loadAuthPage();
        } else {
            if (this.AUTH) {
                Logout.init();
                if (this.URL.includes('/entries/')) {
                    this.loadEntryPage();
                }
                else if (this.URI === 'profile.html') {
                    Profile.init();
                }
            } else {
                Auth.require();
            }
        }
    }

    static loadAuthPage() {
        switch (this.URI) {
            case 'signin.html':
                SignIn.init();
                break;
            case 'signup.html':
                SignUp.init();
        }
    }

    static loadEntryPage() {
        switch (this.URI) {
            case '':
                ListEntries.init();
                break;
            case 'create.html':
                CreateEntry.init();
                break;
            default:
                if (this.URI.startsWith('view.html')) {
                    return ViewEntry.init();
                } else if (this.URI.startsWith('edit.html')) {
                    return EditEntry.init();
                }
        }
    }
}

Bootstrap.init();

export default Bootstrap;
