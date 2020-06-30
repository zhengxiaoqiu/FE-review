
// 选择排序 O(n^2)
// 遍历数组，选择数组里最小的，将其与第一位交换，接下来是第二位，以此类推
function selectionSort(arr) {
    if (!arr || arr.length <= 1) return arr;
    for (var i = 0; i < arr.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
