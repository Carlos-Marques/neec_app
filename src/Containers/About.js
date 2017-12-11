import React, { Component } from 'react';
import NEECpeople from '../Images/NEECpeople.jpg'
import '../Styles/About.css'
import PageDivider from '../Components/PageDivider'
import AboutGrid from '../Containers/About/AboutGrid'
import Paper from 'material-ui/Paper';
import Carlos from "../Images/Carlos.jpg";
import { Grid, Row, Col } from 'react-flexbox-grid';

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
                      <Col xs >
                        <div className='userbox'>
                          <Paper className="User" zDepth={2} circle={true}></Paper>
                          <h4>Carlos Silva</h4>
                          <h5>Presidente</h5>
                          <div className='userlinks'>
                            <a href="https://facebook.neecist.org"><i className="fa fa-facebook" /></a>
                            <a href="https://twitter.neecist.org"><i className="fa fa-twitter" /></a>
                            <a href="https://linkedin.neecist.org"><i className="fa fa-linkedin" /></a>
                            <a href="https://youtube.neecist.org"><i className="fa fa-youtube" /></a>
                          </div>
                        </div>
                      </Col>
                      <Col xs >
                      <div className='userbox'>
                        <Paper className="User" zDepth={2} circle={true}></Paper>
                        <h4>Carlos Silva</h4>
                        <div className='userlinks'>
                          <a href="https://facebook.neecist.org"><i className="fa fa-facebook" /></a>
                          <a href="https://twitter.neecist.org"><i className="fa fa-twitter" /></a>
                          <a href="https://linkedin.neecist.org"><i className="fa fa-linkedin" /></a>
                          <a href="https://youtube.neecist.org"><i className="fa fa-youtube" /></a>
                        </div>
                      </div>
                    </Col>
                    <Col xs >
                        <div className='userbox'>
                          <Paper className="User" zDepth={2} circle={true}></Paper>
                          <h4>Carlos Silva</h4>
                          <div className='userlinks'>
                            <a href="https://facebook.neecist.org"><i className="fa fa-facebook" /></a>
                            <a href="https://twitter.neecist.org"><i className="fa fa-twitter" /></a>
                            <a href="https://linkedin.neecist.org"><i className="fa fa-linkedin" /></a>
                            <a href="https://youtube.neecist.org"><i className="fa fa-youtube" /></a>
                          </div>
                        </div>
                      </Col>
                      <Col xs >
                        <div className='userbox'>
                          <Paper className="User" zDepth={2} circle={true}></Paper>
                          <h4>Carlos Silva</h4>
                          <div className='userlinks'>
                            <a href="https://facebook.neecist.org"><i className="fa fa-facebook" /></a>
                            <a href="https://twitter.neecist.org"><i className="fa fa-twitter" /></a>
                            <a href="https://linkedin.neecist.org"><i className="fa fa-linkedin" /></a>
                            <a href="https://youtube.neecist.org"><i className="fa fa-youtube" /></a>
                          </div>
                        </div>
                      </Col>
                      <Col xs >
                        <div className='userbox'>
                          <Paper className="User" zDepth={2} circle={true}></Paper>
                          <h4>Carlos Silva</h4>
                          <div className='userlinks'>
                            <a href="https://facebook.neecist.org"><i className="fa fa-facebook" /></a>
                            <a href="https://twitter.neecist.org"><i className="fa fa-twitter" /></a>
                            <a href="https://linkedin.neecist.org"><i className="fa fa-linkedin" /></a>
                            <a href="https://youtube.neecist.org"><i className="fa fa-youtube" /></a>
                          </div>
                        </div>
                      </Col>
                  </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default About;