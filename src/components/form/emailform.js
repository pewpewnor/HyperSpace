import "./emailform.css";

function Emailform({onChange}) {

	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	function handleEmailChange(event){
		if(validateEmail(event.target.value) === false){
			console.log(event.target.value + " is not VALID");
		}
		else{
			console.log(event.target.value + " ISVALID");
			onChange.handleChange(event);
		}
	}

	return (
		<div className="email__box">
			<input type="email" placeholder={"email"} onChange={handleEmailChange}></input>
		</div>
	);
}

export default Emailform;
