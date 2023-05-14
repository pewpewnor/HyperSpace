
export default function registerValidation(data){

    const errors = {};

	const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

	if (!data.username.trim()) {
		errors.username = "username is required";
	} 
    if (!data.email.trim()) {
		errors.email = "email is required";
	} 
    if (!data.password.trim()) {
		errors.password = "password is required";
	} 
	
    if (!email_pattern.test(data.email)) {
		errors.email = "please enter a valid email address";
	}

	if (data.password.length < 8) {
		errors.password = "password length must be a minimal of 8 characters";
	}

    if(!data.privacyPolicy) {
        errors.privacyPolicy = "must agree to privacy & policy"
    }

	return errors;
}

