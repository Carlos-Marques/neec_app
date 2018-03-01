import React, { Component } from 'react';
import "../Styles/Workshops.css"
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';
import NewsCard from "../Components/NewsCard"
import PageDivider from "../Components/PageDivider"
import Slider from 'react-slick'
import workshopDB from '../DB/workshopDB.js'

class Workshops extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    };

    return (
      <div>
        <div className="Workshoptop"></div>
        <PageDivider text='Programação'/>
        <div className="CodingGrid">
        <Slider {...settings}>
            {workshopDB.coding.map(x => <div className='card'><NewsCard tittle={x.tittle} imgsrc={x.img} desc={x.desc}/></div>)}
        </Slider>
        <PageDivider text='Electrónica'/>
        <Slider {...settings}>
            {workshopDB.soldadura.map(x => <div className='card'><NewsCard tittle={x.tittle} imgsrc={x.img} desc={x.desc}/></div>)}
        </Slider>
        <PageDivider text='Outros'/>
        <Slider {...settings}>
            {workshopDB.outros.map(x => <div className='card'><NewsCard tittle={x.tittle} imgsrc={x.img} desc={x.desc}/></div>)}
        </Slider>
        </div>
      </div>
    );
  }
}

export default Workshops;