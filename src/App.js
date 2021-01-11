import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName:"Mohamed",
      lastName:"Shafee",
      toggle1: true,
      toggle2: false
    }
    this.dirtyState = {
      firstName: "Mohamed",
      lastName: "Shafee"
    }
  }
  toggleEdit = () => {
    if (this.state.toggle1 === true) {
      this.setState(
        {
          toggle1: false,
          toggle2: true
        })
      } else {
        this.setState(
          {
            toggle1: true,
            toggle2: false
          })
      }
    }
  
  handleFirstNameChange = (event) => { this.dirtyState.firstName = event.target.value }
  handleLastNameChange = (event) => { this.dirtyState.lastName = event.target.value }

  updateState = () => {
    this.setState({
      firstName: this.dirtyState.firstName,
      lastName: this.dirtyState.lastName
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.updateState();
    this.toggleEdit();
  }
  render() {
    return (
      <div className="App"> 
        <div> 
          {this.state.toggle1 && (
            <div>
              <p>First Name: {this.state.firstName}</p> 
              <p>Last Name: {this.state.lastName}</p>
              <button class="btn" onClick={this.toggleEdit}>edit</button>
            </div>
          )}
          {this.state.toggle2 && (
            <form onSubmit={this.handleSubmit}>
              <p><label> First Name: <input type="text" name="firstName" onChange={this.handleFirstNameChange} /></label></p>
              <p><label> Last Name: <input type="text"  name="lastName" onChange={this.handleLastNameChange}/> </label></p>
              <button class="btn" type="submit">Submit</button>  <button class="btn" onClick={this.toggleEdit}>Cancel</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}


export default App ;