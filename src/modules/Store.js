export default class Store {
    static get(key) {
        return localStorage.getItem(key);
    }

    static set(key, value) {
        localStorage.setItem(key, value);
    }

    static remove(key) {
        localStorage.removeItem(key);
    }

    static pop(key) {
        let value = this.get(key);
        this.remove(key);
        return value;
    }
}
