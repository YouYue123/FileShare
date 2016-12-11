import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import HistoryCardTitle from './HistoryCardTitle';
import HistoryCardContent from './HistoryCardContent';
import '../../../../assets/css/history-card.css'
export default class HistoryCard extends Component{
  render(){
    return(
      <div className="row history-card">
        <div className="history-container">
          <HistoryCardContent fileList={this.props.fileList}/>
        </div>
      </div>
    );
  }
}
