// 冒泡排序 时间复杂度：O(n^2) 空间复杂度：O(1)
// 一次比较两个元素，如果顺序错误则交换。
// 第一遍使最大的元素冒泡到最后，第二遍次大，以此类推
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 优化
// 1.若某一趟没有发生交换，则说明已完全排好序，直接退出
function bubbleSort1(arr) {
    var flag = false;
    for (var i = 0; i < arr.length; i++) {
        flag = false;
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                flag = true;
            }
        }
        if (!flag) break; // 执行了一圈flag都没变，说明没有发生交换
    }
    return arr;
}


// 2.若数组后边已有排好序部分，则可将待排序数组边界缩小
function bubbleSort2(arr) {
    var flag = false;
    var lastChangeIndex = 0;
    var rightside = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {
        flag = false;
        for (var j = 0; j < rightside; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                lastChangeIndex = j;
                flag = true;
            }
        }
        rightside = lastChangeIndex;
        if (!flag) break;
    }
    return arr;
}
