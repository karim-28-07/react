import React from "react";


class Box extends React.Component {

    constructor(props) {
        super(props)
    }

    

    render() {
        if (this.props.unit !== "L") {
            return (
                <>
                    
                    <div className="box col-sm-3 col-6" >
                        <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                            {this.props.icon}
                        </span>
                        <p>{this.props.value} {this.props.unit} </p>
                        <input type="range" min={this.props.stepsMin} max={this.props.stepsMax}
                        value={this.props.value} onInput/>

                    </div>
                </>


            )
        }

        return (

            <div className="box col-sm-3 col-6" >
                <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit} </p>

            </div>
        );

    }
}

export default Box;















