import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "../../Styles/AboutGrid.css"

class AboutGrid extends Component {
  render() {
    return (
      <div className="aboutcontent">
        <Grid fluid>
          <Row>
            <Col xs >
              <h4 className="aboutittles">
                Quem somos?
              </h4>
              <p>Associação sem fins lucrativos que reúne os estudantes de MEEC do IST. Somos formados por alunos que, através do seu trabalho voluntário, proporcionam diversas atividades aos seus colegas.</p>
            </Col>
            <Col xs >
              <h4 className="aboutittles">
                O que fazemos?
              </h4>
              <p>Procuramos ajudar os alunos a intregarem-se no mercado de trabalho e dar formação extra-curricular. Organizamos workshops,estágios de verão, OpenDays e muito mais!</p>
            </Col>
            <Col xs >
              <h4 className="aboutittles">
                Por que o fazemos?
              </h4>
              <p>Queremos ajudar a complementar o normal percurso escolar, não só dos alunos de Eletrotecnia, como também de todos do IST.</p>
            </Col>
            <Col xs >
              <h4 className="aboutittles">
                Desde quando?
              </h4>
              <p>Começámos em 2003, e já por quase década e meia temos vindo a crescer para te ajudar ao máximo.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AboutGrid;