import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {getFileList} from '../actions/fileListActions'
import MainBoard from '../components/MainBoard'
import SideMenu from '../components/SideMenu'
import Authen from '../components/Authen'
import {socket} from '../helpers/config'
class HomeContainer extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const {dispatch} = this.props
    //console.log(this.props)
    dispatch(getFileList())
  }
  recordVoice(){

    const hasGetUserMedia = () => {
        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                  navigator.mozGetUserMedia || navigator.msGetUserMedia);
    }

    const recorderProcess = e => {
      const left = e.inputBuffer.getChannelData(0)
      console.log('recorded chunk')
      socket.emit('audioChunk',{data: left})
    }

    if(hasGetUserMedia()){
      const errorCallback = (e) => {
        console.log('Reeeejected!', e);
      }
      navigator.getUserMedia({audio:true},localMediaStream => {
        const audioContext = window.AudioContext
        const context = new audioContext()
        const audioInput = context.createMediaStreamSource(localMediaStream)
        var bufferSize = 16384
        var recorder = context.createScriptProcessor(bufferSize,1,1)
        recorder.onaudioprocess = recorderProcess
        audioInput.connect(recorder)
        recorder.connect(context.destination)
      },errorCallback)
    }
    else{
      alert('getUserMedia() os not supported in your browser')
    }
  }
  render(){
    return(
      <div className="container-fluid">
        <SideMenu />
        <Authen recordVoice={this.recordVoice}/>
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
