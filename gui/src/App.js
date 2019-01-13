import React, { Component } from 'react';
// import './App.css';
// import { Actions } from './constants';
import Chat from "./components/Chat";

class App extends Component {
  render() {
    
    // const { page } = this.props;
    const  page = 'PAGE_CHAT';


    switch (page) {
      // case Actions.PAGE_SIGNUP:
        // return <SignUpContainer />;
      case 'PAGE_CHAT':
        return <Chat />;
      default:
        return <Chat />;
    }
  }
}

export default App;
