import React from "react"
import Card from "../Components/Card";

class Pay extends React.Component {

    constructor() {
        super()

        this.state = {
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(name, price) {

        const newItemBasket = {
            name: name,
            price: price
        }

        // console.log(name, price);

        const newBasket = [...this.state.basket, newItemBasket]

        let total = 0

        for (let index = 0; index < newBasket.length; index++) {
            const element = newBasket[index];

            total+= parseInt(element.price)
            
        }

        console.log(total);


        const totalEcoTax = newBasket.length * 0.03

        const totalTVA = newBasket * 0.2

        const totalTTC = totalEcoTax + totalTVA + total

        this.setState({ 
            basket: newBasket,
            total,
            totalEcoTax,
            totalTTC,
            totalTVA


        })
    
    }






    render() {

        console.log("Pay  this.props.items ", this.props.items);

        return (
            <>
                <div>
                    <p> {this.state.total}</p>
                    <p> {this.state.totalEcoTax}</p>
                    <p> {this.state.totalTVA}</p>
                    <p> {this.state.totalTTC}</p>

                </div>

                <div items={this.props.items}>

                    <h2>Pay</h2>

                    {this.props.items.map((elem) => {

                        console.log("elem ", elem);
                        return <Card
                            productName={elem.name}
                            price={elem.price}
                            onClick={this.handleSelect} />
                    })}


                </div>
            </>
        )
    }
}

export default Pay