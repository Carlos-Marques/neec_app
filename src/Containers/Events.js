import React, { Component } from 'react';
import "../Styles/Workshops.css"
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';
import NewsCard from "../Components/NewsCard"
import PageDivider from "../Components/PageDivider"
import Slider from 'react-slick'
import eventDB from '../DB/eventDB.js'
import matlab from "../Images/matlab.jpg"
import openday from '../Images/openday.png'
import fast_meeting from '../Images/fast_meeting.png'

class Events extends Component {
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
        <PageDivider text='Events' />
        <div className="CodingGrid">
          <Grid fluid>
            <Row>
              {eventDB.events.map(
                function (x) {
                  return (
                    <Col className="col" >
                      <Link to={'/article/' + x.type + "/" + x.tittle} activeClassName="active">
                        <div className='card'><NewsCard tittle={x.tittle} imgsrc={x.img} desc={x.desc} /></div>
                      </Link>
                    </Col>
                  )
                }
              )}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Events;