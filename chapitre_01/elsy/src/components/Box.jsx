import React from "react";


class Box extends React.Component {

    constructor(props) {
        super(props)
    }

    

    render() {

        const { color, unit, value, min, max, icon, onChange} = this.props
        if (this.props.unit !== "L") {
            return (
                <>
                    
                    <div className="box col-sm-3 col-6" >
                        <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                            {this.props.icon}
                        </span>
                        <p>{value} {unit} </p>
                        <input type="range" min={min} max={max}  onInput= {onChange}  />

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















