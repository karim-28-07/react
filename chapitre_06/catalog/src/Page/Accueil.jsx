import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

export class Accueil extends Component {

    render() {

        return (

            <BrowserRouter>

                <ul>
                    {this.props.movies.map(elem => {
                        return <li><Link to='/'> {elem.title}</Link></li>

                    })}

                </ul>

            </BrowserRouter>
        )

    }
}

export default Accueil








