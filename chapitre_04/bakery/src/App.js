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

    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
  }


  selectAdd(){
    this.setState({activeTab : 'add'});
    
  }
  


  selectList(){
    this.setState({activeTab : 'List'});
  }

  selectPay(){
    this.setState({activeTab : 'Pay'});
  }

  

  render (){

    return(
      <div>
        <h1>Bakery</h1>
        {/* <Add/>
        <Pay/>
        <List/> */}
        <button type="button" class="btn btn-outline-primary" 
        isSelected = {this.state.activeTab}>Add</button> 
        <button type="button" class="btn btn-outline-primary"
         isSelected = {this.state.activeTab}>List</button> 
        <button type="button" class="btn btn-outline-primary" 
        isSelected = {this.state.activeTab}>Pay</button> 
      </div> 
    )

  }

}

export default App