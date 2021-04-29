import React from "react"

class Card extends React.Component {


    render() {
        console.log("composant card afficher les props :" ,this.props);
        return (
            <div>
                <p>country : {this.props.name}</p>
                <p>capital : {this.props.capital}</p>
                <p>flag : <img className="img" src={this.props.flag} alt="drapeau" ></img></p>
                <p>population : {this.props.population} </p>
                <p>region : {this.props.region} </p>
            </div>



        )
    }
}

export default Card