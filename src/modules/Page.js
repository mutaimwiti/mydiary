import DOM from "./DOM";
import Router from "./Router";
import Auth from "./auth/Auth";
import Message from "./Message";
import Profile from "./Profile";
import Logout from "./auth/Logout";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import ViewEntry from "./entries/View";
import EditEntry from "./entries/Edit";
import ListEntries from "./entries/Index";
import CreateEntry from "./entries/Create";

class Page {
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

    static load() {
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

Page.init();

export default Page;
