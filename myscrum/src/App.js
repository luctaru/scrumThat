import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import Footer from './components/footer';
import Main from './components/main';
import Jogos from './components/jogos';


class App extends Component {


  render() {
    return (
      <Fragment>
        <Nav/>
        <Main/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
