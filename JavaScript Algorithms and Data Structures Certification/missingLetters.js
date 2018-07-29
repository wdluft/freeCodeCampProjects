// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.


function fearNotLetter(str) {

  let start = str.charCodeAt(0);

  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) === start){
      start++;
    } else{
      return String.fromCharCode(start);
    }
  }

  return undefined;
}

fearNotLetter("abce");