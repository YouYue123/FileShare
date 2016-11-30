import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import HistoryCardTitle from './HistoryCard/HistoryCardTitle';
import HistoryCardContent from './HistoryCard/HistoryCardContent';
export default class HistoryCard extends Component{
  render(){
    return(
      <div className="row history-card">
        <div className="history-container">
          <HistoryCardTitle />
          <HistoryCardContent />
        </div>
      </div>
    );
  }
}
