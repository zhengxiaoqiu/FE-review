 function myNew (fn) {
    let obj = {};
    obj.__proto__ = fn.prototype;
    let res = fn.apply(obj, [].slice.call(arguments,1));
    return typeof res === 'object' ? res : obj;
 }
