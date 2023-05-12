function loginValidation(data) {
	const errors = {};

	// const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

	if (data.username.length < 1) {
		 = "email is required";
	} 
	// else if (!email_pattern.test(data.email)) {
	// 	 = "username must be valid";
	// }

	if (data.password.length < 1) {
		 = "password is required";
	}

	return errors;
}

export default loginValidation;
