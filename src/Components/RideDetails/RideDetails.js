import React from 'react';
import { useParams } from 'react-router-dom';
import './RideDetails.css'
const RideDetails = () => {
    const {type} = useParams()
    console.log(type);

    return (
        <>
            <div className="ridemainContainer">
                <h1>This Is Ride Details of {type}</h1>
            </div>
        </>
    );
};

export default RideDetails;