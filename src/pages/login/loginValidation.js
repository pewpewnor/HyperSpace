function loginValidation(data) {
	const errors = {};

	// const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
	const password_pattern = /^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{&.}$/;

	if (data.email === "") {
		errors.email = "email is required";
	}
	// else if(!email_pattern.test(data.email)){
	//     errors.email = "email is required"
	// }

	if (data.password === "") {
		errors.password = "passwword is required";
	} else if (!password_pattern.test(data.password)) {
		errors.password =
			"password should contains upper letter, number, and atleast 8 word";
	}

	return errors;
}

export default loginValidation;
