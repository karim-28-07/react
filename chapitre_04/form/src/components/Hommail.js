import React from 'react'


class hommail extends React.Component {


    render() {
        console.log(this.props);
        return (

            <div>

                <div className="mb-3 col-6 offset-3">
                    <label className="form-label">Email address</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value ={this.props.email} 
                    onInput ={this.props.onEmail} />
                </div>


                <div className="mb-3 col-6 offset-3">
                    <label className="form-label">Password</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value = {this.props.password}
                    onInput ={this.props.onChange} />
                </div>

            </div>
        )
    }

}



export default hommail