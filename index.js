
import { intercept } from './intercept';

export default class Http {
    static get(url, params) {
        return intercept('GET', url, params);
    }
    static async post(url, params) {
        return intercept('POST', url, params)
    }
    static async put(url, params) {
        return intercept('PUT', url, params)
    }
    static async delete(url, params) {
        return intercept('DELETE', url, params)
    }
}


