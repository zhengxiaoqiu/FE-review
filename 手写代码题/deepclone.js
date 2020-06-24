//未考虑Date、RegExp以及循环嵌套
function deepclone(origin, target) {
    let target = target || {};
    for(prop in origin) {
        if(origin.hasOwnProperty(prop) ) {
            if(typeof origin[prop] !== 'object' || origin[prop] == null) {
                target[prop] = origin[prop];
            } else {
               let nexttarget =  origin[prop] instanceof Array ? [] : {};
               target[prop] = deepclone(origin[prop], nexttarget);
            }
        }
    }
    return target;
 }
