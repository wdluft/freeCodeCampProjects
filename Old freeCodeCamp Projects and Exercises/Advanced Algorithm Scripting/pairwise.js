// Given an array arr, find element pairs whose sum equal the second argument arg
// and return the sum of their indices.
//
// If multiple pairs are possible that have the same numeric elements but different
// indices, return the smallest sum of indices. Once an element has been used,
// it cannot be reused to pair with another.
//
// For example pairwise([7, 9, 11, 13, 15], 20) returns 6.
// The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the
// array with their indices and values.
//
// pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
// pairwise([1, 3, 2, 4], 4) should return 1.
// pairwise([1, 1, 1], 2) should return 1.
// pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
// pairwise([], 100) should return 0.

// MY SOLUTION IS INCOMPLETE, GOT STUCK TRYING A BUNCH OF DIFFERENT THINGS
// TO NOT USE MULTIPLE PAIRS WITH THE SAME NUMERIC ELEMENTS
function pairwise(arr, arg){
    var sumOfIndex = [];

    for(var i = 0; i < arr.length; i++){
        for(var j = 1; j < arr.length; j++){
            if(i === j){
                break;
            } else if(i < j && arr[i] + arr[j] === arg && sumOfIndex.indexOf(+i) === -1 && sumOfIndex.indexOf(+j) === -1){
                console.log(arr[i]);
                console.log(arr[j]);
                sumOfIndex.push(+i, +j);
                break;
            }
        }
    }

    var sum = sumOfIndex.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    }, 0);

    return sum;
}

pairwise([1, 4, 2, 3, 0, 5], 7);

// SOLUTION SIMILAR TO WHAT i WAS TRYING TO DO
function pairwise(arr, arg) {
  // Create empty array to keep the arrays we will add.
  var index = [];

  // Loop to check the first number.
  for (var a in arr) {
    // temporal first number.
    var temp = arr[a];

    // Second loop to check against the first number.
    for (var i = 1; i < arr.length; i++) {
      // temporal second number.
      var temp2 = arr[i];

      // Key element, this check to make sure that the numbers add to arg
      // also that the second index is greater than the first, and that neither
      // of those indices are already on the array.
      if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
        // if true then add both indices as integers then stop checking to avoid repeats.
        index.push(+a, +i);
        console.log(index);
        break;
      }
    }
  }

  // After the two loops are done, check if index is empty to return 0
  // or if it is not, then use Array.reduce(callbackFunc) to return the sum
  // of the numbers.
  if (index.length >= 1) {
    var addAll = function(a, b) {
      return a + b;
    };

    return index.reduce(addAll);
  } else
      return 0;
}
