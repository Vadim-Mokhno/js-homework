const isInputInvalid = function (numberOfElementsInArray, startOfRange, endOfRange) {
	if (!Number.isInteger(numberOfElementsInArray) ||
		!Number.isInteger(startOfRange) ||
		!Number.isInteger(endOfRange) ||
		endOfRange < startOfRange ||
		numberOfElementsInArray <= 0) {
		return true;
	} else {
		return false;
	}
};

const randArray = function(numberOfElementsInArray, startOfRange, endOfRange ) {
	if (isInputInvalid(numberOfElementsInArray, startOfRange, endOfRange)) {
		console.error('Invalid input');
		return null;
	}
	
	const resultArray = new Array(numberOfElementsInArray);
	
	for(let i = 0; i < resultArray.length; i++) {
		resultArray[i] =
			startOfRange + Math.floor(Math.random() * (endOfRange - startOfRange + 1));
	}
	
	return resultArray;
}

console.log(randArray(55, 0, 500));