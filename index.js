
import { intercept } from './utils/intercept';

export default class Http {
    static async get(url, params) {
        return await intercept('GET', url, params);
    }
    static async post(url, params) {
        return await intercept('POST', url, params)
    }
    static async put(url, params) {
        return await intercept('PUT', url, params)
    }
    static async delete(url, params) {
        return await intercept('DELETE', url, params)
    }
    static async patch(url, params) {
        return await intercept('PATCH', url, params)
    }
    static async head(url, params) {
        return await intercept('HEAD', url, params)
    }
}


