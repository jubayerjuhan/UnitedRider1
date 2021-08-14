import React, { useContext } from 'react';
import './Showprice.css'
import PriceCard from "./PriceCard";



const ShowPrice = () => {

    const dummyArray = [1,2,3]
    // const length = dummyArray.length
    // console.log(dummyArray.length)
    return (
        <div className="pricePage">
            <hr size="1" width="90%" color="grey" />

            <div className="destinationAndPrice">
                <div className="destination">
                    <h2>Nawabganj</h2>
                    <h2>Nawabganj</h2>
                </div>

                <div className="price">
                    {/* <div className="pcContainer">
                        <div className="priceCard">
                            <img src={car} alt="" />
                            <span>
                                <h3>Car</h3>
                                <i class="fas fa-user-friends"></i>
                                <h3>4</h3>
                            </span>
                            <p className="priceofride">$65</p>
                        </div>
                    </div> */}
                    {dummyArray.map(()=> <PriceCard></PriceCard>)}
                </div>
            </div>
        </div >
    );
};

export default ShowPrice;