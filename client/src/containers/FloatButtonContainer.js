import React,{Component} from 'react'
import FloatButton from  '../components/MainBoard/FloatButton'
import {floatButtonToggle} from '../actions/floatButtonActions'
import {connect} from 'react-redux'

class FloatButtonContainer extends Component{
  constructor(props){
    super(props)
    this.toggleFloatButton = this.toggleFloatButton.bind(this)
  }
  toggleFloatButton(){
    this.props.dispatch(floatButtonToggle())
  }
  render(){
    return(
      <FloatButton onClick={this.toggleFloatButton} />
    )
  }
}



export default connect()(FloatButtonContainer)
