import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ImgPuzzle from '../../assets/puzzle.svg';
import './jogos.css';

class Jogos extends Component {
    render() {
        return (
            <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="card" width="18rem">
                                <img class="card-img-top" src={ImgPuzzle} height="310px" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Backlog Memory</h5>
                                    <a href="" class="btn btn-light"><Link style={{ textDecoration: 'none', color: 'black' }} target="_blank" to="/memory_game">Iniciar</Link></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card" width="18rem">
                                <img class="card-img-top gray" src={ImgPuzzle} height="310px" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Em breve</h5>
                                    <a href="#" class="btn btn-light">Iniciar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card" width="18rem">
                                <img class="card-img-top gray" src={ImgPuzzle} height="310px" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Em breve</h5>
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

export default Jogos;