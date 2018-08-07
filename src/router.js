export const getUrl = () =>  window.location.href;

export const getUri = () => {
    let url = getUrl();
    return url.substr(url.lastIndexOf('/') + 1);
};

// credit Stack overflow: https://stackoverflow.com/questions/6941533/get-protocol-domain-and-port-from-url
const getAddress = () => location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

export const redirect = (page='index.html') => window.location = `${getAddress()}/${page}`;

export const redirectToEntries = (page = '') => window.location = `${getAddress()}/entry/${page}`;
