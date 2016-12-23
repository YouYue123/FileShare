import React,{Component} from 'react'
import ClipCard from '../components/MainBoard/ClipCard'
import {getText,changeText,receiveText} from '../actions/textAreaActions'
import {connect} from 'react-redux'
import _ from 'lodash'
import {socket} from '../helpers/config'
class ClipBoardContainer extends Component{
  constructor(props){
    super(props)
    this.props.dispatch(getText())
    this.changeHandler = this.changeHandler.bind(this)
    socket.on('update-text-area',(data) => {
      this.props.dispatch(receiveText(data.text))
    })
  }
  changeHandler(e) {
    this.props.dispatch(receiveText(e.target.value))
    this.props.dispatch(changeText(e.target.value))
  }

  render(){
    return(
      <ClipCard changeHandler={this.changeHandler} clipBoardText={this.props.textAreaText} visible={this.props.textAreaStatus}/>
    )
  }

}

function mapStateToProps(state){
  const {textAreaText,textAreaStatus} = state
  return {
    textAreaText,
    textAreaStatus
  }
}

export default connect(mapStateToProps)(ClipBoardContainer)
