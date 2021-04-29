import React from "react"

class Button extends React.Component {
    

    render(){

        return(

            <button className="btn btn-primary mt-4 m-4" onClick = {this.props.functionClick} 
            children= {this.props.children}>
                
               
            </button>
        )
    }
}

export default Button