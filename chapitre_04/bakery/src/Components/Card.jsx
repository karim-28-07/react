import React from "react"


class Card extends React.Component {

    constructor() {
        super()

        this.state = {
            image: "images/item.png"
        }
    }

    componentDidMount() {

        fetch(
            "https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/"+this.props.productName+".png")
            .then(response => response.blob())
            .then(result => {
                // console.log(result);

                const photo = URL.createObjectURL(result)

                console.log("afiche moi photo ", photo);

                this.setState ({
                    image : photo
                })



            })
    }


    render() {

        console.log("Crad affiche this.props ", this.props);
        // console.log("Card affiche image ", this.state.image);
        return (
            <>
                {/* {this.props.productName} */}
                {/* {this.props.onClick} */}
                {/* {this.props.price} */}
                <div>

                    <button
                        onClick={() => this.props.onClick(this.props.productName,
                            this.props.price)}
                    >
                        <img src={this.state.image} style = {{width :300, height : 200}} alt="image items"/>

                    </button>

                </div>
            </>
        )
    }
}

export default Card