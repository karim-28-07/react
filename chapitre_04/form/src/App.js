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
    this.onValidateEmail = this.onValidateEmail.bind(this)
    this.onValidatePassword = this.onValidatePassword.bind(this)
  }
  
  onValidateEmail(e){
    
    this.setState ({
      email : e.target.value

    })
  }
  
  onValidatePassword(e){
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
        type = {this.props.type} 
        value ={this.state.email} value = {this.state.password} 
        onEmail = {this.onValidateEmail} onChange = {this.onValidatePassword} />
        <Submit/>
        <Checkbox/>
      </form>
    </div>
  )
}

}



export default App