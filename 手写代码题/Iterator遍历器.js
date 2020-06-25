// 返回一个next函数，next函数执行返回一个对象，对象里包括done和value两个属性
function makeIterator (item) {
    var i = 0;
    return {
        next: function () {
            var done = i > item.length;
            var value = !done ? item[i++] : undefined;
            return {
                done: done,
                value: value
            }
        }
    }
}
