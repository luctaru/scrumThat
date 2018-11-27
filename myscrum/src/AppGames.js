import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import Footer from './components/footer';
import Jogos from './components/jogos';

class AppGames extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <Jogos/>
        <Footer/>
      </Fragment>
    );
  }
}

export default AppGames;