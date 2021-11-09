
import { intercept } from './utils/intercept';

export default class Http {
    static get(url, params) {
        return intercept('GET', url, params);
    }
    static post(url, params) {
        return intercept('POST', url, params)
    }
    static put(url, params) {
        return intercept('PUT', url, params)
    }
    static delete(url, params) {
        return intercept('DELETE', url, params)
    }
    static patch(url, params) {
        return intercept('PATCH', url, params)
    }
    static head(url, params) {
        return intercept('HEAD', url, params)
    }
}


