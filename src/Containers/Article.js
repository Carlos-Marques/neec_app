import React, { Component } from 'react';
import "../Styles/Article.css"
import workshopDB from '../DB/workshopDB.js'
import eventDB from '../DB/eventDB.js'
import PageDivider from "../Components/PageDivider"
import Text from 'react-format-text'

class Article extends Component {
  render() {
    var type = this.props.match.params.typeID;

    var DB = (type == "event") ? eventDB.events : (type == "coding") ? workshopDB.coding : (type == "soldadura") ? workshopDB.soldadura : workshopDB.outros;

    var articleData = DB.find(o => o.tittle === this.props.match.params.articleID);

    var divStyle = {
        width: '100vw',
        height: '60vh',
        backgroundImage: "url(" + articleData.img + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 10%',
        filter: 'brightness(40%)',
    };
    return (
      <div>
          <div style={divStyle}></div>
          <PageDivider text={articleData.tittle} />
          <div className='textbox'>
            <p><Text>{articleData.text}</Text></p>
          </div>
      </div>
    );
  }
}

export default Article;