// Return the number of total permutations of the provided string that don't have
// repeated consecutive letters. Assume that all characters in the provided string
// are each unique.
//
// For example, aab should return 2 because it has 6 total permutations
//  (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the
//  same letter (in this case a) repeating.
//
// permAlone("aab") should return a number.
// permAlone("aab") should return 2.
// permAlone("aaa") should return 0.
// permAlone("aabb") should return 8.
// permAlone("abcdefa") should return 3600.
// permAlone("abfdefa") should return 2640.
// permAlone("zzzzzzzz") should return 0.
// permAlone("a") should return 1.
// permAlone("aaab") should return 0.
// permAlone("aaabb") should return 12.


// CAREFUL! SOLUTION WORKS, BUT TKAES A LONG TIME. THERE ARE MUCH BETTER WAYS TO DO THIS.
// SEE BELOW
function permAlone(str){

    var counter = 0;
    var arr = str.split("");
    var permArr = [];
    var usedChars = [];
    var finalArr = [];

    permute(arr);
    for(var i = 0; i < permArr.length; i++){
        finalArr.push(permArr[i].join(""));
    }

    for(var i = 0; i < finalArr.length; i++){
        var tempCounter = 1;
        console.log("current word: " + finalArr[i]);
        for(j = 1; j < finalArr[i].length; j++){
            console.log(finalArr[i].charAt(j));
            console.log(finalArr[i].charAt(j-1));
            if(finalArr[i].charAt(j) !== finalArr[i].charAt(j - 1)){
                console.log("this runs");
                tempCounter++;
            }
        }
        if(tempCounter === finalArr[i].length){
            console.log("add to counter");
            counter++;
        }
    }

    function permute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
    }

    return counter;
}

permAlone('aab');

// THIS SOLUTION WORKS MUCH BETTER/FASTER
function permAlone(str) {

  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}
