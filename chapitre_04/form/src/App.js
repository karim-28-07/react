import  React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Hommail from'./components/Hommail'
import Checkbox from'./components/Checkbox'
import Submit from './components/Submit'




class App extends React.Component {

  constructor (){
    super()

    this.state = {
      email : "",
      password : "",
      
    }
    this.onValidateemail = this.onValidateemail.bind(this)
    this.onValidatepassword = this.onValidatepassword.bind(this)
  }
  
  onValidateemail(e){
    console.log("Im the console");
    this.setState ({
      email : e.target.value

    })
  }
  
  onValidatepassword(e){
    this.setState({
      password : e.target.value
    })
  }

  
  render (){

  return (
    <div>
      <h1 style = {{textAlign : 'center'}}>Login</h1>
      <form>
        <Hommail password ={this.state.password} email = {this.state.email} 
        value ={this.state.email} value = {this.state.password} onInput = {this.onValidateemail}  />
        <Submit/>
        <Checkbox/>
      </form>
    </div>
  )
}

}



export default App