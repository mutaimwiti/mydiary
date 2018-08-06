import {checkAuth} from './auth/client'
import {getUri, loadPage} from './page'

(() => {
    const href = window.location.href;
    const uri = getUri(href);

    // activate correct link
    const current = document.querySelector("a[href='" + uri + "']");
    if (current !== null) {
        current.className += ' active';
    }

    // check for auth
    checkAuth(uri);
    // a token is available. we are just not sure it's valid
    loadPage(uri, href);
})();
