import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';
import './record_memory.css';

class RecordMemory extends Component {

    constructor(props){
        super(props);
        console.log(this.props)
    }

    sortNumber(a,b) {
        return a - b;
    }

    show = () =>{
        var cont = 0;
  
        var item = this.props.rec_mem.map(e =>
            <tr>
                <td>{cont++}</td>
                <td>{e.name}</td>
                <td>{e.pont}</td>
            </tr>
        );
        return(
            <tbody>{item}</tbody>
        );
    }

    render() {
        if(this.props.rec_mem == undefined){
            return(
                <h1>CARREGANDO</h1>
            );
        }
        else{
            return (
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <h2 style={{ textAlign: "center" }}>RECORD BACKLOG MEMORY</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Player</th>
                                        <th>Pontuation</th>
                                    </tr>
                                </thead>
                                {this.show()}
                            </Table>
                        </Col>
                    </Row>
    
                </Grid>
            );
        }
    }
}

export default RecordMemory;