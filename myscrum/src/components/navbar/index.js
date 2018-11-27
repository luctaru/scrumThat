import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-info">
                    <a class="navbar-brand" href="#">Don't Scrum</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"><Link class="link-color" style={{ textDecoration: 'none' }} to="/">Inicio</Link> <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"><Link class="link-color" style={{ textDecoration: 'none' }} to="/games">Jogos</Link> <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"><Link class="link-color" style={{ textDecoration: 'none' }} to="/record_choose">Records</Link> <span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

export default Navbar;