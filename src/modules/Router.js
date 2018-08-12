export default class Router {
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

    static redirect(page = 'index.html') {
        window.location = `${this.address}/${page}`;
    }

    static redirectToEntries(page = '') {
        this.redirect(`entries/${page}`);
    }
}
