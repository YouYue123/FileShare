import React,{Component} from 'react'
export default class Authen extends Component {
  render(){
    return(
      <div className="auth-mask">
        <div className="voice-btn btn btn-success" onClick= {this.props.recordVoice}>
          Voice
        </div>
        <audio />
      </div>
    )
  }
}
