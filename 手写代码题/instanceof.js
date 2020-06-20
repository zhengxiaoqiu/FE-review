 function myInstanceOf(left, right) {
     if(typeof(left) !== 'object' || left === null) return false;
     let rigthProto = rigth.prototype;
     let leftProto = left.__proto__;
     while(true) {
         if(leftProto === null) return false;
         if(leftProto === rigthProto) return true;
         leftProto = left.__proto__;
     }
 }
