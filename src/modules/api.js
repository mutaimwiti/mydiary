import {getToken} from "./auth/client";

class API {
    static get URL () {
        return 'https://mdiary-v1.herokuapp.com/api/v1/';
    }

    static path(uri) {
        return API.URL + uri;
    }

    /*
    This method assumes that id is the last segment of the uri. If it cannot parse
    a valid integer from the uri it returns NaN. The result of this function is
    passed as the last value on the handler callback. This way the handler can
    know the id of the resource.
     */
    static id(uri) {
        return parseInt(uri.substring(uri.lastIndexOf('/') + 1));
    }

    /*
    This method is an ajax request wrapper.
     */
    json(method, uri, body, handler, auth = true) {
        let options = {};
        options.method = method;
        if (method !== 'get' || body !== null) {
            options.body = JSON.stringify(body);
        }
        options.headers = {
            "Content-Type": "application/json",
            "x-access-token": auth ? getToken() : null
        };
        let ok = false, code = 0;
        fetch(API.path(uri), options)
            .then((response) => {
                ok = response.ok;
                code = response.status;
                return response.json();
            })
            .then(data => {
                handler(ok, code, data, API.id(uri));
            })
            .catch((error) => {
                console.log(error)
            });
    }

    get(path, handler, auth = true) {
        this.json('get', path, null, handler, auth);
    }

    post(path, body, handler, auth = true) {
        this.json('post', path, body, handler, auth);
    }

    put(path, body, handler, auth = true) {
        this.json('put', path, body, handler, auth);
    }

    delete(path, handler, auth = true) {
        this.json('delete', path, null, handler, auth);
    }
}

const api = new API();

export default api;
