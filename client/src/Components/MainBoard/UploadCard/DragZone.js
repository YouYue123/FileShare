import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import StatusBar from './StatusBar';
import axios from 'axios';
export default class DragZone extends Component {

  constructor(){
    super();
    this.state = {
      className : "drag-zone",
      progress : "0%"
    }
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(accptedFiles,rejectedFiles){

    let files = accptedFiles;
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        formData.append('uploads[]', file, file.name);
    }
    var config = {
           onUploadProgress: (progressEvent) => {
             var percentCompleted = progressEvent.loaded / progressEvent.total * 100;
             if(isNaN(percentCompleted) === false){
               this.setState({
                 progress : percentCompleted + "%"
               })
             }
           }
    };
    axios.post('http://localhost:6004/upload',formData,config)
      .then((res) => {
        console.log(res);
        this.setState({
          className : 'drag-zone'
        });
        
      })
      .catch((err) => {
        alert(err);
      });
  }
  onDragEnter(e){
    e.preventDefault();
    this.setState({
      className : 'drag-zone-enter'
    });
  }
  onDragLeave(e){
    e.preventDefault();
    this.setState({
      className: 'drag-zone'
    });
  }
  render(){
    return(
        <Dropzone onDrop={this.onDrop} onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave} className={this.state.className}>
          <div>Drop your file here or click to select files to upload</div>
          <StatusBar progress={this.state.progress} />
        </Dropzone>
    );
  }
}
