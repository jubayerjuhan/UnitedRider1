import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "./../../App";

const SingleCardComponent = ({ ride }) => {
    return (
        <Link to={`/ride/${ride.type}`}>
            <div className="mainContainer">
                <img src={ride.image} alt="" />
                <h3>{ride.type}</h3>
            </div>
        </Link>
    );
};

export default SingleCardComponent;