function jsonp (url, params, callback) {
    return new Promise((resolve, reject) => {      
        window[callback] = function (data) {
            resolve(data);
            document.removeChild(script);
        }
        params = {...params, callback};
        let arr = [];
        for(let prop in params) {
            arr.push(`${prop}=${params[prop]}`)
        }
        let script = document.createElement('script');
        script.src = `${url}?${arr.join("&")}`;
        document.appendChild(script);
    })
 }
