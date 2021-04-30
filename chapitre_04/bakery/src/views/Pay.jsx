import React from "react"

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
    }

    handleSelect(name, price) {

        console.log(name, price);

    }


    render() {

        return (
            <>
                <div>
                    <p> {this.state.total}</p>

                </div>

                <div items={this.props.items}>

                    <h2>Pay</h2>
                </div>
            </>
        )
    }
}

export default Pay