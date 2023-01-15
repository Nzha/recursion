const A = [2, 8, 15, 18];
const B = [5, 9, 12, 17, 22];
const C = [9, 3, 7, 5, 6, 4, 8, 2];

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  // Use spread operators to add remaining values in left or right if any
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

console.log(merge(A, B));
console.log(mergeSort(C));
