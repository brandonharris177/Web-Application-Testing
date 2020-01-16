import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard'



function App() {

  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  return (
    <div className="App">
      <Dashboard 
      passBallsToDashboard = {balls} 
      passStrikesToDashboard = {strikes}
      passSetBallsToDashboard = {setBalls} 
      passSetStrikesToDashboard = {setStrikes}/>
    </div>
  );
}

export default App;
