import React from "react";
import Button from "./components/Button"
import "./App.css";

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    }
  }

  componentDidMount() {

    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(response => response.json())
      .then(result => {

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      })
      .catch(err => console.error(err))

  }

  getCountry(country) {

    fetch("https://restcountries.eu/rest/v2/name/"+ country)

      .then(response => response.json())
      .then(result => {

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      })
      .catch(err => console.error(err))

  }

  render() {

    return (

      <div>
        <Button functionClick = {this.getCountry("france")}>France</Button>
        <Button functionClick = {this.getCountry("brazil")}>Brazil</Button>
        <Button functionClick = {this.getCountry("croatie")}>Croatia</Button>

        <p>name : {this.state.name}</p>
        <p>capital : {this.state.capital}</p>
        <p>flag : {this.state.flag}</p>
        <p>population : {this.state.population} </p>
        <p>region : {this.state.region} </p>

      </div>

    );
  }
}

export default App;






