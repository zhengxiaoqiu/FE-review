 Array.prototype.myMap = function (fn, context) {
    context = context || window;
    let newarr = [];
    let len = this.length;
    for(let i=0; i<len; i++) {
        newarr[i] = fn.call(context, this[i], i, this);
    }
    return newarr;
 }

 Array.prototype.myReduce = function (fn, init) {
     let pre = init || this[0];
     let preIndex = init ? 0 : 1;
     for(let i= preIndex; i<this.length; i++) {
        pre = fn(pre, this[i], i, this);
     }
     return pre;
 }
