import React, { Component } from 'react';
import {Card, CardMedia, CardText, CardTitle} from 'material-ui/Card';

class NewsCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle titleColor="#000000" title="Matlab" />}
        >
          <img src={this.props.imgsrc} alt="" />
        </CardMedia>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CardText>
      </Card>
    );
  }
}

export default NewsCard;