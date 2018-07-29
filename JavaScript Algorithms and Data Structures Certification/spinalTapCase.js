function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.split(/\s|_|(?=[A-Z])/);

  console.log(str);

  for(let i = 0; i < str.length; i++){
    str[i] = str[i].toLowerCase();
  }
  return str.join("-");
}

spinalCase('This Is Spinal Tap');