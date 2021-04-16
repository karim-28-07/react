import React from 'react'

class Add extends React.Component {

    constructor(){
        super()

        this.state ={
            productName : '',
            price: 1
        }
        this.updateProductName = this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
    }

    updateProductName(event){
        this.setState ({
            productName : event.target.value
        })
    }

    updatePrice(event){
        this.setState ({
            price : event.target.value
        })
    }


    render(){

        return(

            <div>
                Add
                <input type ='text' onChange = {this.updateProductName}/>
                <input type = 'range' min = {1} max= {10} onChange ={this.updatePrice}/>
                <button type = 'Add' onClick = {this.props.price}/>
            </div>
        )
    }
}

export default Add