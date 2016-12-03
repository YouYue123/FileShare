import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StatusBar from './StatusBar';
import axios from 'axios';
export default class UploadForm extends Component{

  constructor(){
    super();
    this.clickUpLoadBtnHandler = this.clickUpLoadBtnHandler.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.state = {
      file : null,
      progress : "0%"
    }
  }
  clickUpLoadBtnHandler(e){
    e.preventDefault();
    this.refs.file.click();
  }
  handleFileChange(e){
    e.preventDefault();
    let files = e.target.files;
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        formData.append('uploads[]', file, file.name);
    }
    var config = {
           onUploadProgress: (progressEvent) => {
             var percentCompleted = progressEvent.loaded / progressEvent.total * 100;
             this.setState({
               progress : percentCompleted + "%"
             })
           }
    };
    axios.post('http://localhost:6004/upload',formData,config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render(){
    return(
          <div>
            <button className="btn upload-btn" type="button" onClick={this.clickUpLoadBtnHandler}>  <span className="glyphicon glyphicon-cloud-upload"></span> Upload CSV</button>
            <input className="file" type="file" name="file" ref="file" defaultValue={this.state.file} onChange={this.handleFileChange}/>
          </div>
    );
  }
}
