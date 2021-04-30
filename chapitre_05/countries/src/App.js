import React from "react";
// import Button from "./components/Button"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./components/Card"

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      search: ""

    }
    
    this.findCountry = this.findCountry.bind(this)
  }

  componentDidMount() {

    console.log("I am componentDidMount")

    fetch("http://localhost:8000/country/")
      .then(response => response.json())
      .then(result => {

        console.log("resultat", result)

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


    fetch("http://localhost:8000/country/" + country)

      .then(response => response.json())
      .then(result => {

        console.log("doit rentrer ici", country);

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

  componentDidUpdate(){
     console.log("I am componentDidUpdate")
  }

  allCountry() {


    fetch("http://localhost:8000/country/")

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

  findCountry(event) {
    
    this.setState({
      search: event.target.value
    })
    
  }


  render() {

    console.log("state search : ", this.state.search)

    return (
      <div>
        <div className="container p-3">
          {/* <Button functionClick={() => this.getCountry("france")}>France</Button>
          <Button functionClick={() => this.getCountry("brazil")}>Brazil</Button>
          <Button functionClick={() => this.getCountry("croatia")}>Croatia</Button> */}

          <input type="search" name="country" onChange={(event) => this.findCountry(event)} />

          <button>Search</button>

        </div>

        <div className="d-flex">
          {/* <p>name : {this.state.name}</p>
          <p>capital : {this.state.capital}</p>
          <p>flag : <img className="img" src={this.state.flag} alt="drapeau français" ></img></p>
          <p>population : {this.state.population} </p>
          <p>region : {this.state.region} </p> */}

          <Card name={this.state.name} capital={this.state.capital}
            population={this.state.population}
            flag={this.state.flag} region={this.state.region}> </Card>

        </div>
      </div>

    );
  }
}

export default App;






