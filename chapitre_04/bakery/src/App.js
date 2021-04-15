import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Add from "./views/Add"
import Pay from "./views/Pay"
import List from "./views/List"
import Button from "./Components/Button"


class App extends React.Component {

  constructor(){
    super()

    this.state = {
      activeTab : "add",
      items : [],
      
    }

  }

  

  render (){

    return(
      <div>
        <h1>Test</h1>
        <Add/>
        <Pay/>
        <List/>
        <Button isSelected = {this.state.activeTab}>Add</Button>
        <Button isSelected = {this.state.activeTab}>List</Button>
        <Button isSelected = {this.state.activeTab}>Pay</Button>
      </div>
    )

  }

}

export default App