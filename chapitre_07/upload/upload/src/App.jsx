import { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddUser from './views/AddUser'
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Liste d'users</Link></li>
            <li><Link to="/add-user">Ajouter un nouvel user</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/add-user">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

