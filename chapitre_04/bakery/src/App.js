import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Add from "./views/Add"
import Pay from "./views/Pay"
import List from "./views/List"
import Button from "./Components/Button"
import Card from "./Components/Card"



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
    this.ajouter = this.ajouter.bind(this)
  }

  ajouter(n, p) {

    console.log("n", n, "p", p);

    const obj = { name: n, price: p }
    const updatItems = this.state.items
    updatItems.push(obj)
    this.setState({

      items: updatItems

    })
    console.log("items", this.state.items);
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
        <h1 >Bakery</h1>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary"
            isSelected={this.state.activeTab} onClick={this.selectAdd} >Add</button>
          <button type="button" class="btn btn-outline-primary"
            isSelected={this.state.activeTab} onClick={this.selectList} >List</button>
          <button type="button" class="btn btn-outline-primary"
            isSelected={this.state.activeTab} onClick={this.selectPay} >Pay</button>
        </div>

      </div>
    )
  }

  renderContent() {
    if (this.state.activeTab == 'add') {
      return (
        <section>
          <Add addItem={this.ajouter} />
        </section>
      );
    } else if (this.state.activeTab == 'List')
      return (
        <section>
          <List Liste={this.state.items} />
        </section>
      );

    else if (this.state.activeTab == 'Pay')
      return (
        <section>
          <Pay items = {this.state.items} />
        </section>
      )
  }






  render() {

    return (
      <div className= "col-6 offset-4">

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



















