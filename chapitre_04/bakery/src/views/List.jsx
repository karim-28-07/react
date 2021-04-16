import React from 'react'

class List extends React.Component {


    render(){

        return(

            <div>
                <h1>list</h1> 
                <ul>
                {this.props.Liste.map ((elem)=> <li>{elem.name} {elem.price} </li>)}
                
                </ul>
            </div>
        )
    }
}

export default List