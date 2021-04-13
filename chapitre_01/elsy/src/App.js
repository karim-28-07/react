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
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000

    }

    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTempChange = this.onTempChange.bind(this)
  }


  onHeartChange(event) {

    this.setState({
      heart: event.target.value

    })
  }

  onStepsChange(event) {

    this.setState({
      steps: event.target.value

    })
  }


  onTempChange(event) {

    this.setState({
      temperature: event.target.value

    })
  }


  calculateWater(){

      if(temperature>20){
        
      }
  }


  

  render() {

    return (


      <div className="container-fluid">


        <div className="row">

          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L"></Box>
          {/* Steps */}
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="steps"
            min={stepsMin} max={stepsMAx} onChange={this.onStepsChange} ></Box>
          {/* Heart */}
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm"
            min={heartMin} max={heartMax} onChange={this.onHeartChange} ></Box>
          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C"
            min={tempMin} max={tempMax} onChange={this.onTempChange}></Box>

          <p>Heart : {heartMin} </p>
          <p>Temperature : {tempMin} </p>
          <p>Heart : {stepsMin} </p>

        </div>

      </div>

    );
  }
}

export default App;


























