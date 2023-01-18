var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];

var swap = function (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var partition = function (array, p, r) {
  let q = p;

  for (var j = p; j < r; j++) {
    if (array[j] <= array[r]) {
      swap(array, j, q);
      q++;
    }
  }
	
  swap(array, r, q);

  return q;
};

var quickSort = function (array, p, r) {
  if (p < r) {
    let pivotIndex = partition(array, p, r);
    quickSort(array, p, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, r);
  }

  return array;
};

var q = partition(array, 0, array.length - 1);
console.log('Array after partitioning: ' + array);

quickSort(array, 0, array.length - 1);
console.log('Array after sorting: ' + array);
