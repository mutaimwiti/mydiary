class Flash {
    static init() {
        this.errorBox = $('#app_errors');
        this.successBox = $('#app_success');
        $('input').keyup(() => this.clear());
    }

    static success(message) {
        this[this.type(message)](this.successBox, message);
    }

    static error(message) {
        this[this.type(message)](this.errorBox, message);
    }

    static type(message) {
        return (Array.isArray(message) ? 'many' : 'single');
    }

    static single(box, message) {
        let item = `<ul><li>${message}</li></ul>`;
        box.empty().html(item).show();
    }

    static many(box, messages) {
        let items = $('<ul>');
        for (let message of messages) {
            items.append(`<li>${message}</li>`);
        }
        box.empty().html(items).show();
    }

    static clear() {
        this.errorBox.hide().empty();
        this.successBox.hide().empty();
    }
}

Flash.init();

export default Flash;
