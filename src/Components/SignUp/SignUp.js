import React from 'react';
import './Signup.css'
import SignForm from "./SignForm";
const SignUp = () => {
    return (
        <div className="signUpContainer">
            <SignForm></SignForm>
            <button>SignUp With Google</button>
        </div>
    );
};

export default SignUp;