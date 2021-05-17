import React, { Component } from 'react'

export class Favorites extends Component {

    state = {
        movies: [],
        favIDs: this.getStorage()
    }

    getStorage() {

        const favorites = JSON.parse(localStorage.getItem("favorites"))
        console.log("Favorites tyepof favorites", typeof(favorites))
        return favorites
    }

    
    getMovie(id) {

        const apiKey = "e441f8a3a151d588a4932d2c5d310769"

        fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log("Favorites data", data)

                this.setState({
                    movies: [...this.state.movies, data]
                })



            })

    }

    componentDidMount() {
        
            this.state.favIDs.map(item => {
                
                return this.getMovie(item)
            })
        
    }

    render() {

        console.log("Favorites this.state.movies", this.state.movies)

        return (

            <div>
                <h1>Favorites</h1>
                {/* {this.state.favIDs} */}
            </div>
        )
    }
}

export default Favorites
