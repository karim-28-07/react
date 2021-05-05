import React, { Component } from 'react'

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
                console.log("Popular data ", data);

                this.setState({
                    movies: data
                })

            })
    }

    renderMovies() {


        if (this.state.movies === 0) {

            return (

                <div>
                    <h1>Patientez un instant, nous sommes en train
                        de charger la liste de pays</h1>
                </div>
            );

        } else {

            return (

                <ul>
                    {/* {this.state.movies.map((elem) => <li key={elem}>{elem}</li>)} */}
                </ul>
            )
        }
    }



    render() {
        console.log("Popular state movies ", this.state.movies);
        return (
            <div>
                <h1>Popular</h1>
                {this.renderMovies()}
            </div>
        )

    }

}






export default Popular
