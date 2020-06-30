// 快速排序 时间复杂度：O(nlogn) 
// 额外空间，非原地快排
function quickSort(arr) {
    if (!arr || arr.length <= 1) return arr;
    var len = arr.length;
    var pivot = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < len; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return [...quickSort(left), arr[0], ...quickSort(right)];
}


//原地快排(多两个参数)
function quickSort1(arr, left, right) {
    if (left >= right - 1) return;
    var begin = left;
    var end = right;

    do {
        do left++; while (left < right && arr[left] < arr[begin]);
        do right--; while (left < right && arr[right] > arr[begin]);
        if (left < right) swap(arr, left, right);

    } while (left < right);
    var swapPoint = left == right ? right - 1 : right;
    swap(arr, begin, swapPoint);
    quickSort1(arr, begin, swapPoint);
    quickSort1(arr, swapPoint + 1, end);
}

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp
}
