import React from 'react';
import token from '../../../config.js';

import axios from 'axios';

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: 0
    }
  }

  styleButtonClick(e) {
    e.preventDefault();
    var styleClicked = this.findStyle(e.target.alt);
    this.props.updateGallery(styleClicked.returnStyle);
    this.setState({
      selectedStyle: styleClicked.styleIndex
    });
  }

  findStyle(name) {
    var returnStyle = 'error';
    var i = 0;
    var styleIndex;
    this.props.styles.forEach(style => {
      if (style.name === name) {
        returnStyle = style;
        styleIndex = i;
      }
      i++;
    });
    return {returnStyle, styleIndex};
  }

  render() {
    var stylesArray = [];
    for (var i = 0; i < this.props.styles.length / 4; i++) {
      stylesArray[i] = this.props.styles.slice(i * 4, (i+1) * 4);
    }

    var createStyleTD = (style) => {
      var isSelected = false;
      if (this.props.styles[this.state.selectedStyle].name === style.name) {
        console.log(style.name);
        isSelected = true;
      }

      //console.log(style.photos[0].thumbnail_url);
      return <td className="table-data overview" onClick={this.styleButtonClick.bind(this)}>
        <div className="mask overview">
          <img className={(isSelected ? "selected-style" : "non-selected-style") + " style-button overview"} alt={style.name} src={style.photos[0].thumbnail_url}></img>
        </div>
      </td>
    }


    var styleTable = [];
    styleTable = <table>
      <tbody>{
        stylesArray.map(arrayOf4Styles => (
          <tr>{
            arrayOf4Styles.map(style => {
              return createStyleTD(style)
            })
          }</tr>
        ))
      }</tbody>
    </table>

    return (
      <div className="style-selector overview">
        {styleTable}

      </div>
    )
  }
};

/*

*/


export default StyleSelector;