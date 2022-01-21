import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


var CompareTable = (props) => {

  console.log('compare table');
  console.log(props.compareTable);

  var renderComparisonTable = props.compareTable.map((item, index) => {
    return(
      <div className="modal-body-item">
        <div className="modal-body-left">{item[1]}</div>
        <div className="modal-body-middle">{item[0]}</div>
        <div className="modal-body-right">{item[2]}</div>
      </div>
    )
  })


  return (
    <div>
    {props.compareTable.map((item, index) => {
      key={index}
      return(
        <div className="modal-body-item">
          <div className="modal-body-left">{item[1]}</div>
          <div className="modal-body-middle">{item[0]}</div>
          <div className="modal-body-right">{item[2]}</div>
        </div>
      )
    })}
    </div>
  )
}


export default CompareTable;