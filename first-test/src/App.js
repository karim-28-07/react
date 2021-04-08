
import React from "react";
import NavBar from './Components/Navbar/NavBar.js'
import "./App.css";

class App extends React.Component {
  
   clubPremierLigue = [


    {
      name: ManchesterCity, color: Blue,
      name: Arsenal, color: Red,
      name: ManchesterUnited, color: red,
      name: Chelsea, color: Blue,
    }
  ]


  render() {
    return (
      <div >
        <h4>props club is : {this.clubPremierLigue.name} and the color is :
                 {this.props.color} </h4>

        <h4></h4>
        <NavBar />

      </div>
    );
  }
}

export default App;