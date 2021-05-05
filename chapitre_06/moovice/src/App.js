import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './views/Home'
import Popular from './views/Popular'
import PopularBattle from './views/PopularBattle'
import Weekly from './views/Weekly'
import WeeklyBattle from './views/WeeklyBattle'
import Favorites from './views/Favorites'

export class App extends Component {

  render() {

    return (

      <BrowserRouter>

        <div>

          <nav>

            <ul>

              <li><Link to="/">Home</Link></li>
              <li><Link to="/weekly">Weekly</Link></li>
              <li><Link to="/weekly-battle">WeeklyBattle</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/popular-battle">PopularBattle</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>

            </ul>

          </nav>

          <Switch>

            <Route exact path='/' component={Home}></Route>
            <Route exact path='/weekly' component={Weekly}></Route>
            <Route exact path='/weekly-battle' component={WeeklyBattle}></Route>
            <Route exact path='/popular' component={Popular}></Route>
            <Route exact path='/popular-battle' component={PopularBattle}></Route>
            <Route exact path='/favorites' component={Favorites}></Route>

          </Switch>

        </div>

      </BrowserRouter>
    )
  }
}

export default App
