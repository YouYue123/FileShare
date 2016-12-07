import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Line} from 'react-chartjs';
import UploadForm from './UploadCard/UploadForm';
import DragZone from './UploadCard/Dragzone';
export default class UploadCard extends Component{
  render(){
    const chartData =  {
            labels: ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            datasets: [
                {
                    fillColor: "rgba(58,129,216,0.2)",
                    strokeColor: "rgba(255,255,255,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(28,231,186,1)",
                    backgroundColor: "rgba(0,0,0,1)",
                    data: ["143","156","175","183","182","186","185"]
                }
            ]
          }
    return(
      <div className="upload-card col-xs-5">
        <div className = "upload-container">
          <div className="row upload-title-container">
            <div className="col-xs-6 upload-container-title">Upload Your File</div>
          </div>
          <div className="row upload-content-container">
            <DragZone />
          </div>
        </div>
      </div>
    );
  }
}
