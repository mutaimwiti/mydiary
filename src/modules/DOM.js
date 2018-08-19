import {has} from "./helpers";

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

    static setValue(id, value) {
        this.getElement('#' + id).value = value;
    }

    static setValues(...items) {
        for (let x = 0; x < items.length; x += 2) {
            this.setValue(items[x], items[x + 1]);
        }
    }

    static resetValues(...ids) {
        for (let id of ids) {
            this.setValue(id, '');
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

    static blur() {
        let element = document.querySelector(':focus');
        if (element) {
            element.blur();
        }
    }

    static registerListener(selector, event, context) {
        let selection = this.getElement(selector);
        let elements = (selection instanceof HTMLCollection) ? Array.from(selection) : (selection ? [selection] : []);
        elements.forEach((elem => {
            elem.addEventListener(event, (ev) => {
                this.blur();
                ev.preventDefault();
                has('action', context) ? context.action(ev) : context(ev);
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
