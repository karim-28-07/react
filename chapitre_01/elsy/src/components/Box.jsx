import React from "react";

class App extends React.Component {
    render() {
        return (
            <div className="box col-sm-3col-6" >
                
                    
                <span> class={this.props.icon} style={this.props.color} directions_walk </span>
                <p> {this.props.value} </p>
                <p>{this.props.unit}</p>
                            
            </div>
                        
              

                

        );
    }
}

export default App;