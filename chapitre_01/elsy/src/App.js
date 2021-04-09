import React from "react";
import './App.css';
import Box from './components/Box';
import './styles/global.css'


const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMAx = 50000

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000

    }



  }



  render() {
    return (
      <div className="container-fluid">

        
            <div className="row">

              {/* Water */}
              <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L"></Box>
              {/* Steps */}
              <Box icon="directions_walk" color="black" value={3000} unit="steps"  ></Box>
              {/* Heart */}
              <Box icon="favorite" color="red" value={120} unit="bpm"></Box>
              {/* Temperature */}
              <Box icon="wb_sunny" color="yellow" value={-10} unit="°C"></Box>

              <p>Heart : {heartMin} </p>
              <p>Temperature : {tempMin} </p>
              <p>Heart : {stepsMin} </p>


              
            </div>





      </div>
    );
  }
}

export default App;
