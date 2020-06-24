 function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, ...arguments)
        }, delay);
    }
 }


 function throttle(fn, delay) {
    let lastTime = 0;
    return function () {
        let nowTime = +new Date();
        if(nowTime - lastTime >= delay) {
            fn.call(this, ...arguments);
            lastTime = nowTime;
        }
    }

 }
