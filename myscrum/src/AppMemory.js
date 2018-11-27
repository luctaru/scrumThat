import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import Footer from './components/footer';
import FlipCard from './components/flipCard';

class AppGames extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <FlipCard/>
        <Footer/>
      </Fragment>
    );
  }
}

export default AppGames;