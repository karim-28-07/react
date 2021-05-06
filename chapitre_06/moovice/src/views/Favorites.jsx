import React, { Component } from 'react'

export class Favorites extends Component {

    state = {
        movies : [],
        favIDs : this.getStorage()
    }

    getStorage(){

        const favorites = localStorage.getItem("favorites")

        return favorites
    }

    getMovie(id){

        fetch("http://api.themoviedb.org/3/movie/{ID}?api_key={API_KEY}")
        .then(response => response.json())
            .then(data => {


            })

        }

    render() {

        console.log(" Favorites this.getStorage ", this.getStorage());
        return (
            <div>
                <h1>Favorites</h1>
            </div>
        )
    }
}

export default Favorites
