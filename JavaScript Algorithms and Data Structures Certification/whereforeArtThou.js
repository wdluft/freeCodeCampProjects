function whatIsInAName(collection, source) {
  // What's in a name?
  let tempKeys = Object.keys(source);

  return collection.filter(function (obj){
    for(let i = 0; i < tempKeys.length; i++){
      if(!obj.hasOwnProperty(tempKeys[i]) || obj[tempKeys[i]] !== source[tempKeys[i]]){
        return false;
      }
    }
   return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
