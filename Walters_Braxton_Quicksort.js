function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const stack = [];
    stack.push(0);
    stack.push(arr.length - 1);
    while (stack.length > 0) { 
      const high = stack.pop();
      const low = stack.pop();
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
  function partition(arr, low, high) {
    const pivotPoint = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivotPoint) {
        i++;
        swap(arr, i, j);
      }
    }
  
    swap(arr, i + 1, high);
    return i + 1;
  }
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
//   [5, 1, 3, 4, 2] 5
function quickSort2(arr) {
  // 5 <= 1
  if (arr.length <= 1) {
    return arr
  }
  //  p = 2
  pivot = arr[arr.length - 1];
  let leftSide = [];
  let rightSide = [];
  for (let i = 0; i < arr.length - 1; i++) {
    //    2 < 2
    if (arr[i] < pivot) {
      //   [1]
      leftSide.push(arr[i]);
    }
    else {
      //   [5, 3, 4, 2]
      rightSide.push(arr[i]);
    }
  }
  return [].concat(quickSort2(leftSide), pivot, quickSort2(rightSide));
}

const randomArr = [5, 1, 3, 4, 2]
console.log(quickSort(randomArr));


function quickSort3 (arr) {
  //           rightSide = 4
  let rightSide = arr.length - 1;
  //  leftSide = 0
  let leftSide = 0;

  let index = partition1(arr, rightSide, leftSide)
  if (leftSide < index - 1) {
    return quickSort3(arr)
  }
  else if (index < rightSide) {
    return quickSort3(arr)
  }

  // idx = partition1()
  // recursively call quickSort for first half
  // recursively call quickSort for second half
}


function partition1(arr, rSide, lSide) {
  // pick a pivot 
  // keep swapping until it is partitioned
  // return the partition index 
  let pivot = (rSide + lSide) / 2
}
