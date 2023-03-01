const RelativeTimeFormat = new Intl.RelativeTimeFormat("en", {
	numeric: "auto",
});

function getMomentFrom(date) {
	const now = new Date(Date.now());

	const diffYears = Math.abs(now.getFullYear() - date.getFullYear());
	const diffMonths = Math.abs(now.getMonth() - date.getMonth());
	const diffDays = Math.abs(now.getDay() - date.getDay());
	const diffHours = Math.abs(now.getHours() - date.getHours());
	const diffMinutes = Math.abs(now.getMinutes() - date.getMinutes());

	if (diffYears > 0) {
		return RelativeTimeFormat.format(diffYears, "year");
	} else if (diffMonths > 0) {
		return RelativeTimeFormat.format(diffMonths, "month");
	} else if (diffDays > 0) {
		return RelativeTimeFormat.format(diffDays, "day");
	} else if (diffHours > 0) {
		return RelativeTimeFormat.format(diffHours, "hour");
	} else {
		return RelativeTimeFormat.format(diffMinutes, "minute");
	}
}

export { getMomentFrom };
