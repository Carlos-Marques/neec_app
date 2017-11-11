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
                <Col xs >
                    <div className="gridbox">
                        <img src={folder} width={48} height={48}/>
                        <h4>Drive MEEC</h4>
                        <p>Gerimos a coleção de sebentas, apontamentos, testes e exames do nosso curso, disponíveis a qualquer aluno de MEEC.</p>
                        <a href="https://drive.neecist.org">drive.neecist.org</a>
                    </div>
                </Col>
                <Col xs >
                    <div className="gridbox">
                        <img src={tecnico} width={48} height={48}/>
                        <h4>Salas IST</h4>
                        <p>Perdido no IST? Não mais! Procura aqui a sala da qual nunca ouviste falar!</p>
                        <a href="https://salas.neecist.org">salas.neecist.org</a>
                    </div>
                </Col>
                <Col xs >
                    <div className="gridbox">
                        <img src={work}/>
                        <h4>IST Summer Internships</h4>
                        <p>Estágios de verão a que te poderás candidatar para enriquecer a tua experiência profissional.</p>
                        <a href="https://www.istsi.org">istsi.org</a>
                    </div>
                </Col>
                <Col xs >
                    <img src={circuit} width={48} height={48}/>
                    <h4>NEECLab</h4>
                    <p>Um laboratório de eletrónica para poderes desenvolver os teus projetos pessoais.</p>
                    <a href="https://neeclab.neecist.org">neeclab.neecist.org</a>
                </Col>
            </Row>
      </Grid>
    );
  }
}

export default CardGrid;