import "./create-channel-popup.css";
import InputField from "components/form/inputfield";
import SubmitBtn from "components/ui/submitBtn";

export default function CreateChannelPopUp(props) {
	return (
		<div className="CreateChannelPopUp">
			<div className="CreateChannelPopUp____container">
				<div className="CreateChannelPopUp____container____header">
					<h1>Create Channel</h1>
					<p onClick={props.handleCreateChannelPopUp}>X</p>
				</div>
				<div className="CreateChannelPopUp____container____body">
					<InputField
						label="Channel Name"
						type="inputField__title"
						handleChange={props.handleCreateChannelChange}
					/>
				</div>
				<div className="CreateChannelPopUp____container____Submit">
					<SubmitBtn
						name="Create Channel"
						onClick={props.handleCreateChannelSubmit}
					/>
				</div>
			</div>
		</div>
	);
}
