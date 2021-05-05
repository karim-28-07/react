import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import Accueil from './Page/Accueil'
import Home from './Page/Home'



export class App extends Component {

  render() {

    

    return (
      <BrowserRouter>

        <h1>Movies</h1>

        <Switch>

          <Route path="/" exact component={Accueil} />
          <Route path="/:id" exact component={Home} />

          {/* <Route path= "/:id"  render={(props) => <App {...props} movies={this.movies} />} />
               */}

        </Switch>

      </BrowserRouter>

      // <div>
      // 
      // <Accueil movies = {movies}/>




      // </div>
    )
  }
}

export default App
