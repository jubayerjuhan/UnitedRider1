import React, { useContext } from 'react'
import { UserContext } from "./../../App";
    const PriceCard = () => {
        const [loggedInUser] = useContext(UserContext);
        console.log(loggedInUser.rideType);
    return (
        <>
            <div className="pcContainer">
                <div className="priceCard">
                    <img src={`https://tinyurl.com/united-rider-${loggedInUser.rideType}`} alt="" />
                    <span>
                        <h3>Car</h3>
                        <i class="fas fa-user-friends"></i>
                        <h3>4</h3>
                    </span>
                    <p className="priceofride">$65</p>
                </div>
            </div>
        </>
    );
};

export default PriceCard;