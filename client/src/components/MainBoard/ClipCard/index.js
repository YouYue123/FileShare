import React, {Component} from 'react'
import '../../../../assets/css/clip-board.css'
export default class ClipCard extends Component{

  render(){
    return(
      <div className={this.props.visible===true?"clip-board":"invisible-clip-board"}>
        <textarea className="clip-text-area" onChange={this.props.changeHandler} id='myTextArea' value={this.props.clipBoardText} />
      </div>
    )
  }
}
