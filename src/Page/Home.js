import React, { Component } from 'react'
import movies from '../movies.json'

export class Home extends Component {

    render() {

        return (

            <div>

                {this.props.match.params.id}

            </div>


        )
    }
}

export default Home
