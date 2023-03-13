import Emailform from "components/form/emailform";
import Passwordform from "components/form/passwordform";
import "./register.css"

export default function Register() {

    return(

        <div className="container">

            <div className="register-box">

                <div className="header">
                    <div className="title">Register</div>
                </div>
                <div className="bottom">

                    <Emailform className=""></Emailform>
                    <Passwordform className=""></Passwordform>

                </div>

            </div>

        </div>

    );

}