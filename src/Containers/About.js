import React, { Component } from 'react';
import NEECpeople from '../Images/NEECpeople.jpg'
import '../Styles/About.css'
import PageDivider from '../Components/PageDivider'
import AboutGrid from '../Containers/About/AboutGrid'
import Paper from 'material-ui/Paper';
import Carlos from "../Images/Carlos.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <div className="NEECStyle"></div>
        <PageDivider text='ABOUT'/>
        <AboutGrid />
        <div className='members'>
          <PageDivider text='MEMBERS'/>
          <Paper className="User" zDepth={2} circle={true}><img src={Carlos} className='userimage'/></Paper>
        </div>
      </div>
    );
  }
}

export default About;