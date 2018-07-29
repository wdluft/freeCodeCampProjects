function myReplace(str, before, after) {

  //match case of first character
  if(before.charCodeAt(0) >= 97){
    after = after.toLowerCase();
  } else{
    after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
  }
  str = str.split(" ");
  let insertIndex = str.indexOf(before);
  str.splice(insertIndex, 1, after);
  return str.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
