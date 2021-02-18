import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {

  state = {
    persons:[
      {name:'Fariha',age:'23'},
      {name:'Arifin',age:'23'}
      
    ],

    showPerson: false
  }

 /* buttonHandler = (newName) => {
    console.log('hi i m a button');

    this.setState( {
      persons:[
        {name: newName, age:'23'},
        {name:'Arifin',age:'23'}
        
      ]
    }  )
  }
*/

  textChangeHandler = (Event) => {
    this.setState( {
      persons:[
        {id: '1', name: Event.target.value, age:'23'},
        {id: '2', name:'Arifin',age:'23'}
        
      ]
    }  )
  }

  toggolebuttonHandler = () =>
  {
    const doesPerson = this.state.showPerson;
    this.setState({showPerson : !doesPerson});
  }

  deletePersonfromArray = (pIndex) => {
    //const person = this.state.persons.slice; good practice
    //const person = [...this.state.persons]; good practice
    const person = this.state.persons;
    person.splice(pIndex, 1);
    this.setState({persons : person});
  }

  render() {

    const myStyle = {
      backgroundColor: 'white' ,
      cursor: 'pointer',
      font: 'inherit',
      border: '2px solid blue',
      padding: '3px'

    };

    //declear persons variable
    let persons = null;

    if(this.state.showPerson)
    {
      //update persons variable with value
      persons = (
        <div>
           {this.state.persons.map((p,index) => {
             return <Person 
             name={p.name} 
             age={p.age} 
             click={() => this.deletePersonfromArray(index)}
             key={p.id}
             />
           })}
       </div>

      );
    }

    return (
      <div className="App">
        <h1>Hello react!!</h1>
        {/*<button style={myStyle} onClick={this.buttonHandler.bind(this, 'Era')}>Show button</button>*/}
        <button style={myStyle} onClick={this.toggolebuttonHandler}>Show button</button>
        {persons}
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
      </div>
    );
  }
}

export default App;
