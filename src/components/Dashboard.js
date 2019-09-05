import React from "react";
import Display from './Display';

export const strikeHandler = currentStrikes => {
    if (currentStrikes < 2) {
        // console.log(strikes)
        return currentStrikes + 1;
    } else {
        return currentStrikes = 0;
    }
}

export const ballHandler = (currentBalls) => {
    if (currentBalls < 3) {
        // console.log(balls)
        return (currentBalls + 1)
    } else {
        return (
            currentBalls = 0
            )
    }
}

export const foulHandler = (currentStrikes) => {
    if (currentStrikes < 1) {
        // console.log(strikes)
        return (currentStrikes + 1)
    } else {
        return (
            currentStrikes = 2
            )
    }
}



const Dashboard = (props) => {

    const balls = props.passBallsToDashboard;
    const strikes = props.passStrikesToDashboard;
    const setBalls = props.passSetBallsToDashboard;
    const setStrikes = props.passSetStrikesToDashboard;

    const checkStrikes = e => {
        if (strikes < 2) {
            setStrikes(strikeHandler(strikes))
        } else {
            setStrikes(strikeHandler(strikes))
            setBalls(0)
        }
    }

    const checkBalls = e => {
        if (balls < 3) {
            setBalls(ballHandler(balls))
        } else {
            setBalls(ballHandler(balls))
            setStrikes(0)
        }
    }

    const hitHandler = e => {
            setStrikes(0)
            setBalls(0)
    }
    
    return (
        <>
            <Display passBallsToDisplay = {balls} passStrikesToDisplay = {strikes} />
            <button onClick = {checkStrikes} >Strike</button>
            <button onClick = {checkBalls}>Ball</button>
            <button onClick = {() => setStrikes(foulHandler(strikes))}>Foul</button>
            <button onClick = {hitHandler}>Hit</button>
        </>
    );
};

export default Dashboard