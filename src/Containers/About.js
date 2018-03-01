import React, { Component } from 'react';
import NEECpeople from '../Images/NEECpeople.jpg'
import '../Styles/About.css'
import PageDivider from '../Components/PageDivider'
import AboutGrid from '../Containers/About/AboutGrid'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import neecDB from '../DB/neecDB.js'

class About extends Component {
  render() {
    return (
      <div>
        <div className="NEECStyle"></div>
        <PageDivider text='ABOUT'/>
        <AboutGrid />
        <div className='members'>
          <PageDivider text='MEMBERS'/>
          <div className='grid'>
            <Grid fluid>
                  <Row>
                      {neecDB.neecos.map(
                        function(neecos) {
                          var sectionStyle = {
                            backgroundImage: "url(" + neecos.img + ")"
                          };

                          return (
                            <Col className="col" xs >
                              <div className='userbox'>
                                <Paper style={sectionStyle} className='User' zDepth={2} circle={true}></Paper>
                                <h4>{neecos.name}</h4>
                                <h5>{neecos.tittle}</h5>
                                <div className='userlinks'>
                                  <a target="_blank" href={neecos.links.facebook}><i className="fa fa-facebook" /></a>
                                  <a target="_blank" href={neecos.links.linkedin}><i className="fa fa-linkedin" /></a>
                                  <a target="_blank" href={neecos.links.github}><i className="fa fa-github" /></a>
                                  <a target="_blank" href={neecos.links.personal}><i className="fa fa-address-card" /></a>
                                  <a href= {"mailto:" + neecos.links.email}><i className="fa fa-envelope" /></a>
                                </div>
                              </div>
                            </Col>)
                        }
                      )}
                  </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default About;