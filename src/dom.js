export const getElement = (selector) => {
    let value = selector.substring(1, selector.length);
    switch (selector.charAt(0)) {
        case '#':
            return document.getElementById(value);
        case '.':
            return document.getElementsByClassName(value);
    }
};

export const getValue = (id) => {
    let input = getElement('#' + id);
    return input.value === '' ?  null : input.value;
};
