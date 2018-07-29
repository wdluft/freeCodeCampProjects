function translatePigLatin(str) {
  let vowelRegex = /a|e|i|o|u/;
  console.log(str);

  if(vowelRegex.test(str[0])){
    return str.concat("way");
  }

  str = str.split(/(?=a)|(?=e)|(?=i)|(?=o)|(?=u)/);
  str.push(str[0]);
  str.shift();
  str = str.join("");
  return str.concat("ay");
 
}

translatePigLatin("consonant");