import React from "react";
import './App.css';
import Counter from './Components/Counter.js';

class App extends React.Component {

  constructor() {
    super()
    this.state = {

      count: 4,
    }
    this.decrementCount = this.decrementCount.bind(this)
    this.incrementCount = this.incrementCount.bind(this)
  }

  decrementCount (){
    const {count}= this.state

    this.setState({
      count : count - 1
    })
  }

  incrementCount(){
    const {count}= this.state

    this.setState({
      count : count + 1
    })
  }



  render() {
    return (

      <div>

        <h1>Counter</h1>
        
        <Counter count={this.state.count} removeFunction={this.decrementCount} 
        addFunction={this.incrementCount} />

      </div>
    );
  }
}

export default App;


















