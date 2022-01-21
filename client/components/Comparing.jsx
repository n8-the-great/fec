import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CompareTable from './CompareTable.jsx';
import $ from 'jquery';


var Comparing = (props) => {
  // console.log('comparing');
  // console.log(props);


  var [show, setShow] = useState(true);

  var changeShow = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  if (!props.show) {
    return null;
  }

  var features = [];
  var productFeature;

  // add features
  for (var i = 0; i < props.preview.features.length; i++) {
    if (props.preview.features[i].value === null) {
      productFeature = props.preview.features[i].feature;
    } else {
      productFeature = `${props.preview.features[i].value} ${props.preview.features[i].feature}`;
    }

    features.push([productFeature, true, false]);
  }

  for (var i = 0; i < props.relatedFeatures.length; i++) {
    if (props.relatedFeatures[i].value === null) {
      productFeature = props.relatedFeatures[i].feature;
    } else {
      productFeature = `${props.relatedFeatures[i].value} ${props.relatedFeatures[i].feature}`;
    }

    var wasFoundAtIndex = features.indexOf([productFeature, true, false]);
    if (wasFoundAtIndex !== -1) {
      features[wasFoundAtIndex] = [productFeature, true, true];
    } else {
      features.push([productFeature, false, true]);
    }
  }


  var displayCheckMarkIf = (included) => {
    if (included) {
      return (<h4>&#10004;</h4>);
    } else {
      return (<h4>&nbsp;</h4>);
    }
  }
var renderComparisonTable = features.map( (detail) => {
  return(
    <div className="modal-body-detail">
      <div className="modal-body-left">{displayCheckMarkIf(detail[1])}</div>
      <div className="modal-body-middle">{detail[0]}</div>
      <div className="modal-body-right">{displayCheckMarkIf(detail[2])}</div>
    </div>
  )}
)

  // add rating to features
  // maybe add price to features (comparison)

  return (
    <div className="modal" onClick={ () => {changeShow()}}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Comparing</h5>
          <div className="modal-products">
            <h4 className="modal-leftName">{props.preview.name}</h4>
            <h4 className="modal-rightName">{props.relatedName}</h4>
          </div>
        </div>
        <div className="modal-body">
          {/* <CompareTable compareTable={features}/> */}
          {renderComparisonTable}
        </div>
        <div className="modal-footer">
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default Comparing;