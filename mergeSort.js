const A = [2, 8, 15, 18];
const B = [5, 9, 12, 17, 22];
const C = [9, 3, 7, 5, 6, 4, 8, 2];

function merge(arr1, arr2) {
  let sortedArr = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }

  // Use spread operators to add any remaining values from arr1 or arr2
  return [...sortedArr, ...arr1, ...arr2];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

console.log(merge(A, B));
console.log(mergeSort(C));
