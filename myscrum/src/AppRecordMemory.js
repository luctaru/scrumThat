import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import Footer from './components/footer';
import RecordMemory from './components/record_memory';

class AppRecordMemory extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <RecordMemory/>
        <Footer/>
      </Fragment>
    );
  }
}

export default AppRecordMemory;