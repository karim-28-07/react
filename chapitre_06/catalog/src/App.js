import React, { Component } from 'react'
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"
import Accueil from './Page/Accueil'
import movies from './movies.json'


export class App extends Component {

  render() {

    console.log("afiche movies ", movies);

    return (
      <div>
      <h1>Film</h1>
      <Accueil movies = {movies}/>
      
        
      </div>
    )
  }
}

export default App
