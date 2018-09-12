import Auth from "../../../src/app/modules/Auth";
import Store from "../../../src/app/modules/Store";
import Router from "../../../src/app/modules/Router";

describe('Auth', () => {
    const spyOnRedirect = jest.spyOn(Router, 'redirect');
    const spyOnClear = jest.spyOn(Auth, 'clear');

    const token = '$ecretAcce$$Token';
    const expiry = 1536765293;

    beforeEach(() => {
        jest.clearAllMocks()
    });

    it('sets auth token and expiry', () => {
        Auth.set({token, expiry});
        expect(Store.get(Auth.KEY)).toEqual(token);
        expect(parseInt(Store.get(Auth.EXP))).toEqual(expiry);
    });

    it('gets the auth token', () => {
        let expiry = new Date(new Date().setMinutes(new Date().getMinutes() + 30)).getTime();
        Auth.set({token, expiry});
        expect(Auth.get()).toEqual(token);
    });

    it('returns null if auth token is expired', () => {
        let expiry = new Date(new Date().setSeconds(new Date().getSeconds() - 45));
        Auth.set({token, expiry});
        expect(Auth.get()).toEqual(null);
    });

    it('clears auth data', () => {
        Auth.set({token, expiry});
        Auth.clear();
        expect(Store.get(Auth.KEY)).toEqual(null);
        expect(Store.get(Auth.EXP)).toEqual(null);
    });

    it('clears auth data and redirects to login page when require is called', () => {
        Auth.set({token, expiry});
        Auth.require();
        expect(spyOnClear).toHaveBeenCalled();
        expect(spyOnRedirect).toHaveBeenCalledWith('auth/signin.html');
    });

    it('clears auth data and redirects to landing page when logout is called', () => {
        Auth.set({token, expiry});
        Auth.logout();
        expect(spyOnClear).toHaveBeenCalled();
        expect(spyOnRedirect).toHaveBeenCalledWith('index.html');
    });

});
