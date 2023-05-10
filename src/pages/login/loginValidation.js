function loginValidation(data) {
	const errors = {};

	const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

	if (data.email.length < 1) {
		errors.email = "email is required";
	} else if (!email_pattern.test(data.email)) {
		errors.email = "email must be valid";
	}

	if (data.password.length < 1) {
		errors.password = "password is required";
	}

	return errors;
}

export default loginValidation;
