import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import Footer from './components/footer';
import RecordChoose from './components/record_choose';

class AppRecordChoose extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <RecordChoose/>
        <Footer/>
      </Fragment>
    );
  }
}

export default AppRecordChoose;