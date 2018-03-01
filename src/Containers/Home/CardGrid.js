import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "../../Styles/CardGrid.css"
import folder from '../../Images/folder.png'
import tecnico from '../../Images/tecnico.png'
import work from '../../Images/work.png'
import circuit from '../../Images/circuit.png'

class CardGrid extends Component {
  render() {
    return (
        <Grid fluid>
            <Row>
                <Col xs className="col" >
                    <div className="gridbox">
                        <h4><a className="fa fa-folder-open"/>Drive MEEC</h4>
                        <p>Gerimos a coleção de sebentas, apontamentos, testes e exames do nosso curso, disponíveis a qualquer aluno de MEEC.</p>
                        <a href="https://drive.neecist.org">drive.neecist.org</a>
                    </div>
                </Col>
                <Col xs className="col" >
                    <div className="gridbox">
                        <h4><a className="fa fa-institution"/>Salas IST</h4>
                        <p>Perdido no IST? Não mais! Procura aqui a sala da qual nunca ouviste falar!</p>
                        <a href="https://salas.neecist.org">salas.neecist.org</a>
                    </div>
                </Col>
                <Col xs className="col" >
                    <div className="gridbox">                        
                        <h4><a className="fa fa-handshake-o"/>IST Summer Internships</h4>
                        <p>Estágios de verão a que te poderás candidatar para enriquecer a tua experiência profissional.</p>
                        <a href="https://www.istsi.org">istsi.org</a>
                    </div>
                </Col>
                <Col xs className="col" >                    
                    <h4><a className="fa fa-sliders" />NEECLab</h4>
                    <p>Um laboratório de eletrónica para poderes desenvolver os teus projetos pessoais.</p>
                    <a href="https://neeclab.neecist.org">neeclab.neecist.org</a>
                </Col>
            </Row>
      </Grid>
    );
  }
}

export default CardGrid;