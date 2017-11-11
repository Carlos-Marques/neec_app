import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NewsCard from "../../Components/NewsCard"
import "../../Styles/ObjectGrid.css"
import basicremoteworkflow from '../../Images/event.png'
import matlab from "../../Images/matlab.jpg"

class ObjectGrid extends Component {
  render() {
    return (
        <div className="rowl">
            <Grid fluid>
                <Row>
                    <Col xs ><NewsCard imgsrc={this.props.type == "workshops"? matlab : basicremoteworkflow}/></Col>
                    <Col xs ><NewsCard imgsrc={this.props.type == "workshops"? matlab : basicremoteworkflow}/></Col>
                    <Col xs ><NewsCard imgsrc={this.props.type == "workshops"? matlab : basicremoteworkflow}/></Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default ObjectGrid;