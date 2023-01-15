const A = [2, 8, 15, 18];
const B = [5, 9, 12, 17, 22];
const C = [9, 3, 7, 5, 6, 4, 8, 2];

/**
 *    A     B     C (array to store sorted list)
 * i->2  j->5  k->2
 *    8     9     5
 *    15    12    8
 *    18    17    9
 *                ...
 */

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;

  let arrResult = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arrResult[k++] = arr1[i++];
    } else {
      arrResult[k++] = arr2[j++];
    }
  }

  // Copy remaining elements from first array if any
  for (; i < arr1.length; i++) {
    arrResult[k++] = arr1[i];
  }

  // Copy remaining elements from second array if any
  for (; j < arr2.length; j++) {
    arrResult[k++] = arr2[j];
  }

  return arrResult;
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

// console.log(merge(A, B));
console.log(mergeSort(C));
