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
                <h2>Add</h2>
                <input type ='text' onChange = {this.updateProductName}/>

                <input type = 'range' min = {1} max= {10} value = {this.state.price} onChange ={this.updatePrice}/>

                <button type = 'Add' 
                onClick = {()=> this.props.addItem(this.state.productName,this.state.price)}
                type="button" class="btn btn-outline-primary">Add</button>

            </div>
        )
    }
}

export default Add