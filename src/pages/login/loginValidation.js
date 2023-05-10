function loginValidation(data) {
	const errors = {};

	// const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
	const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]$/;

	if (data.email.length < 1) {
		errors.email = "email is required";
	}

	// else if(!email_pattern.test(data.email)){
	//     errors.email = "email is required"
	// }

	if (!password_pattern.test(data.password) && data.password.length < 8) {
		errors.password =
			"password is required and should contains upper letter, number, and atleast 8 word";
	}

	return errors;
}

export default loginValidation;
