import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Outfit from './Outfit.jsx';

import token from '../../config.js';

class Outfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      wardrobe: [],
      length: 0,
      activeCarousel: 0,
      carouselSize: 4

    }
   this.onAddClick = this.onAddClick.bind(this);
   this.onDeleteClick = this.onDeleteClick.bind(this);

  };


  onAddClick(e) {
    console.log('add click');

    var newOutfit = this.props.product;
    var wardrobe = [...this.state.wardrobe];

    if (!wardrobe.includes(newOutfit)) {
      wardrobe.push(newOutfit);

      this.setState({
        wardrobe: wardrobe,
        length: this.state.length + 1
      });
    } else {
      console.log('outfit already exists');
    }

  }

  onDeleteClick(e) {
    console.log('delete click');
    console.log(e);
  }


  updateCarousel(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= this.state.related.count) {
      newIndex = this.state.related.count - 1;
    }

    this.setState({
      activeCarousel: newIndex,
    });
  }


  // always render a Outfit add

  render() {
    if (this.state.length === 0) {
      return (
        <div className="carousel">
          <div className="carousel-inner">
            <Outfit key = {0} defaultAdd = {true}  action = {this.onAddClick}/>
          </div>
        </div>
      )
    }
    else {
      return(
        <div className="carousel">
          <div className="carousel-inner"
                style={{ transform: `translateX(-${(this.state.activeCarousel * 100)/4}%)` }}>
            Outfits <br />
            <Outfit key = {0} defaultAdd = {true} action = {this.onAddClick}/>
            { this.state.wardrobe.map((item, index) => (

                // return React.cloneElement(item, {width: "100%"})
                <Outfit
                  key = {index + 1}
                  product = {item}
                  action = {this.onDeleteClick}
                  // add star rating later
                />
              ))
            }

          </div>
          <div className="carousel-buttons">
            <button onClick = {() => { this.updateCarousel(this.state.activeCarousel - 1);}}>Previous</button>
            <button onClick = {() => { this.updateCarousel(this.state.activeCarousel + 1);}}>Next</button>

          </div>
        </div>
      );
    }
  }
}

export default Outfits;
