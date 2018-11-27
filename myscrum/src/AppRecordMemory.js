import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import Footer from './components/footer';
import RecordMemory from './components/record_memory';
import firebase from 'firebase';

class AppRecordMemory extends Component {

  state = {
    recordMemory: []
  }

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyCgTpevTjflOywnhCxLp9jbzLO9w1GculM",
      authDomain: "web-db-6aacf.firebaseapp.com",
      databaseURL: "https://web-db-6aacf.firebaseio.com",
      projectId: "web-db-6aacf",
      storageBucket: "web-db-6aacf.appspot.com",
      messagingSenderId: "295163595817"
    };
    firebase.initializeApp(config);
    this.loadRecMem();
    console.log('DidMount')
    console.log(this.state.recordMemory)
  }

  loadRecMem = () => {

    firebase.database().ref('RecMemory/').once('value', (snapshot) => {
      console.log('firebase')
      console.log(snapshot.val());
      this.setState({recordMemory: snapshot.val()});
    })
      
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <RecordMemory rec_mem={this.state.recordMemory}/>
        <Footer />
      </Fragment>
    );
  }
}

export default AppRecordMemory;