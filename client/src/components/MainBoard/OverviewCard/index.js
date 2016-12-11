import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import OverviewCardTitle from './OverviewCardTitle';
import OverviewCardContent from './OverviewCardContent';
import '../../../../assets/css/overview-card.css'
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
