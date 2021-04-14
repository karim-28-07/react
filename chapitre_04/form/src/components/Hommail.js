import React from 'react'


class hommail extends React.Component {


    render() {
        return (

            <div>

                <div className="mb-3 col-6 offset-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>


                <div className="mb-3 col-6 offset-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>

            </div>
        )
    }

}



export default hommail