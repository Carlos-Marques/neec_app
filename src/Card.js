import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle titleColor="#0066ff" title="Git" subtitle="Workshop" />}
    >
      <img src={require("./basic-remote-workflow.png")} alt="" />
    </CardMedia>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </CardText>
  </Card>
);

export default CardExampleWithAvatar;