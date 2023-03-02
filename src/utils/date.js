const RelativeTimeFormat = new Intl.RelativeTimeFormat("en", {
	numeric: "auto",
});

function getMomentFrom(date) {
	const now = new Date(Date.now());

	const diffYears = Math.abs(date.getFullYear() - now.getFullYear());
	const diffMonths = Math.abs(date.getMonth() - now.getMonth());
	const diffDays = Math.abs(date.getDay() - now.getDay());
	const diffHours = Math.abs(date.getHours() - now.getHours());
	const diffMinutes = Math.abs(date.getMinutes() - now.getMinutes());

	if (diffYears > 0) {
		return RelativeTimeFormat.format(0 - diffYears, "year");
	} else if (diffMonths > 0) {
		return RelativeTimeFormat.format(0 - diffMonths, "month");
	} else if (diffDays > 0) {
		return RelativeTimeFormat.format(0 - diffDays, "day");
	} else if (diffHours > 0) {
		return RelativeTimeFormat.format(0 - diffHours, "hour");
	} else {
		return RelativeTimeFormat.format(0 - diffMinutes, "minute");
	}
}

export { getMomentFrom };
