
// 归并排序
// 先将数组从中间分为两半，直到数组只有一个元素
// 再将数组按大小逐一合并
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    var len = arr.length;
    var mid = len >> 1;
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, len);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    if (left.length) {
        res.push(...left);
    }
    if (right.length) {
        res.push(...right);
    }
    return res;
}
//或者merge写成下面这样
function merge2(left, right) {
    let res = [];
    let i = 0;
    let j = 0;
     while(i<left.length && j<right.length) {
         if(left[i] <= right[j]) {
             res.push(left[i++]);
         } else {
             res.push(right[j++]);
         }
     }
     while(i<left.length) {
        res.push(left[i++]);
     }
     while(j<right.length) {
         res.push(right[j++]);
     }
     return res;

 }
