import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import movies from '../movies.json'

export class Accueil extends Component {

    render() {

        // console.log("Accuiel this.movies ", movies);
        return (


            <ul>
                {movies.map(elem => {

                    console.log("Accueil elem", elem);
                   
                    return <li><Link to = {'/' + elem.id}>{elem.title}</Link></li>
                }
                )}



            </ul>
        )
    }
}

export default Accueil
