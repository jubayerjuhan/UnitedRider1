import React from 'react';

const SingleCardComponent = ({ride}) => {
    // const ride = props.ride;
    return (
        <div className="mainContainer">
            <img src= {ride.image} alt="" />
            <h3>{ride.type}</h3>
        </div>
    );
};

export default SingleCardComponent;