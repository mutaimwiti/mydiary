import {loadPage} from './modules/page'
import {checkAuth} from './modules/auth/client'
import {registerMessaging} from "./modules/flash";
import {activateLocationLink} from "./modules/links";

(() => {
    checkAuth();
    registerMessaging();
    activateLocationLink();
    loadPage();
})();
