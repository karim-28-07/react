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
    this.calculateWater()
  }

  onStepsChange(event) {

    this.setState({
      steps: event.target.value

    })
    this.calculateWater()
  }


  onTempChange(event) {

    this.setState({
      temperature: event.target.value

    })
    this.calculateWater()
  }

  
  calculateWater() {
    
    let changeWater = (addTemp + addHeart + addSteps) + 1.5

    if (this.state.temperature > 20) {

    const addTemp = (this.state.temperature - 20) * 0.02

      
    } else if (this.state.heart > 120) {
     const addHeart = (this.state.heart - 120) * 0.0008

      

    } else if (this.state.steps > 10000) {
      const addSteps = (this.state.steps - 10000) * 0.00002

      
    }
   
    this.setState({ water: changeWater.toFixed(2)})
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





























