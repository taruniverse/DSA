function romanToInt(s) {
	let romanNum = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let number = 0;
	for (let i = 0; i < s.length; i++) {
		const currentVal = romanNum[s[i]];
		const nextVal = romanNum[s[i + 1]];

		if (nextVal && currentVal < nextVal) {
			number -= currentVal;
		} else {
			number += currentVal;
		}
	}
	return number;
}

romanToInt("III");
