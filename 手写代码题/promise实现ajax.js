
const ajax = (obj) => {
    return new Promise((res, rej) => {
        let method = obj.method || "GET";

        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        if(method === 'POST' ) {
            xhr.open(method, obj.url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(obj.data);
        } else {
            let query = '';
            for(let key in obj.data) {
                query += `&${key}=${obj.data[key]}`;
            }
            xhr.open('GET', obj.url+'?'+query.toString(1), true);
            xhr.send();
        }

        xhr.onreadystatechange = function () {
            if(xhr.readState === 4) {
                if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                    res(xhr.responseText);
                } else {
                    rej(new Error('error'));
                }
            }
        }
    })
}
