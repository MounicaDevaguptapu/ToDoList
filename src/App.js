import React, { Component } from 'react';
// import logo from './logo.svg';
import {Textfield, Button, ChipContact, Chip} from 'react-mdl';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  updateInput(key,value){
    this.setState({
      [key]: value
    })
  }

  addItem()
  {
    const newItem={
      id: 1+ Math.random(),
      value: this.state.newItem.slice()
    };
    // spread operator
    const list = [...this.state.list];
    list.push(newItem);

    //setSate
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList});
  }


  render(){
    return (
      <div className="todoListFrame">
        <h1>To-Do List</h1>

        <div className="TaskFrame">
        <Textfield
          onChange={e=>this.updateInput("newItem",e.target.value)}
          value = {this.state.newItem}
          label="Task..."
          rows={1}
          style={{width: '300px'}}
        />
        <Button colored raised onClick={() => this.addItem()}>
          Add
        </Button>
        </div>
        <h5> Your tasks for the day...</h5>
        <p>
          {this.state.list.map(item => {
            return (
                <Chip onClose={() => this.deleteItem(item.id)}>
                  <ChipContact className="mdl-color--pink mdl-color-text--white"/>
                  {item.value}
              </Chip>
            );
          })}
        </p>
      </div>
    );
  }
}

export default App;
