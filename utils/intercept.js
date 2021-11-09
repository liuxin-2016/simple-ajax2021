
import { ajaxFunc } from './ajax';
import { toast } from './toast'

export function intercept(method, url, params) {
    return new Promise((reslove) => {
        ajaxFunc(method, url, params, (data) => reslove(data))
    }).then((value) => {
        if (value.code === '200') {
            return value.data
        } else if (value.code === '401') {
            toast('登录已过期')
            window.localStorage.clear();
            window.sessionStorage.clear();
            setTimeout(function () { window.location.reload() }, 1000)
        } else {
            toast(JSON.parse(value).message)
        }
    })
}