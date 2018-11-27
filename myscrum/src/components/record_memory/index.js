import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';
import './record_memory.css';

class RecordMemory extends Component {
    render() {
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
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Grid>
        );
    }
}

export default RecordMemory;