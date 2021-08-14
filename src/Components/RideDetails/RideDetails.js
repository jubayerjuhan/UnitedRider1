import React, { useContext, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import './RideDetails.css'
import mapImg from '../../Image/Map.png'
import { UserContext } from "./../../App";

const RideDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { type } = useParams();
    const history = useHistory()
    loggedInUser.rideType = type;
    setLoggedInUser(loggedInUser);

    const handleChange = (e) => {
        const newDestination = { ...loggedInUser }
        newDestination[e.target.name] = e.target.value;
        setLoggedInUser(newDestination);
    }

    console.log(loggedInUser);

    const onclickHandler = (e) => {
        handleSubmit();
    }

    const handleSubmit = () => {
        const rdtype = type.toLowerCase();
        history.push(`/ride/${rdtype}/price`)
    }


    return (
        <>
            <div className="ride">
                {/* {console.log(type)} */}
                <hr size="1" width="90%" color="grey" />

                <div className="RideMainContainer">
                    <div className="searchride">
                        <form className="searchInputs" action={onclickHandler}>
                            <h4>Pick From</h4>
                            <input onChange={handleChange} name="pickup" type="text" required />
                            <h4>Pick to</h4>
                            <input onChange={handleChange} name="drop" type="text" required />
                            <input onClick={onclickHandler} className="submit-btn" type="submit" />
                        </form>
                    </div>

                    <img src={mapImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default RideDetails;