import {loadPage} from './page'
import {checkAuth} from './auth/client'
import {registerMessaging} from "./flash";
import {activateLocationLink} from "./links";

(() => {
    checkAuth();
    registerMessaging();
    activateLocationLink();
    loadPage();
})();
