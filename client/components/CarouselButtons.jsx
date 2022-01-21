import React from 'react';
import ReactDOM from 'react-dom';

import chevronLeft from './src/chevron-left-50.png';
import chevronRight from './src/chevron-right-50.png';


var CarouselButtons = (props) => {

  // var [show, setShow] = useState(false);

  // var changeShow = (e) => {
  //   if (show === false) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // }
  var handleClick = (e) => {
    if (e.target.className === 'carousel-button-right') {
      props.updateCarousel(1);
    } else {
      props.updateCarousel(-1);
    }
  }

  return (
    <React.Fragment>
      <div className = 'carousel-button-left' src={chevronLeft} onClick={handleClick}>&lt;</div>
      <div className = 'carousel-button-right' src={chevronRight} onClick={handleClick}>&gt;</div>
    </React.Fragment>
  );
}




export default CarouselButtons;