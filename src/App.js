import React, { Component } from 'react';
import Main from './Component/Main';
import './App.css';
import Nav from './Component/Nav';





class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      REACT_APP_EMAILJS_USERID: 'user_17Y3yksLiJyYnOXq04djD',
      REACT_APP_EMAILJS_TEMPLATEID: 'template_IldEFUEB',
      REACT_APP_EMAILJS_RECEIVER: 'isuruliyanage1@gmail.com'
    }

  }

  render() {

    return (
      <div>
        <Nav />
        <div className="container">
          <Main />
        </div>
      </div>
    );
  }
}




export default App;
