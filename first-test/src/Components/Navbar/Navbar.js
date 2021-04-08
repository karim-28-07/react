import React from 'react'



class NavBar extends React.Component {

    constructor() {
        super()
    }


    render() {




        return (

            <div>

                <h4>props club is : {this.clubPremierLigue.name} and the color is :
                 {this.props.color} </h4>

            </div>


        );
    }

}
export default NavBar