import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Gitlogo from '../../assets/github-logo.svg';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer class="mt-auto py-1 m-0 bg-info">
                    <div class="row">
                        <div class="col-12 col-md">
                            <small class="d-block mb-3 text-muted">&copy; 2018</small>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Link GitHub</h5>
                            <div>
                                <a href="https://github.com/rannysan/scrumThat" target="_blank"><img src={Gitlogo} class="gray" width="24px" height="24px" alt="Logo" /></a>
                            </div>
                        </div>
                        <div class="col-6 col-md">
                        </div>
                        <div class="col-6 col-md">
                        </div>
                        <div class="col-6 col-md">
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;