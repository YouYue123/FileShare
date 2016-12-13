import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {getFileList} from '../actions/fileListActions'
import MainBoard from '../components/MainBoard'
import SideMenu from '../components/SideMenu'
class HomeContainer extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const {dispatch} = this.props
    //console.log(this.props)
    dispatch(getFileList())
  }
  render(){
    return(
      <div className="container-fluid">
        <SideMenu />
        <MainBoard fileList={this.props.fileList.list}/>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  fileList: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(HomeContainer)
