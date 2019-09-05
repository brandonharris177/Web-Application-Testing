import React from "react";
import Display from './Display';

const Dashboard = (props) => {

    const balls = props.passBallsToDashboard;
    const strikes = props.passStrikesToDashboard;
    const setBalls = props.passSetBallsToDashboard;
    const setStrikes = props.passSetStrikesToDashboard;

    const strikeHandler = e => {
        e.preventDefault();
        if (strikes < 3) {
            setStrikes(strikes + 1)
            // console.log(strikes)
        } else {
            setStrikes(0)
            setBalls(0)
        }
    }

    const ballHander = e => {
        e.preventDefault();
        if (balls < 4) {
            setBalls(balls + 1)
            // console.log(balls)
        } else {
            setBalls(0)
            setStrikes(0)
        }
    }

    const foulHandler = e => {
        e.preventDefault();
        if (strikes < 2) {
            setStrikes(strikes + 1)
            // console.log(strikes)
        } else {
            setStrikes(2)
        }
    }

    const hitHandler = e => {
        e.preventDefault();
            setStrikes(0)
            setBalls(0)
    }
    
    return (
        <>
            <Display passBallsToDisplay = {balls} passStrikesToDisplay = {strikes} />
            <button onClick = {strikeHandler} >Strike</button>
            <button onClick = {ballHander}>Ball</button>
            <button onClick = {foulHandler}>Foul</button>
            <button onClick = {hitHandler}>Hit</button>
        </>
    );
};

export default Dashboard