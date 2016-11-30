import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import OverviewCardTitle from './OverviewCard/OverviewCardTitle';
import OverviewCardContent from './OverviewCard/OverviewCardContent';
export default class OverviewCard extends Component{
  render(){
    return(
      <div className="col-xs-7 overview-card">
        <div className = "overview-container">
          <OverviewCardTitle />
          <OverviewCardContent />
        </div>
      </div>
    );
  }
}
