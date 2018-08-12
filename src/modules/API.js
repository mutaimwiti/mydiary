import Flash from "./Flash";
import Auth from "./auth/Auth";

export default class API {
    static get URL() {
        return 'https://mdiary-v1.herokuapp.com/api/v1/';
    }

    static path(uri) {
        return this.URL + uri;
    }

    /*
    This method assumes that id is the last segment of the uri. If it cannot parse
    a valid integer from the uri it returns NaN. The result of this function is
    passed as the last value on the context handle callback. This way the
    handler can know the id of the resource if it requires it to take
    further action.
     */
    static id(uri) {
        return parseInt(uri.substring(uri.lastIndexOf('/') + 1));
    }

    /*
    This method is an ajax request wrapper. Before a request is made flash
    messages are cleared.
     */
    static json(method, uri, body, context, auth = true) {
        Flash.clear();
        let options = {};
        options.method = method;
        if (method !== 'get' || body !== null) {
            options.body = JSON.stringify(body);
        }
        options.headers = {
            "Content-Type": "application/json",
            "x-access-token": auth ? Auth.get() : null
        };
        let ok = false, code = 0;
        fetch(this.path(uri), options)
            .then((response) => {
                ok = response.ok;
                code = response.status;
                return response.json();
            })
            .then(data => {
                context.handle(ok, code, data, this.id(uri));
            })
            .catch((error) => {
                console.log(error)
            });
    }

    static get(path, context, auth = true) {
        this.json('get', path, null, context, auth);
    }

    static post(path, body, context, auth = true) {
        this.json('post', path, body, context, auth);
    }

    static put(path, body, context, auth = true) {
        this.json('put', path, body, context, auth);
    }

    static delete(path, context, auth = true) {
        this.json('delete', path, null, context, auth);
    }
}
