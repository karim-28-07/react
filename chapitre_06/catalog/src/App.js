import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import movies from './movies.json'
import Accueil from './Pages/Accueil'
import Movie from './Pages/Movie'


export class App extends Component {
  render() {

    return (

      <BrowserRouter>

        <div>

          <h1>Movies</h1>

          {/* {movies} */}

          <Accueil />

        </div>

        <Switch>

          <Route path='/:id' exact component={Movie}></Route>

        </Switch>



      </BrowserRouter>
    )
  }
}

export default App
