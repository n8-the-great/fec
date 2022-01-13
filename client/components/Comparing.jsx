import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


var Comparing = (props) => {
  console.log('comparing');
  console.log(props);

  if (!props.show) {
    return null;
  }

  var features = {};
  var productFeature;

  for (var i = 0; i < props.preview.features.length; i++) {
    productFeature = props.preview.features[i];
    features[productFeature.feature] = {"preview": productFeature.value};
  }

  for (var i = 0; i < props.relatedFeatures.length; i++) {
    productFeature = props.relatedFeatures[i];
    features[productFeature.feature] = {"related": productFeature.value};
  }

  console.log('current features: ');
  console.log(features);


  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Comparing</h5>
          <div className="modal-products">
            <h4 className="modal-leftName">{props.preview.name}</h4>
            <h4 className="modal-rightName">{props.relatedName}</h4>
          </div>
        </div>
        <div className="modal-body">
          display feature table here
        </div>
        <div className="modal-footer">
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default Comparing;