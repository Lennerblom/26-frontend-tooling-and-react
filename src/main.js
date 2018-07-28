'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import scss from './style/app.scss';
import faker from 'faker';
import { say, SQUIRREL,} from 'cowsay';
//import cows from 'cows';
 
//cows();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        content:
        say({ text: 'yo'})
    };
this.clickMe = this.clickMe.bind(this);
this.onSelect = this.onSelect.bind(this);
  }

  clickMe() {
let lorem = faker.lorem.sentence(10);
//let content = cows(CompuCow);
// let content = say({
//     text: lorem,
//     cow: '', // Template for a cow, get inspiration from `./cows`
//     eyes: 'oo', // Select the appearance of the cow's eyes, equivalent to cowsay -e
//     tongue: 'L|', // The tongue is configurable similarly to the eyes through -T and tongue_string, equivalent to cowsay -T
//     wrap: false, // If it is specified, the given message will not be word-wrapped. equivalent to cowsay -n
//     wrapLength: 40, // Specifies roughly where the message should be wrapped. equivalent to cowsay -W
//     mode: 'p', // One of 	"b", "d", "g", "p", "s", "t", "w", "y"
//   });
let content = say({text: lorem});
this.setState({content})

  }

  onSelect(e) {
    //this.setState({content: event.target.value});
    this.setState({
      content: say({
        text: 'I\'m nuts about React',
        cow: e.target.value, 
      })
    });
  }
  render() {
      return( <React.Fragment>
        <h1>Generate Cowsay Lorem</h1>
        <select className='change' value={this.state.content} onChange={this.onSelect}>
            <option value=''>Cow</option>
            <option value={SQUIRREL}>Squirrel</option>
            </select>
        <button className='change' onClick={this.clickMe}> click me </button>
        <pre className={this.state.content}> {this.state.content} </pre>
        </React.Fragment>
      );
    }
}


ReactDOM.render(<App/>, document.getElementById("root"));

