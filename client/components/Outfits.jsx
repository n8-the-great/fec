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
    }
   this.onAddClick = this.onAddClick.bind(this);
   this.onDeleteClick = this.onDeleteClick.bind(this);

  };


  onAddClick(e) {
    var newOutfit = this.props.product;
    var wardrobe = [...this.state.wardrobe];

    if (!wardrobe.includes(newOutfit)) {
      wardrobe.push(newOutfit);

      this.setState({
        wardrobe: wardrobe,
        length: wardrobe.length
      });
    } else {
      console.log('outfit already exists');
    }

  }

  onDeleteClick(e) {
    // console.log('delete click');
    // console.log(e);

    var wardrobe = [...this.state.wardrobe];

    if (wardrobe.length === 1) {
      wardrobe.pop();
    } else {
      wardrobe.slice(e, 1);
    }


    this.setState({
      wardrobe: wardrobe,
      length: wardrobe.length
    });
  }


  updateCarousel(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= this.state.length) {
      newIndex = this.state.length - 1;
    }

    this.setState({
      activeCarousel: newIndex,
    });
  }


  // always render a Outfit add

  render() {
    return (
      <React.Fragment>
      <button className="carousel-button-left" onClick = {() => { this.updateCarousel(this.state.activeCarousel - 1);}}>Previous</button>
      <button className="carousel-button-right" onClick = {() => { this.updateCarousel(this.state.activeCarousel + 1);}}>Next</button>

      <div className="carousel">
        <div className="carousel-inner"
          style={{ transform: `translateX(-${(this.state.activeCarousel * 100)/5}%)` }}>
          Outfits <br />

          <Outfit key = {0} defaultAdd = {true} action = {this.onAddClick}/>

          { this.state.wardrobe.map((item, index) => (
              <Outfit
                key = {index + 1}
                index = {index}
                product = {item}
                action = {this.onDeleteClick}
                product_selection = {this.props.productSelector}
                // add star rating later
              />
            ))
          }
        </div>
      </div>
      </React.Fragment>
    );
  //   }
  }
}

export default Outfits;