import  React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Hommail from'./components/Hommail'
import Checkbox from'./components/Checkbox'
import Submit from './components/Submit'




class App extends React.Component {

render (){

  return (
    <div>
      <form>
        <Hommail/>
        <Submit/>
        <Checkbox/>
      </form>
    </div>
  )
}

}



export default App