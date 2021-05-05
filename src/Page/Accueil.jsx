import React, { Component } from 'react'
import {  Link } from "react-router-dom"

import movies from '../movies.json'

export class Accueil extends Component {

    render() {

        return (

            <div>


                <ul>
                    {movies.map(elem => {

                        console.log("Accueil elem ", elem.id);

                        return <li><Link to={'/' + elem.id}> {elem.title}</Link></li>

                    })}

                </ul>
            </div>




        )

    }
}

export default Accueil








