import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RideDetails.css'
import mapImg from '../../Image/Map.png'
import { UserContext } from "./../../App";

const RideDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { type } = useParams();
    console.log(type);

    const handleChange = (e) =>{
        const newDestination = {...loggedInUser}
        newDestination[e.target.name] = e.target.value;
        setLoggedInUser(newDestination);
    }

    console.log(loggedInUser);

    return (
        <>
            <div className="ride">
                <hr size="1" width="90%" color="grey" />

                <div className="RideMainContainer">
                    <div className="searchride">
                        <div className="searchInputs">
                            <h4>Pick From</h4>
                            <input onChange={handleChange} name ="pickup" type="text" />
                            <h4>Pick to</h4>
                            <input onChange={handleChange} name ="drop" type="text" />
                            <input className="submit-btn" type="submit" />
                        </div>
                    </div>
                    
                    <img src={mapImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default RideDetails;