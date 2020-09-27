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
     let pre = this[0];
     let preIndex = 1;
     if(typeof init != 'undefined') {
         pre = init;
         preIndex = 0;
     }
     
//      let pre = init || this[0];
//      let preIndex = init ? 0 : 1;
//  上面这么写，在init为0的情况下会出错（快手面试遇到的， 总结一下）
  
     for(let i= preIndex; i<this.length; i++) {
        pre = fn(pre, this[i], i, this);
     }
     return pre;
 }
