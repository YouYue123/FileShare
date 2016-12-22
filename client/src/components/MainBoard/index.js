import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import TopMenu from './TopMenu'
import HistoryCard from './HistoryCard'
import OverviewCard from './OverviewCard'
import UploadCard from './UploadCard'
import ClipBoardContainer from '../../containers/ClipBoardContainer'
import FloatButtonContainer from '../../containers/FloatButtonContainer'
import '../../../assets/css/main-board.css'
export default class MainBoard extends Component{
  render(){
    return(
      <div className="main-board">
          <TopMenu />
          <div className="row card-row">
            <UploadCard />
          </div>
          <HistoryCard fileList={this.props.fileList}/>
          <ClipBoardContainer />
          <FloatButtonContainer />
      </div>
    )
  }

}
