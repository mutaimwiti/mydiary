import Store from "./Store";
import {has} from "./helpers";

class Router {
    static init() {
        this.DATA = 'route-data';
        this.MESSAGE = 'route-message';
    }

    static get url() {
        return window.location.href;
    }

    static get uri() {
        return this.url.substr(this.url.lastIndexOf('/') + 1);
    }

    static param(parameter) {
        return (new URL(this.url)).searchParams.get(parameter);
    }

    static get address() {
        let address = window.location.href;
        if (address.includes('entries')) {
            address = address.substring(0, address.lastIndexOf('entries'))
        }
        return address.substring(0, address.lastIndexOf('/'));
    }

    /*
    Flash data to the next page. The data should be in the format:
    {
        'data': <data to flash,
        'message': {'type': Message.SUCCESS | Message.ERROR, 'message: <msg to flash>}
    }
    After a redirect the data will be available on the next page.
    */
    static flash(data) {
        this.flashData = data;
        return this;
    }

    static redirect(page = 'index.html') {
        page = `${this.address}/${page}`;
        this.setFlash(page);
        window.location = page;
    }

    static redirectToEntries(page = '') {
        page = `entries/${page}`;
        this.setFlash(page);
        this.redirect(page);
    }

    /*
    The data and message methods pop the flash data and message respectively.
    This means that subsequent calls will yield null.
     */
    static data() {
        return this.getFlash(Store.pop(this.DATA));
    }

    static message() {
        return this.getFlash(Store.pop(this.MESSAGE));
    }

    // private flash methods
    static setFlash(page) {
        if (has('flashData', this)) {
            if (has('data', this.flashData)) {
                this.storeFlash(page, this.DATA, this.flashData.data);
            }
            if (has('message', this.flashData)) {
                this.storeFlash(page, this.MESSAGE, this.flashData.message);
            }
        }
        this.flashData = null;
    }

    /*
    The flash data expires after 30 seconds. If it goes unused beyond that time
    frame it is automatically discarded to avoid inconsistencies.
     */
    static storeFlash(page, key, payload) {
        Store.set(key, JSON.stringify({
            'page': page,
            'payload': payload,
            'expiry':new Date((new Date()).getTime() + 30000)
        }));
    }

    static getFlash(data) {
        if (data) {
            let {page, expiry, payload} = (JSON.parse(data));
            if (this.url.includes(page) && (new Date()) < new Date(expiry)) {
                return payload;
            }
        }
        return null;
    }
}

Router.init();

export default Router;
