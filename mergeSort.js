const A = [2, 8, 15, 18];
const B = [5, 9, 12, 17];

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
  for (; k < arr2.length; j++) {
    arrResult[k++] = arr[j];
  }

  return arrResult;
}

console.log(merge(A, B));

const arr = [9, 3, 7, 5, 6, 4, 8, 2];

const l = arr.at(0);
const h = arr.at(-1);

function mergeSort(l, h) {
  let tempArr = [];

  if (l < h) {
    const mid = (l + h) / 2;
    mergeSort(l, mid);
    mergeSort(mid + 1, h);
    return;
  }
}
