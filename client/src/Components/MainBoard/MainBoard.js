import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TopMenu from './TopMenu';
import HistoryCard from './HistoryCard';
import OverviewCard from './OverviewCard';
import UploadCard from './UploadCard';
import '../../../assets/css/main-board.css'
import '../../../assets/css/top-menu.css'
import '../../../assets/css/history-card.css'
import '../../../assets/css/overview-card.css'
import '../../../assets/css/upload-card.css'
export default class MainBoard extends Component{
  render(){
    return(
      <div className="main-board">
          <TopMenu />
          <div className="row card-row">
            <UploadCard />
          </div>
          <HistoryCard fileList={this.props.fileList}/>
      </div>
    );
  }

}
