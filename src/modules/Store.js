export default class Store {
    static get(key) {
        return localStorage.getItem(key);
    }

    static set(...items) {
        for (let x = 0; x < items.length; x += 2) {
            localStorage.setItem(items[x], items[x + 1]);
        }
    }

    static remove(...keys) {
        for (let key of keys) {
            localStorage.removeItem(key);
        }
    }

    static pop(key) {
        let value = this.get(key);
        this.remove(key);
        return value;
    }
}
