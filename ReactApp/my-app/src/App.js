import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import {
  Fabric,
  TextField,
  PrimaryButton,
  Checkbox,
  ProgressIndicator
} from 'office-ui-fabric-react'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      TODO:null
    }
  }


  render() {
    return (
      <Fabric className="App">

        <TextField label="Enter TODO"
        ref={ (t)=>this.TextField=t}
        />

        <PrimaryButton
        iconProps={{iconName:"Add"}}
        text="Add TODO"
        onClick={()=>this.addTodo
        (this.TextField._latestValue)
        }
        />
        {this.state.TODO &&
        <Checkbox
        label={this.state.TODO}
        onChange={()=>this.removeTodo()}
        />}

        <ProgressIndicator
        label = {(this.state.TODO?0:1*100)+'% Done'}
        percentComplete = {this.state.TODO?0:1}
   
        />

        </Fabric>

        
    );
  }

  addTodo=(TODO)=>{
    this.setState({
      TODO
    })
  }

  removeTodo=()=>{
    this.setState({
      TODO:null
    })
  }
}

export default App;
