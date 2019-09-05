import React from "react";

const Display = (props) => {
    
    const balls = props.passBallsToDisplay;
    const Strikes = props.passStrikesToDisplay;

    return (
        <>
            <h1>Balls: {balls}</h1>
            <h1>Strikes: {Strikes}</h1>
        </>
    );
};

export default Display