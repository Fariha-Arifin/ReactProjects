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
        {name: Event.target.value, age:'23'},
        {name:'Arifin',age:'23'}
        
      ]
    }  )
  }

  toggolebuttonHandler = () =>
  {
    const doesPerson = this.state.showPerson;
    this.setState({showPerson : !doesPerson});
  }

  render() {

    const myStyle = {
      backgroundColor: 'green' ,
      color : 'white',
      cursor: 'pointer',
      font: 'inherit',
      border: '2px solid blue',
      padding: '3px'

    };

    //let classes = ['red', 'bold'].join(' ');
    const classes = [];

    if(this.state.persons.length <= 2)
    {
      classes.push('red');
      //classes.push('bold');
    }
   
    return (
      <div className="App">
        <h1>Hello react!!</h1>
        <h4 className={classes}>React design app adding styles</h4>
        {/*<button style={myStyle} onClick={this.buttonHandler.bind(this, 'Era')}>Show button</button>*/}
        <button style={myStyle} onClick={this.toggolebuttonHandler}>Show button</button>
        
        {this.state.showPerson ?
        <div>
          <Person name ={this.state.persons[0].name} age={this.state.persons[0].age} change={this.textChangeHandler}/>
          <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby: Learning new things</Person>
          {myStyle.backgroundColor = 'blue'}
        </div> : null
      
        }
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
