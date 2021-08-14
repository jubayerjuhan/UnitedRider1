import React, { useContext } from 'react';
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "./../../App";

const Protectedroute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.isSignedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default Protectedroute;