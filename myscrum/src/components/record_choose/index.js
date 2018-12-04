import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Img from './snippet.png';

class RecordChoose extends Component {
    render() {
        return (
            <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="card" width="18rem">
                                <img class="card-img-top" src={Img} height="310px" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Backlog Memory Records</h5>
                                    <a href="#" class="btn btn-light"><Link class="link-color" style={{ textDecoration: 'none', color:'black' }} to="/record_memory">Consultar</Link> <span class="sr-only">(current)</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card" width="18rem">
                                <img class="card-img-top gray" src='' height="310px" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Em breve</h5>
                                    <a href="#" class="btn btn-light">Consultar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card" width="18rem">
                                <img class="card-img-top gray" src='' height="310px" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Consultar breve</h5>
                                    <a href="#" class="btn btn-light">Iniciar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecordChoose;