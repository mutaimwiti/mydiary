export const getUrl = () =>  window.location.href;

export const getUri = () => {
    let url = getUrl();
    return url.substr(url.lastIndexOf('/') + 1);
};

const getAddress = () => {
    let address = window.location.href;
    if (address.includes('entries')) {
        address = address.substring(0, address.lastIndexOf('entries'))
    }
    return address.substring(0, address.lastIndexOf('/'));
};

export const redirect = (page ='index.html') => window.location = `${getAddress()}/${page}`;

export const redirectToEntries = (page = '') => redirect(`entries/${page}`);
