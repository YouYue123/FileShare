import React,{Component} from 'react';
import ReactDOM from 'react-dom';
export default class OverviewCardContent extends Component{
  render(){
    return(
      <div className="row overview-card-content">
        <div className="col-xs-4 overview-content-container">
          <div className="row overview-content-title">
            BpCode No
          </div>
          <div className="row overview-content-number">
            186
          </div>
        </div>
        <div className="col-xs-4 overview-content-container">
          <div className="row overview-content-title">
              Total Cost
          </div>
          <div className="row overview-content-number">
            $200,234
          </div>
        </div>
        <div className="col-xs-4 overview-content-container">
          <div className="row overview-content-title">
              SG Cost
          </div>
          <div className="row overview-content-number">
            $100,213
          </div>
        </div>
      </div>
    );
  }
}
