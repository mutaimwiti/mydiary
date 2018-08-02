const API_URL = 'https://mdiary-v1.herokuapp.com/api/v1/';

const apiUrl = (path) => API_URL + path;

const getToken = () => localStorage.getItem('auth-token');

const setToken = (value) => localStorage.setItem('auth-token', value);

const checkAuth = (uri) => {
    // the landing, sign up and sign in pages are the only unprotected pages
    if (uri === 'index.html' || uri === 'signup.html' || uri === 'signin.html') {
        return
    }
    if (!getToken()) {
        // always require login if token is missing
        window.location.href = 'signin.html';
    }
};

const getElement = (id) => document.getElementById(id);

const getValue = (id) => getElement(id).value;

const logout = (event) => {
    event.preventDefault();
    if (getToken()) {
        localStorage.removeItem('auth-token');
    }
    window.location = 'index.html';
};

const postSignUp = (body) => {
    let responseOk = false;
    let responseStatus = 0;
    fetch(apiUrl('signup'), {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            responseOk = response.ok;
            responseStatus = response.status;
            return response.json();
        })
        .then(data => {
            if (responseOk) {
                console.log('DISPLAY SUCCESSFULLY SIGNED IN')
            } else {
                switch (responseStatus) {
                    case 422:
                        console.log('DISPLAY ERRORS');
                        break;
                    case 409:
                        console.log('USER EXISTS');
                        break;
                    case 500:
                        console.log('OOPS :( SOMETHING WENT WRONG');
                }
                console.log(data)
            }
        })
        .catch((error) => {
            console.log(error)
        });
};

const signUp = (ev) => {
    ev.preventDefault();
    let name = getValue('name');
    let email = getValue('email');
    let password = getValue('password');
    // let password_conf = getValue('password_conf');
    postSignUp({name: name, email: email, password: password});
};

const postLogin = (body) => {
    let responseOk = false;
    let responseStatus = 0;
    fetch(apiUrl('login'), {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            responseOk = response.ok;
            responseStatus = response.status;
            return response.json();
        })
        .then(data => {
            if (responseOk) {
                // Login successful
                setToken(data.token);
                window.location = 'entries.html';
            } else {
                switch (responseStatus) {
                    case 422:
                        console.log('DISPLAY ERRORS');
                        break;
                    case 401:
                        console.log('INVALID LOGIN');
                        break;
                    case 500:
                        console.log('OOPS :( SOMETHING WENT WRONG');
                }
                console.log(data)
            }
        })
        .catch((error) => {
            console.log(error)
        });
};

const login = (ev) => {
    ev.preventDefault();
    let email = getValue('email');
    let password = getValue('password');
    postLogin({email: email, password: password})
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
    // nothing changes for the landing
    if (uri === 'index.html') {
        return
    }
    const token = getToken();
    if (uri === 'signup.html' || uri === 'signin.html') {
        if (token) {
            window.location = 'entries.html'
        }
        // hide logout link
        $('#logout').hide();
        return
    }
    if (token) {
        $('a[href^="sign"]').hide();
        // hide sign in and sign up links
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
    } else {
        window.location = 'signin.html'
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