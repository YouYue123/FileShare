import React,{Component} from 'react';
import ReactDOM from 'react-dom';
export default class OverviewCardTitle extends Component{
  render(){
    return(
      <div className="row overview-card-title">
        <div className="col-xs-4">BP Code Overview</div>
        <div className="col-xs-4 bp-code-selection-date">30 NOV 2016</div> 
      </div>
    );
  }
}
