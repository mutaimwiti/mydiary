const getToken = () => {
    return localStorage.getItem('auth-token');
};

const setToken = (value) => {
    return localStorage.setItem('auth-token', value)
};

const checkAuth = (uri) => {
    // the landing, sign up and sign in pages are the only unprotected pages
    if (uri === 'index.html' || uri === 'signUp.html' || uri === 'signin.html') {
        return
    }
    if (!getToken()) {
        // always require login if token is missing
        window.location.href = 'signin.html';
    }
};

const signUp = () => {

};

const login = () => {

};

const fetchEntries = () => {
    console.log('LOAD ENTRIES LISTING');
};

const createEntry = () => {
    console.log('EXPECT CREATION OF ENTRY');
};

const showProfile = () => {
    console.log('SHOW PROFILE');
};

const showEntry = (id) => {
    console.log('Show ' + id);
    console.log('SHOW SPECIFIC ENTRY');
};

const loadPage = (uri, url) => {
    // nothing changes for the landing, sign up and sign in pages
    if (uri === 'index.html' || uri === 'signUp.html' || uri === 'signin.html') {
        return
    }
    //
    switch (uri) {
        case 'entries.html':
            fetchEntries();
            break;
        case 'create.html':
            break;
        case 'profile.html':
            showProfile();
            break;
    }
    if (uri.startsWith('view.html')) {
        let id = (new URL(url)).searchParams.get('id');
        showEntry(id);
    }
};

(() => {
    const href = window.location.href;
    const uri = href.substr(href.lastIndexOf('/') + 1);

    // activate correct link
    const current = document.querySelector("a[href='" + uri + "']");
    if (current !== null) {
        current.className += ' active';
    }

    // check for auth
    checkAuth(uri);
    // a token is available. we are just not sure it's valid
    loadPage(uri, href);
})();