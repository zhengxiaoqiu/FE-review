 function createObj (obj) {
    var f = function () {};
    f.prototype = obj;
    return new f();
 }

 function extend (origin, target) {
    var temp = createObj(origin.prototype);
    temp.constructor = target;
    target.prototype = temp;
 }



 //整合
 function ex (origin, target) {
    var temp = function () {};
    temp.prototype = origin.prototype;
    target.prototype = new temp();
    temp.constructor = target;
 }
