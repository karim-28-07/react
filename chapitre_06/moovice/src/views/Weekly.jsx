import React, { Component } from 'react'
import Card from '../components/Card'

var moment = require("moment");


export class Weekly extends Component {

    state = {
        movies: []
    }

    formatDateToday(dateString){

        console.log("Weekly datetoday",moment(dateString).format("YYYY-MM-DD"));
        const dateToday = moment(dateString).format("YYYY-MM-DD")
        return dateToday
    }
    
    // formatDateToday()
    
    formatDateLastWeek(dateString){
        console.log("Weekly datelastweek", moment(dateString).subtract(6, 'days').format("YYYY-MM-DD"));
        const lastWeek =  moment(dateString).subtract(6, 'days').format("YYYY-MM-DD")
        return lastWeek
    }
    
    
    // formatDateLastWeek()
    
    

    componentDidMount() {

        const apiKey = "e441f8a3a151d588a4932d2c5d310769"

        fetch("http://api.themoviedb.org/3/discover/movie?primary_release_date.gte="+ this.formatDateLastWeek()+"&primary_release_date.lte="+this.formatDateToday()+"&api_key=${apiKey}")
            .then(response => response.json())
            .then(data => {

                console.log("Popular data ", data);
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
              

                {/* {
                    this.state.movies.map(elem => {
                        return <Card {...elem} />
                    })
                } */}
            </div>
        )

    }

}






export default Weekly

