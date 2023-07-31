function quickSort(arr) {
  //       5 <= 1
    if (arr.length <= 1) {
      return arr;
    }
  
    const stack = [];
    //  stack = [0, 4]
    stack.push(0);
    stack.push(arr.length - 1);
    //           2 > 0
    while (stack.length > 0) { 
      const high = stack.pop();
      const low = stack.pop();
      // high = 4
      // low = 0 
      //               [5, 1, 3, 4, 2], 0, 4
      const pivotIndex = partition(arr, low, high);
  
      if (pivotIndex - 1 > low) {
        stack.push(low);
        stack.push(pivotIndex - 1);
      }
  
      if (pivotIndex + 1 < high) {
        stack.push(pivotIndex + 1);
        stack.push(high);
      }
    }
  
    return arr;
  }
  //      [5, 1, 3, 4, 2], 0, 4
  function partition(arr, low, high) {
    //              pivot = 2
    const pivotPoint = arr[high];
    //  i = -1
    let i = low - 1;
  //     j = 0; 0 < 4; 
    for (let j = low; j < high; j++) {
      //  5 < 2
      //  1 < 2
      if (arr[j] < pivotPoint) {
        i++;
//[5, 1, 3, 4, 2], 0, 1 
        swap(arr, i, j);
      }
    }
  
    swap(arr, i + 1, high);
    return i + 1;
  }
  //[5, 1, 3, 4, 2], 0, 1 
  function swap(arr, i, j) {
    //    temp = 5
    const temp = arr[i];
    //arr[0] = 1
    arr[i] = arr[j];
    // arr[1] = 5
    arr[j] = temp;
    // arr is now [1, 5, 3, 4, 2]
  }

function quickSort2(arr) {
  if (arr.length <= 1) {
    return arr
  }
  pivot = arr[arr.length - 1];
  let leftSide = [];
  let rightSide = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftSide.push(arr[i]);
    }
    else {
      rightSide.push(arr[i]);
    }
  }
  
  return [].concat(quickSort2(leftSide), pivot, quickSort2(rightSide));
}

const randomArr = [5, 1, 3, 4, 2]
console.log(quickSort2(randomArr));