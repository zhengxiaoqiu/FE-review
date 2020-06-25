function subCurry(func) {
    var arg = [].slice.call(arguments, 1);
    return function () {
        func.apply(this, arg.concat([].slice.call(arguments)));
    }
}

function curry(func, length) {
    var length = length || func.length;
    return function () {
        var arg = [].slice.call(arguments);
        if (arg.length < length) {
            var combine = [func].concat(arg);
            return curry(subCurry.apply(this, combine), length - arg.length);
        } else {
            return func.apply(this, arg);
        }
    }
}
