import React,{Component} from 'react'
import {deleteFile} from '../actions/fileListActions'
import {connect} from 'react-redux'
import ListItem from '../components/MainBoard/HistoryCard/ListItem'
class ListItemContainer extends Component{
  constructor(props){
    super(props)
    this.deleteFile = this.deleteFile.bind(this);
  }
  deleteFile(e){
    e.preventDefault();
    this.props.dispatch(deleteFile(this.props.fileInfo.name))
  }
  render(){
    console.log(this.props);
    return(
      <ListItem onClickDelete={this.deleteFile} fileInfo={this.props.fileInfo} key={this.props.key} id= {this.props.id}/>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(ListItemContainer)
