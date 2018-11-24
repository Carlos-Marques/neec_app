import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"
import { Navbar, Nav, NavItem, Carousel, PageHeader } from "react-bootstrap"
import CardExampleWithAvatar from './Card'
import { Grid, Row, Col } from 'react-flexbox-grid';

var imgStyle = {
  width: "20%",
  height: "100%"
}
var fixed = true
var cardStyle = {
  width: "300px",
}

class App extends Component {
  render() {
    return (
      <div className="App" >
        <PageHeader ><a line-height={100} href="about">Sites Úteis</a></PageHeader>
        <Grid fluid>
          <Row>
            <Col xs >
              <img src={require("./folder.png")} width={48} height={48} />
              <h4>Drive MEEC</h4>
              <p>Gerimos a coleção de sebentas, apontamentos, testes e exames do nosso curso, disponíveis a qualquer aluno de MEEC.</p>
              <a href="https://drive.neecist.org">drive.neecist.org</a>
            </Col>
            <Col xs >
              <img src={require("./tecnico.png")} width={48} height={48} />
              <h4>Salas IST</h4>
              <p>Perdido no IST? Não mais! Procura aqui a sala da qual nunca ouviste falar!</p>
              <a href="https://salas.neecist.org">salas.neecist.org</a>
            </Col>
            <Col xs >
              <img src={require("./work.png")} width={48} height={48} />
              <h4>IST Summer Internships</h4>
              <p>Estágios de verão a que te poderás candidatar para enriquecer a tua experiência profissional.</p>
              <a href="https://www.istsi.org">istsi.org</a>
            </Col>
            <Col xs >
              <img src={require("./circuit.png")} width={48} height={48} />
              <h4>NEECLab</h4>
              <p>Um laboratório de eletrónica para poderes desenvolver os teus projetos pessoais.</p>
              <a href="https://neeclab.neecist.org">neeclab.neecist.org</a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;