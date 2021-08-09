import React from 'react';
import { useParams } from 'react-router-dom';
import './RideDetails.css'
import mapImg from '../../Image/Map.png'
const RideDetails = () => {
    const { type } = useParams();
    console.log(type);

    return (
        <>
            <div className="ride">
                <hr size="1" width="90%" color="grey" />

                <div className="RideMainContainer">
                    <div className="searchride">
                        <div className="searchInputs">
                            <h4>Pick From</h4>
                            <input type="text" />
                            <h4>Pick to</h4>
                            <input type="text" />
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