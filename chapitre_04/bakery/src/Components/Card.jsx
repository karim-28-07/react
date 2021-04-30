import React from "react"


class Card extends React.Component {

    constructor() {
        super()

        this.state = {
            image: "../../public/images/item.png"
        }
    }

    componentDidMount (){
        
        fetch (
            "https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/"
             + this.props.productName)
        .then (response => response.blob())
        .then (result =>{

        })
    }


    render() {

        console.log(this.props);

        return (
            <>
                {/* {this.props.productName} */}
                {/* {this.props.onClick} */}
                {/* {this.props.price} */}
                <div>
                    <button onChange = {()=>this.props.onClick(this.props.productName,this.props.price)}> 
                    <img src={this.state.image} alt="image"/></button>
                </div>
            </>
        )
    }
}

export default Card