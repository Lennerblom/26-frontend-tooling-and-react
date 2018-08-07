'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import scss from './style/app.scss';
import faker from 'faker';
import { say, SQUIRREL,} from 'cowsay';


class App extends Component {
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
let lorem = faker.lorem.sentence(7);

let content = say({text: lorem});
this.setState({content})

  }

  onSelect(e) {
    e.preventDefault();
    let content;
      if(e.target.value === ''){
          content = say({
              text: 'You mooooost press click me',
              mode: 't'
            })
     } else {
    content = say({
            text: 'I\'m just NUTS, about React!!',
            cow: e.target.value, 
          })
    }
    this.setState({content});
 }

  render() {
      return( <React.Fragment>
        <h1>Generate Cowsay Lorem</h1>
        <label>Animal
        <select className='change' value={this.state.value} onChange={this.onSelect}>
            <option value=''></option>
            <option value={SQUIRREL}>Squirrel</option>
            <option value=''>Cow</option>
            </select>
            </label>
        <button className='change' onClick={this.clickMe}> click me </button>
        <pre className={this.state.content}> {this.state.content} </pre>
        {/* <form>
            <input name="something" type="textarea"/>
        </form> */}
        </React.Fragment>
      );
    }
}


ReactDOM.render(<App/>, document.getElementById("root"));

