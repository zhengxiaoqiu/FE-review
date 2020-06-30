// 插入排序
// 假设数组前面为已排好序，对接下来一位进行比较插入
function insertionSort(arr) {
    if (!arr || arr.length <= 1) return arr;
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var temp = arr[i];
        var j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j];
            } else {

                break;
            }
        }
        arr[j + 1] = temp;
    }

}
