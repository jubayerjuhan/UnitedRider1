import React, { useContext } from 'react';
import car from '../../Image/Car.png'
import { UserContext } from "./../../App";
import Car from '../../Image/Car.png'
import Bus from '../../Image/Bus.png'
import Train from '../../Image/Train.png'
import Motorcycle from '../../Image/Motorcycle.png'
const PriceCard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.rideType);
    const vic = "Train";
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