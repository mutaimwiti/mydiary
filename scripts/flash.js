const appErrors = $('#app_errors');

const appSuccess = $('#app_success');

export const clearMessages = () => {
    appErrors.hide();
    appSuccess.hide();
};

export const displaySuccess = (message) => {
    appSuccess.empty();
    appSuccess.append($('<ul>')
        .append($('<li>')
            .html(message)
        )
    );
    appSuccess.show();
};

export const displayError = (message) => {
    appErrors.empty();
    appErrors.append($('<ul>')
        .append($('<li>')
            .html(message)
        )
    );
    appErrors.show();
};

export const handleErrors = (code, payload) => {
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
