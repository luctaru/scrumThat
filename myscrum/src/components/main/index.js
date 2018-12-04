import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './main.css'

class Main extends Component {
    render() {
        return (
            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <main role="main" class="inner cover">
                    <h1 class="cover-heading">Bem vindo ao Don't Scrum That!</h1>
                    <p class="lead">
                    Essa aplicação é um site auto educativo de metodologias ágeis, neste caso o Scrum. Esse projeto foi feito para a diciplina de Ofina de Integração 2.
                    </p>
                    <p class="lead">
                    As metodologias ágeis são abordagens para o desenvolvimento de produtos que estão alinhadas com valores e princípios descritos no Manifesto Ágil para Desenvolvimento de Software, assinado em 2001 em Utah. Scrum é uma dessas abordagens para gestão e planejamento de projetos de software.
                    </p>
                </main>
            </div>
        );
    }
}

export default Main;