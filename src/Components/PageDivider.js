import React, { Component } from 'react';
import '../Styles/PageDivider.css'

class PageDivider extends Component {
  render() {
    return (
      <div className="section">
          <h2 className="text">{this.props.text}</h2>
      </div>
    );
  }
}

export default PageDivider;