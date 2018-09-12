import Auth from "../../../src/app/modules/Auth";

describe('Error', () => {
    let Error, errorBox;

    document.body.innerHTML = '<div id="app_errors"></div><div id="app_success"></div>';
    // Message can only be referenced after loading html because it's initialization
    // requires success and error boxes.
    Error = require('../../../src/app/modules/Error').default;
    errorBox = document.getElementById('app_errors');

    it('triggers auth require for 401 status', () => {
        const spy = jest.spyOn(Auth, 'require');
        Error.handle(401);
        expect(spy).toHaveBeenCalled();
    });

    it('prints validation messages', () => {
        Error.handle(422, {
            errors: {
                email: ["The email field [hbh@codecom] is not a valid email address."],
                password: ["The password field must have a minimum length of 6."]
            }
        });
        expect(errorBox.innerHTML).toContain('The email field [hbh@codecom] is not a valid email address.');
        expect(errorBox.innerHTML).toContain('The password field must have a minimum length of 6.');
    });

    it('has a fallback error message', () => {
        Error.handle(5000, {message: null});
        expect(errorBox.innerHTML).toContain('OOPS! Seems like something went wrong.');
    });

});
