import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import StatusBar from './StatusBar';
import axios from 'axios';
export default class DragZone extends Component {

  render(){
    return(
        <Dropzone
          onDrop={this.props.onDrop}
          onDragEnter={this.props.onDragEnter}
          onDragLeave={this.props.onDragLeave}
          className={this.props.styleName}>
          <div>Drop your file here or click to select files to upload</div>
          <StatusBar progress={this.props.uploadProgress+'%'} />
        </Dropzone>
    );
  }
}
