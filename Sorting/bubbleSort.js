// Bubble sort
// where the largest values bubble up at the top.
//  This algorithm has a worst-case time complexity of O(n2).
// The bubble sort has a space complexity of O(1).

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let isSwapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

console.log(bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]));
