// Flatten a nested array. You must account for varying levels of nesting.
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

function steamrollArray(arr){
	var flatArr = [];

	function checkArr(isArr){
		if(!Array.isArray(isArr)){
			flatArr.push(isArr);
		} else {
			for(var i = 0; i < isArr.length; i++){
				checkArr(isArr[i]);
			}
		}
	}

	arr.forEach(checkArr);
	return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

