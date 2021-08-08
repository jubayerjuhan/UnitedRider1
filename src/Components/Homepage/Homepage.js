import React from 'react';
import Header from "./../Header/Header";
import "./Homepage.css"
import Cards from "./../Cards/Cards";
const Homepage = () => {
    return (
        <>
            <Header></Header>
            <div className="homepage-Container">
                <Cards></Cards>
            </div>
        </>
    );
};

export default Homepage;