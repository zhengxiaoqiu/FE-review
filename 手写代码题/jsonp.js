function jsonp (url, params, callback) {
    return new Promise((resolve, reject) => {   
        let script = document.createElement('script');
        window[callback] = function (data) {
            resolve(data);
            document.removeChild(script);
        }
        params = {...params, callback};
        let arr = [];
        for(let prop in params) {
            arr.push(`${prop}=${params[prop]}`)
        }
        script.src = `${url}?${arr.join("&")}`;
        document.appendChild(script);
    })
 }
