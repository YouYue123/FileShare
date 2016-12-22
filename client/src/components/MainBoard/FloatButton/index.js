import React,{Component} from 'react'
import '../../../../assets/css/float-button.css'
export default class FloatButton extends Component{
  render(){
    return(

    <button type="button" className="btn btn-primary btn-circle btn-xl float-button" onClick={this.props.onClick}>
      <i className="glyphicon glyphicon-list"></i>
    </button>

    )
  }
}
