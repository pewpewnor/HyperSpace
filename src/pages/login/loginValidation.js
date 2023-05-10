function loginValidation(data) {
	const errors = {};

	// const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
	const password_pattern = /^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{&.}$/;

	if (data.email === "") {
		 = "email is required";
	}
	// else if(!email_pattern.test(data.email)){
	//      = "email is required"
	// }

	if (data.password === "") {
		 = "passwword is required";
	} else if (!password_pattern.test(data.password)) {
		 =
			"password should contains upper letter, number, and atleast 8 word";
	}

	return errors;
}

export default loginValidation;
