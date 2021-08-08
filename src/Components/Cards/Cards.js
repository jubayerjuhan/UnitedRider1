import React from 'react';
import { Rides } from './Utilities.js';
import './Cards.css'
import SingleCardComponent from './SingleCardComponent.js';
const Cards = () => {
    // console.log(Rides);
    return (
        <div className="cards">
            {
                Rides.map((ride) => 
                    <SingleCardComponent ride={ride}></SingleCardComponent>
                )
            }
        </div>
    );
};

export default Cards;