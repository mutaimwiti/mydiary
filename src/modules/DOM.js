export default class DOM {
    static getElement(selector) {
        let value = selector.substring(1, selector.length);
        switch (selector.charAt(0)) {
            case '#':
                return document.getElementById(value);
            case '.':
                return document.getElementsByClassName(value);
        }
    }

    static getValue(id) {
        let input = this.getElement('#' + id);
        return input.value === '' ? null : input.value;
    }

    static getValues(...ids) {
        let values = {};
        for (let id of ids) {
            values[id] = this.getValue(id)
        }
        return values;
    }

    static registerListener(selector, event, context) {
        let selection = this.getElement(selector);
        let elements = (selection instanceof HTMLCollection) ? Array.from(selection) : (selection ? [selection] : []);
        elements.forEach((elem => {
            elem.addEventListener(event, (ev) => {
                ev.preventDefault();
                context.action(ev);
            })
        }))
    }

    static hide(selector) {
        $(selector).hide();
    }

    static remove(selector) {
        $(selector).remove();
    }

    static html(selector, html) {
        $(selector).html(html);
    }

    static append(selector, html) {
        $(selector).append(html);
    }

    static addClass(selector, cls) {
        $(selector).addClass(cls);
    }
}
