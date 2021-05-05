import React, { Component } from 'react'
import movies from '../movies.json'

export class Movie extends Component {

    render() {

        console.log("movies", movies);

        const currentMovie = movies.find(elem=>{

            
           
            console.log("this.props.match.params.id", typeof this.props.match.params.id)

            console.log("elem.id", typeof elem.id)

            return (parseInt(this.props.match.params.id) === elem.id)
        })

        console.log("currentMovie ", currentMovie);

        return (

            <div>
                
                Movies id :
                {this.props.match.params.id}

                <p>Title : {currentMovie.title}</p>


            </div>
        )
    }
}

export default Movie
