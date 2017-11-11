import React, { Component } from 'react';
import "../Styles/Footer.css"
import { Grid, Row, Col } from 'react-flexbox-grid';
import FontIcon from 'material-ui/FontIcon';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footerdiv">
          <Grid fluid>
                <Row>
                    <Col xs>
                        <div className="gridcontact">
                            <h4 className="footertittles">Contact</h4>
                            <p className='contactinfo'><FontIcon className="material-icons">location_on</FontIcon>Instituto Superior Técnico (Campus Alameda) -
                                Avenida Rovisco Pais 1, 1049-001 Lisboa</p>
                            <p className='contactinfo'>Sala da Direcção - Pavilhão de Electricidade, Piso 4, Sala 4i.13</p>
                            <p className='contactinfo'>NEECLab - Pavilhão de Electricidade, Piso 1 (Junto à recepção da SCDEEC)</p>
                            <p className='contactinfo'><FontIcon className="material-icons">phone</FontIcon>(+351) 218 419 056</p>
                            <p className='contactinfo'><FontIcon className="material-icons">email</FontIcon>contacto@neecist.org</p>
                        </div>
                    </Col>
                    <Col xs>
                        <div>
                            <h4 className="footertittles">Redes Sociais</h4>
                            <a href="https://facebook.neecist.org"><i className="fa fa-facebook" /></a>
                            <a href="https://twitter.neecist.org"><i className="fa fa-twitter" /></a>
                            <a href="https://linkedin.neecist.org"><i className="fa fa-linkedin" /></a>
                            <a href="https://youtube.neecist.org"><i className="fa fa-youtube" /></a>
                        </div>
                    </Col>
                </Row>
          </Grid>
        </div>
        
        <h5 className="copyright">
          Copyright © 2017 NEECIST
        </h5>
      </div>
    );
  }
}

export default Footer;