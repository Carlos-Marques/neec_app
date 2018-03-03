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
        <PageDivider text='Programação' />
        <div className="CodingGrid">
          <Grid fluid>
            <Row>
              {workshopDB.coding.map(
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
        <PageDivider text='Electrónica' />
        <div className="CodingGrid">
          <Grid fluid>
            <Row>
              {workshopDB.soldadura.map(
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
        <PageDivider text='Outros' />
        <div className="CodingGrid">
          <Grid fluid>
            <Row>
              {workshopDB.outros.map(
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

export default Workshops;