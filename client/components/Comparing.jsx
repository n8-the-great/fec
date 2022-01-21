import React from 'react';
import ReactDOM from 'react-dom';
// import CompareTable from './CompareTable.jsx';
// import $ from 'jquery';


var Comparing = (props) => {
  // console.log('comparing');
  // console.log('props: ');
  // console.log(props);


  // var [show, setShow] = useState(true);

  // var changeShow = () => {
  //   if (show === false) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // }

  var onActionClick = () => {
    props.hide();
  }

  if (!props.show) {
    return null;
  }

  var features = [];
  var productFeature;

  // add features
  for (var i = 0; i < props.previewProduct.features.length; i++) {
    if (props.previewProduct.features[i].value === null) {
      productFeature = props.previewProduct.features[i].feature;
    } else {
      productFeature = `${props.previewProduct.features[i].value} ${props.previewProduct.features[i].feature}`;
    }

    features.push([productFeature, true, false]);
  }

  for (var i = 0; i < props.relatedProduct.features.length; i++) {
    if (props.relatedProduct.features[i].value === null) {
      productFeature = props.relatedProduct.features[i].feature;
    } else {
      productFeature = `${props.relatedProduct.features[i].value} ${props.relatedProduct.features[i].feature}`;
    }

    var wasFoundAtIndex = features.indexOf([productFeature, true, false]);
    if (wasFoundAtIndex !== -1) {
      features[wasFoundAtIndex] = [productFeature, true, true];
    } else {
      features.push([productFeature, false, true]);
    }
  }

  // console.log('features table: ');
  // console.log(features);


  var displayCheckMarkIf = (included, side) => {
    if (included) {
      if (side === 'left') {
        return (<span className="modal-body-left">&#10004;</span>);
      } else {
        return (<span className="modal-body-right">&#10004;</span>);
      }
    } else {
      if (side === 'left') {
        return (<span className="modal-body-left">&nbsp;</span>);
      } else {
        return (<span className="modal-body-right">&nbsp;</span>);
      }

    }
  }
var renderComparisonTable = features.map( (detail) => {
  return(
    <div className="modal-body-detail">
      {displayCheckMarkIf(detail[1], 'left')}
      <span className="modal-body-middle">{detail[0]}</span>
      {displayCheckMarkIf(detail[2], 'right')}
      <br/> <br />
    </div>


    // <div className="modal-body-detail">
    //   <div className="modal-body-left">{displayCheckMarkIf(detail[1])}</div>
    //   <div className="modal-body-middle">{detail[0]}</div>
    //   <div className="modal-body-right">{displayCheckMarkIf(detail[2])}</div>
    // </div>
  )}
)

  // add rating to features
  // maybe add price to features (comparison)

  return (
    <div className="modal" onClick={onActionClick}>
      <div className="modal-action" onClick={onActionClick}>&#9733;</div>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Comparing</h5>
          <div className="modal-products">
            <h4 className="modal-leftName">{props.previewProduct.name}</h4>
            <h4 className="modal-rightName">{props.relatedProduct.name}</h4>
          </div>
        </div>
        <div className="modal-body">
          {/* <CompareTable compareTable={features}/> */}
          {renderComparisonTable}
        </div>
        <div className="modal-footer">
          {/* <button className="button">Close</button> */}
        </div>
      </div>
    </div>
  )
}

export default Comparing;