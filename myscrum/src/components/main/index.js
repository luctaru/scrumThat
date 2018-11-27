import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './main.css'

class Main extends Component {
    render() {
        return (
            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <main role="main" class="inner cover">
                    <h1 class="cover-heading">Cover your page.</h1>
                    <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p class="lead">
                    </p>
                </main>
            </div>
        );
    }
}

export default Main;