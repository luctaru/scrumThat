import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Gitlogo from '../../assets/github-logo.svg';
import { Grid, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer class="footer bg-info">
                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>
                                <a href="https://github.com/rannysan/scrumThat" target="_blank"><img src={Gitlogo} class="gray" width="24px" height="24px" alt="Logo" /></a>
                            </Col>
                        </Row>
                    </Grid>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;