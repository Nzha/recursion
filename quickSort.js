var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];

// This function partitions given array and returns the index of the pivot.
var partition = function (array, p, r) {
  var e = array,
    t = p,
    n = r;

  var r = function (e, t, n) {
    var r = e[t];
    e[t] = e[n];
    e[n] = r;
  };

  var i = t;

  for (var s = t; s < n; s++) {
    if (e[s] <= e[n]) {
      r(e, s, i);
      i++;
    }
  }

  r(e, n, i);

  return i;
};

var quickSort = function (array, p, r) {
  if (p < r) {
    let pivotIndex = partition(array, p, r);
    quickSort(array, p, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, r);
  }

  return array;
};

quickSort(array, 0, array.length - 1);
console.log('Array after sorting: ' + array);
