import React, { Component } from 'react';
import NEECpeople from '../Images/NEECpeople.jpg'

class Article extends Component {
  render() {
    var divStyle = {
        width: '100vw',
        height: '60vh',
        backgroundImage: "url(" + NEECpeople + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 10%',
        filter: 'brightness(40%)',
    };
    return (
      <div>
          <div style={divStyle}></div>
      </div>
    );
  }
}

export default Article;