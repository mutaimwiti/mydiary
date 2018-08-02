const API_URL = 'https://mdiary-v1.herokuapp.com/api/v1/';

const apiUrl = (path) => API_URL + path;

const getToken = () => localStorage.getItem('auth-token');

const setToken = (value) => localStorage.setItem('auth-token', value);

const clearToken = () => localStorage.removeItem('auth-token');

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

const getValue = (id) => {
    let input = getElement(id);
    if (input.value === '') {
        return null;
    }
    return input.value;
};

const logout = (event) => {
    event.preventDefault();
    if (getToken()) {
        clearToken();
    }
    window.location = 'index.html';
};

const appErrors = $('#app_errors');

const appSuccess = $('#app_success');

const displaySuccess = (message) => {
    appSuccess.empty();
    appSuccess.append($('<ul>')
        .append($('<li>')
            .html(message)
        )
    );
    appSuccess.show();
};

const displayError = (message) => {
    appErrors.empty();
    appErrors.append($('<ul>')
        .append($('<li>')
            .html(message)
        )
    );
    appErrors.show();
};

const handleErrors = (code, payload) => {
    appErrors.empty();
    switch (code) {
        case 422:
            console.log('goof');
            let errors = payload.errors;
            appErrors.append($('<ul id="error_list">'));
            let errorList = $('#error_list');
            for (let field in errors) {
                let fieldErrors = errors[field];
                for (let i = 0; i < fieldErrors.length; i++) {
                    errorList.append($('<li>').html(fieldErrors[i]))
                }
            }
            break;
        case 500:
            appErrors.html('OOPS! :( Seems like something went wrong. Try again later.');
            break;
    }
    appErrors.show();
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
                displaySuccess('Successfully signed up. <a href="signin.html">Sign in</a> to get started!')
            } else {
                handleErrors(responseStatus, data);
                if (responseStatus === 409) {
                    displayError("A user with the same email address already exists.");
                } else {
                    handleErrors(responseStatus, data);
                }
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
                setToken(data.token);
                window.location = 'entries.html';
            } else {
                if (responseStatus === 401) {
                    displayError("Invalid email or password. Try again.")
                } else {
                    handleErrors(responseStatus, data);
                }
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
    let responseOk = false;
    let responseStatus = 0;
    fetch(apiUrl('entries'), {
        headers: {
            "Content-Type": "application/json",
            "x-access-token": getToken()
        }
    })
        .then((response) => {
            responseOk = response.ok;
            responseStatus = response.status;
            return response.json();
        })
        .then(data => {
            if (responseOk) {
                let count = data.count;
                if (count){
                    let entries = data.entries;
                    for (let i = 0; i < count; i++) {
                        $('#entries_display').append(
                            $('<div class="entry-card">')
                                .append($('<div class="row">')
                                    .append($('<div class="col-m5">')
                                        .append($('<a href="view.html?id=' + entries[i].id + '" class="btn btn-sm">')
                                            .html(entries[i].title)
                                        )
                                    )
                                    .append($('<div class="col-m5">')
                                        .html(entries[i].created_at)
                                    )
                                    .append($('<div class="col-m2">')
                                        .append($('<a href="edit.html" class="btn-small">Edit</a>'))
                                    )
                                )
                        )
                    }
                } else {
                    displaySuccess("You have no entries.")
                }
            } else {
                if (responseStatus === 401) {
                    clearToken();
                    window.location = 'signup.html';
                } else {
                    handleErrors(responseStatus, data);
                }
            }
        })
        .catch((error) => {
            console.log(error)
        });
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
    appErrors.hide();
    appSuccess.hide();
    // hide any error or success messages when the user starts typing
    $('input').keyup(() => {
        appErrors.hide();
        appSuccess.hide();
    });
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
