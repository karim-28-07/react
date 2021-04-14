import React from 'react'


class Checkbox extends React.Component {


    render() {
        return (

            <div>

                <div class="mb-3 form-check offset-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label " for="exampleCheck1">Remember me</label>
                </div>
            </div>
        )
    }

}



export default Checkbox