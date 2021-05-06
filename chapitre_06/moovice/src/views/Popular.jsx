import React, { Component } from 'react'
import Card from '../components/Card'

export class Popular extends Component {

    state = {
        movies: []
    }

    componentDidMount() {

        const apiKey = "e441f8a3a151d588a4932d2c5d310769"

        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {

                // console.log("Popular data ", data);
                console.log("Popular data ", data.results);

                this.setState({
                    movies: data.results
                })

            })
    }

    
    render() {
        console.log("Popular state movies ", this.state.movies);
        return (
            <div>
                <h1>Popular</h1>
                

                {
                    this.state.movies.map(elem => {
                        return <Card {...elem} />
                    })
                }
            </div>
        )

    }

}






export default Popular
