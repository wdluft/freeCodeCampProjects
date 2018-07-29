// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Schindler's List") should return Schindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.

function convertHTML(str) {
  // &colon;&rpar;
  let splitArr = str.split("");

  for(let i = 0; i < splitArr.length; i++){
    switch(splitArr[i]){
      case "&":
      splitArr[i] = "&amp;";
      break;
      case "<":
      splitArr[i] = "&lt;";
      break;
      case ">":
      splitArr[i] = "&gt;";
      break;
      case "'":
      splitArr[i] = "&apos;";
      break;
      case '"':
      splitArr[i] = "&quot;";
      break;
    }
  }

  return splitArr.join("");
}

convertHTML("Dolce & Gabbana");