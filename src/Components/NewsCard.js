import React, { Component } from 'react';
import {Card, CardMedia, CardText, CardTitle} from 'material-ui/Card';

class NewsCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle titleColor="#000000" title={this.props.tittle} />}
        >
          <img src={this.props.imgsrc} alt="" />
        </CardMedia>
        <CardText>
          {this.props.desc}
        </CardText>
      </Card>
    );
  }
}

export default NewsCard;