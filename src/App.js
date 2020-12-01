import './App.css';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/home'

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Switch>
        <Route exact path ="/" render={()=> <Home />}/>
        </Switch>
      </div>
    )
    }
}
  


export default App;
