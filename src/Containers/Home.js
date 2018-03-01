import React, { Component } from 'react';
import ImgSlider from '../Components/ImgSlider'
import PageDivider from '../Components/PageDivider'
import CardGrid from './Home/CardGrid'
import ObjectGrid from './Home/ObjectGrid'
import { Link } from 'react-router-dom'
import "../Styles/Home.css"
import Slider from 'react-slick'
import matlab from "../Images/matlab.jpg"
import git from '../Images/git.png'
import pov from '../Images/pov.jpg'
import sail from '../Images/sail.png'
import python from '../Images/python.png'
import neecduino from '../Images/neecduino2013.jpg'
import NewsCard from "../Components/NewsCard"
import workshopDB from "../DB/workshopDB.js"
import eventDB from "../DB/eventDB.js"

class Home extends Component {
  render() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
};

    return (
      <div>
          <ImgSlider />
          <div >
            <PageDivider text="PAGES" />
            <CardGrid />
          </div>
          <div className='gray'>
          <Link to='/workshops'><PageDivider text="WORKSHOPS" /></Link>
          {/**<ObjectGrid type="workshops"/>**/}
          <Slider {...settings}>
            {workshopDB.coding.map(x => <div className='card'><NewsCard tittle={x.tittle} imgsrc={x.img} desc={x.desc}/></div>)}
          </Slider>
          </div>
          <div>
          <Link to='/workshops'><PageDivider text="EVENTS" /></Link>
          <Slider {...settings}>
            {eventDB.events.map(x => <div className='card'><NewsCard tittle={x.tittle} imgsrc={x.img} desc={x.desc}/></div>)}
          </Slider>
          </div>
      </div>
    );
  }
}

export default Home;