export function ajaxFunc(method, url, data, callback, flag) {
    flag = flag || true;//默认采用异步模式
    method = method.toUpperCase();
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    if (typeof data === 'object') {
        var tempArr = []
        for (var key in data) {
            var value = data[key]
            tempArr.push(key + '=' + value)
        }
        data = tempArr.join('&')
    }
    if (['GET', 'DELETE'].includes(method)) {
        url += ('?' + data);
        xhr.open(method, url, flag);
        xhr.setRequestHeader('token', localStorage.token);
        xhr.send();

    } else if (['POST', 'PUT'].includes(method)) {
        xhr.open(method, url, flag);
        xhr.setRequestHeader('token', localStorage.token);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                callback(this.responseText)
            } else {
                throw 'error'
            }
        }
    }

}