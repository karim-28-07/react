import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Add from "./views/Add"
import Pay from "./views/Pay"
import List from "./views/List"
import Button from "./Components/Button"


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      activeTab: "add",
      items: [],

    }

    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
  }

  addItem(name,price){
    const obj = { name : 'xx', price : 'xx'}
    this.setState ({ 

     items : [...this.state.items, obj]
      
    })
    console.log(this.state.items);
  }


  selectAdd() {
    this.setState({ activeTab: 'add' });
    
  }



  selectList() {
    this.setState({ activeTab: 'List' });
  }

  selectPay() {
    this.setState({ activeTab: 'Pay' });
  }


  renderHead() {

    return (
      <div>
        <h1>Bakery</h1>
        <button type="button" class="btn btn-outline-primary"
          isSelected={this.state.activeTab} onClick={this.selectAdd} >Add</button>
        <button type="button" class="btn btn-outline-primary"
          isSelected={this.state.activeTab} onClick={this.selectList} >List</button>
        <button type="button" class="btn btn-outline-primary"
          isSelected={this.state.activeTab} onClick={this.selectPay} >Pay</button>

      </div>
    )
  }

  renderContent() {
    if (this.state.activeTab == 'add') {
      return (
        <section>
          <h2><Add /></h2>
        </section>
      );
    } else if (this.state.activeTab == 'List')
      return (
        <section>
          <h2><List /></h2>
        </section>
      );

    else if (this.state.activeTab == 'Pay')
    return (
      <section>
        <h2><Pay /></h2>
      </section>
    )
  }






render() {

  return (
    <div>

      <Button />
      <Button />
      <Button />
      {this.renderHead()}
      {this.renderContent()}

    </div>
  )

}

}

export default App



















