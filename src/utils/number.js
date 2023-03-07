function shortenNumber(number) {
	return Math.abs(Number(number)) >= 1.0e9
		? (Math.abs(Number(number)) / 1.0e9).toFixed(1) + "B"
		: Math.abs(Number(number)) >= 1.0e6
		? (Math.abs(Number(number)) / 1.0e6).toFixed(1) + "M"
		: Math.abs(Number(number)) >= 1.0e3
		? (Math.abs(Number(number)) / 1.0e3).toFixed(1) + "K"
		: Math.abs(Number(number));
}

export default shortenNumber;
