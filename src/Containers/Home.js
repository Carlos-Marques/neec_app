import React, { Component } from 'react';
import ImgSlider from '../Components/ImgSlider'
import PageDivider from '../Components/PageDivider'
import CardGrid from './Home/CardGrid'
import ObjectGrid from './Home/ObjectGrid'
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
          <PageDivider text="WORKSHOPS" />
          <ObjectGrid type="workshops"/>
          </div>
          <div>
          <PageDivider text="EVENTS" />
          <ObjectGrid type="events"/>
          </div>
      </div>
    );
  }
}

export default Home;