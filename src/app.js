import Page from './modules/Page'
import Auth from "./modules/auth/Auth";

(() => {
    Auth.check();
    Page.load();
})();
