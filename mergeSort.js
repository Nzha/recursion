const A = [2, 8, 15, 18];
const B = [5, 9, 12, 17];

const arr = [9, 3, 7, 5, 6, 4, 8, 2];

const l = arr.at(0);
const h = arr.at(-1);

function merge(arr1, arr2, arr1TotalEl, arr2TotalEl) {
  let i = 0;
  let j = 0;
  let k = 0;

  let arrResult = [];

  while (i < arr1TotalEl && j < arr2TotalEl) {
    if (arr1[i] < arr2[j]) {
      arrResult[k++] = arr1[i++];
    } else {
      arrResult[k++] = arr2[j++];
    }
  }

  // Copy remaining elements from first array if any
  for (; i < arr1TotalEl; i++) {
    arrResult[k++] = arr1[i];
  }

  // Copy remaining elements from second array if any
  for (; k < arr2TotalEl; j++) {
    arrResult[k++] = arr[j];
  }

  return arrResult;
}

console.log(merge(A, B, A.length, B.length));

function mergeSort(l, h) {
  let tempArr = [];

  if (l < h) {
    const mid = (l + h) / 2;
    mergeSort(l, mid);
    mergeSort(mid + 1, h);
    return;
  }
}
