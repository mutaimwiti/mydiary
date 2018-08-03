const API_URL = 'https://mdiary-v1.herokuapp.com/api/v1/';

const apiUrl = (path) => API_URL + path;

const getToken = () => localStorage.getItem('auth-token');

const setToken = (value) => localStorage.setItem('auth-token', value);

const clearToken = () => localStorage.removeItem('auth-token');

const checkAuth = (uri) => {
    // the sign up and sign in pages are not protected pages
    if (uri === 'signup.html' || uri === 'signin.html') {
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
        case 404:
            return displayError('The entry was not found.');
        case 422:
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
            return displayError('OOPS! :( Seems like something went wrong. Try again later.');
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

const requireSignIn = () => {
    clearToken();
    window.location = 'signin.html';
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
                if (count) {
                    let entries = data.entries;
                    for (let i = 0; i < count; i++) {
                        let id = entries[i].id;
                        let title = entries[i].title;
                        let created_at = entries[i].created_at;
                        $('#entries_display').append(
                            '<div class="entry-card" id="entry_id_' + id + '">' +
                            '   <div class="row">' +
                            '       <div class="col-m4">' +
                            '           <a href="view.html?id=' + id + '" class="btn btn-sm">' + title + '</a>' +
                            '       </div>' +
                            '       <div class="col-m4">' + created_at + '</div>' +
                            '       <div class="col-m4">' +
                            '           <a href="edit.html?id=' + id + '" class="btn-small">Edit</a>' +
                            '           <a href onclick="deleteEntry(event, ' + id + ')" class="btn-small">Delete</a>' +
                            '        </div>' +
                            '   </div>' +
                            '</div>'
                        );
                    }
                } else {
                    displaySuccess("You have no entries.")
                }
            } else {
                if (responseStatus === 401) {
                    requireSignIn();
                } else {
                    handleErrors(responseStatus, data);
                }
            }
        })
        .catch((error) => {
            console.log(error)
        });
};

const showEntry = (id) => {
    let responseOk = false;
    let responseStatus = 0;
    fetch(apiUrl('entries/' + id), {
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
                    let entry = data.entry;
                    $('#entry_display').html(
                        '<div class="panel">' +
                        '   <div class="panel-body">' +
                        '       <div class="entry">' +
                        '           <a href="edit.html?id=' + entry.id + '" class="link-button">Edit</a>' +
                        '           <h4>Date: ' + entry.created_at + '</h4>' +
                        '           <h4>Title: ' + entry.title + '</h4>' +
                        '           <p>' + entry.body + '</p>' +
                        '           <a href onclick="deleteEntry(event, ' + id + ')" class="link-button">Delete</a>' +
                        '           </div>' +
                        '   </div>' +
                        '</div>'
                    );
                } else {
                    if (responseStatus === 401) {
                        requireSignIn();
                    } else {
                        handleErrors(responseStatus, data);
                    }
                }
            }
        )
        .catch((error) => {
            console.log(error)
        });
};

const getUri = (href) => {
    let location = href ? href : window.location.href;
    return location.substr(location.lastIndexOf('/') + 1);
};

const clearMessages = () => {
    appErrors.hide();
    appSuccess.hide();
};

const deleteEntry = (ev, id) => {
    ev.preventDefault();
    clearMessages();
    let responseOk = false;
    let responseStatus = 0;
    fetch(apiUrl('entries/' + id), {
        method: "delete",
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
                    if (getUri().startsWith('view.html')) {
                        displaySuccess('The entry was deleted successfully');
                        $('#entry_display').empty();
                    } else {
                        $('#entry_id_' +  id).remove();
                    }
                } else {
                    if (responseStatus === 401) {
                        requireSignIn();
                    } else {
                        handleErrors(responseStatus, data);
                    }
                }
            }
        )
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

const loadPage = (uri, url) => {
    clearMessages();
    // hide any error or success messages when the user starts typing
    $('input').keyup(() => clearMessages());
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
    const uri = getUri(href);

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
