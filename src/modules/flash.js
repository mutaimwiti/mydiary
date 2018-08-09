let appErrors, appSuccess;

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
        default:
            let message = 'OOPS! :( Seems like something went wrong. Try again later.';
            displayError(payload.message ? payload.message: message);
    }
    appErrors.show();
};

export const registerMessaging = () => {
    appErrors = $('#app_errors');
    appSuccess = $('#app_success');
    clearMessages();
    $('input').keyup(() => clearMessages());
};
