import React from 'react';
import './Signup.css'
import SignForm from "./SignForm";
import GoogleButton from 'react-google-button'


const SignUp = () => {
    return (
        <div className="signUpContainer">
            <SignForm></SignForm>
            <button className="Google-Btn" id="button"><i class="fab fa-google fa-2x"></i> Sign Up With Google</button>
            {/* <button className="Facebook-Btn">SignUp With Facebook</button> */}
            <button className="Google-Btn" id="button"><i class="fab fa-google fa-2x"></i> Sign Up With Google</button>
            <GoogleButton/>
        </div>
    );
};

export default SignUp;