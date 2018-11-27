import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import ImgPuzzle from '../../assets/puzzle.svg';
import './flipCard.css';

class FlipCard extends Component {
    render() {
        return (
            <Fragment>
                <div class="container">
                    <div class="row justify-content-md-center m-5">
                        <div class="col"><label>
                            <input type="checkbox" />
                            <div class="card">
                                <div class="front">
                                    <img src={ImgPuzzle} alt="Avatar" width="200px" height="200px" />
                                </div>
                                <div class="back">
                                    <img src={ImgPuzzle} class="gray" alt="Avatar" width="200px" height="200px" />
                                </div>
                            </div>
                        </label></div>
                        <div class="col"><label>
                            <input type="checkbox" />
                            <div class="card">
                                <div class="front">
                                    <img src={ImgPuzzle} alt="Avatar" width="200px" height="200px" />
                                </div>
                                <div class="back">
                                    <img src={ImgPuzzle} class="gray" alt="Avatar" width="200px" height="200px" />
                                </div>
                            </div>
                        </label></div>
                        <div class="col"><label>
                            <input type="checkbox" />
                            <div class="card">
                                <div class="front">
                                    <img src={ImgPuzzle} alt="Avatar" width="200px" height="200px" />
                                </div>
                                <div class="back">
                                    <img src={ImgPuzzle} class="gray" alt="Avatar" width="200px" height="200px" />
                                </div>
                            </div>
                        </label></div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default FlipCard;