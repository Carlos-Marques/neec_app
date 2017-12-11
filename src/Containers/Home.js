import React, { Component } from 'react';
import ImgSlider from '../Components/ImgSlider'
import PageDivider from '../Components/PageDivider'
import CardGrid from './Home/CardGrid'
import ObjectGrid from './Home/ObjectGrid'
import { Link } from 'react-router-dom'
import "../Styles/Home.css"

class Home extends Component {
  render() {
    return (
      <div>
          <ImgSlider />
          <div >
            <PageDivider text="PAGES" />
            <CardGrid />
          </div>
          <div className='gray'>
          <Link to='/workshops'><PageDivider text="WORKSHOPS" /></Link>
          <ObjectGrid type="workshops"/>
          </div>
          <div>
          <Link to='/workshops'><PageDivider text="EVENTS" /></Link>
          <ObjectGrid type="events"/>
          </div>
      </div>
    );
  }
}

export default Home;