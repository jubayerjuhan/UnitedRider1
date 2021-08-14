import React, { useContext } from 'react';
import './Signup.css'
import SignForm from "./SignForm";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase-config.js';
import { UserContext } from "./../../App";
import { useHistory, useLocation } from 'react-router-dom';
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();



const SignUp = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log(loggedInUser)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleClick = () => {
        const GoogleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                // var credential = result.credential;
                var user = result.user;
                user.isSignedIn = true;
                setLoggedInUser(user)
                history.replace(from)
                console.log(user)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // var errorCode = error.code;
                var errorMessage = error.message;
                // var email = error.email;
                // var credential = error.credential;
                console.log(errorMessage)
                // ...
            });
    }

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    loggedInUser.signoutreq && handleSignOut();
    return (
        <div className="signUpContainer">
            <SignForm></SignForm>
            <button onClick={handleClick} className="Google-Btn" id="button"><i class="fab fa-google fa-2x"></i> Sign Up With Google</button>
            <button style={{ marginBottom: "5vh" }} className="Google-Btn" id="button"><i class="fab fa-facebook fa-2x"></i> Sign Up With Facebook</button>
            <button onClick={handleSignOut} style={{ marginBottom: "5vh" }} className="Google-Btn" id="button"><i class="fab fa-facebook fa-2x"></i> Sign Up With Facebook</button>
        </div>
    );
};

export default SignUp;