import React from 'react';
import ReactDOM from 'react-dom';
// import CompareTable from './CompareTable.jsx';
import $ from 'jquery';


var Comparing = (props) => {
  // console.log('comparing');
  // console.log(props);

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

  // var renderComparisonTable = features.map((item, index) => {
  //   return(
  //     <div className="modal-body-item">
  //       <div className="modal-body-left">{item[1]}</div>
  //       <div className="modal-body-middle">{item[0]}</div>
  //       <div className="modal-body-right">{item[2]}</div>
  //     </div>
  //   )
  // })

  var displayCheckMarkForIncludedFeature = (included) => {
    if (included) {
      return ('&#10004;');
    } else {
      return ('&nbsp');
    }
  }

// why is this not working
// var renderComparisonTable = features.map(
//   function(item) {
//     return
//     <div className="modal-body-item">
//       <div className="modal-body-left">{item[1]}</div>
//       <div className="modal-body-middle">{item[0]}</div>
//       <div className="modal-body-right">{item[2]}</div>
//     </div>
//   }
// )

  // add rating to features
  // maybe add price to features (comparison)

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
          {
            features.map((item, index) => {
              key={index}
              return(
                <div className="modal-body-item">
                  <div className="modal-body-left">{displayCheckMarkForIncludedFeature(item[1])}</div>
                  <div className="modal-body-middle">{item[0]}</div>
                  <div className="modal-body-right">{displayCheckMarkForIncludedFeature(item[2])}</div>
                </div>
              )})
          }
        </div>
        <div className="modal-footer">
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default Comparing;