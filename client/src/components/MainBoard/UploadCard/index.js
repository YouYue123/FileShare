import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Line} from 'react-chartjs';
import UploadForm from './UploadForm';
import DragZoneContainer from '../../../containers/DragZoneContainer';
import '../../../../assets/css/upload-card.css'
export default class UploadCard extends Component{
  render(){
    return(
      <div className="upload-card col-xs-5">
        <div className = "upload-container">
          <div className="row upload-title-container">
            <div className="col-xs-6 upload-container-title">Upload Your File</div>
          </div>
          <div className="row upload-content-container">
            <DragZoneContainer />
          </div>
        </div>
      </div>
    );
  }
}
