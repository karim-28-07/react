import React from "react";
import InputRange from 'react-input-range';

class App extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (


            <div className="box col-sm-3 col-6" >
                <InputRange
                    
                    max={this.props.max}
                    min={this.props.min}
                    value={this.props.value}
                    oninput={value => this.setState({ value })} />

                <span class="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit} </p>
            </div>





        );
    }
}

export default App;