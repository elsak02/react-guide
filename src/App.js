import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 30}
    ],
    otherState: 'some other value',
    showPersons: false
 }


 switchNameHandler = (newName) => {
    // console.log("Was clicked");
    // DONT DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 20}
    ]});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Steph', age: 20 }
      ]
    })
  }

  togglePersonsHandler = (event) => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render () {

  let persons = null

  if (this.state.showPersons) {
    persons = (
        <div>
          <Person class="Person" name={this.state.persons[0].name}
          age ={this.state.persons[0].age}/>
          <Person class="Person" name={this.state.persons[1].name}
          age ={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}
          changed={this.nameChangedHandler}> My hobbies: Racing </Person>
          <Person class="Person" name={this.state.persons[2].name}
          age ={this.state.persons[2].age}/>
        </div> : null
      );
  }

    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      //<button onClick={() => this.switchNameHandler("Maximilian!!")}>Switch Name</button>
      <button onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
      {persons}
      </div>
    )
  }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does it work now?"))

}

  // state = {
  //   persons: [
  //     {name: 'Max', age: 28},
  //     {name: 'Manu', age: 29},
  //     {name: 'Steph', age: 30}
  //   ]
  // }

  // switchNameHandler = () => {
  //   // console.log("Was clicked");
  //   // DONT DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({persons: })
  // }

export default App;
