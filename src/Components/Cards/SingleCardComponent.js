import React from 'react';
import { Link } from 'react-router-dom';

const SingleCardComponent = ({ ride }) => {
    // const ride = props.ride;
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