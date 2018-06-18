// Return true if the passed string is a valid US phone number.
// The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
// Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. 
// Return true if the string is a valid US phone number; otherwise return false.

// telephoneCheck("1(555)555-5555") should return true.
// telephoneCheck("555-5555") should return false.
// telephoneCheck("5555555") should return false.
// telephoneCheck("1 555)555-5555") should return false.
// telephoneCheck("1 555 555 5555") should return true.
// telephoneCheck("1 456 789 4444") should return true.
// telephoneCheck("123**&!!asdf#") should return false.
// telephoneCheck("55555555") should return false.
// telephoneCheck("(6505552368)") should return false
// telephoneCheck("(555-555-5555") should return false.
// telephoneCheck("(555)5(55?)-5555") should return false.

function telephoneCheck(str){
	// REMOVE WHITESPACE FROM STRING
	str = str.replace(/\s+/g, '');

	// CHECK HOW MANY NUMBERS THERE ARE
	var counter = 0;

	for(var i = 0; i < str.length; i++){
		if(str.charAt(i).match(/\d/) !== null){
			counter ++;
		}
	}

	// IF THERE ARE LESS THAN 10 OR MORE THAN 11 NUMBERS, RETURN FALSE
	if(counter < 10 || counter > 11){
		console.log("less than 10 or more than 11");
		return false;
	}

// =========================

	// AREA CODE IN PARENTHESIS
	if(counter === 10){
		var areaCodeRegEx = /^(\(\d{3}\)|\d{3})[-]?[0-9]{3}[-]?[0-9]{4}/;
		if(areaCodeRegEx.test(str)){
			return true;
		} else{
			return false;
		}
	} else if(counter === 11){
		var countryCodePlusArea = /^[1](\(\d{3}\)|\d{3})[-]?[0-9]{3}[-]?[0-9]{4}/;
		if(countryCodePlusArea.test(str)){
			return true;
		} else{
			return false;
		}
	} else{
		return false;
	}
}

telephoneCheck("(555) 555-5555");