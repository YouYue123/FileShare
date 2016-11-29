import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FileListHeader from './FilelistHeader';
export default class FileList extends Component{

  propTypes:{
    fileList : React.Proptyes.array
  }

  render(){
    return(
      <div className="file-list row">
          <FileListHeader />
          {this.props.fileList.map((file,i)=>
              <div className="file-item row" key={i}>
                <div className="file-name col-xs-3">{file}</div>
                <div className="file-modified-date col-xs-9"> 29/11/2016 11:21 AM </div>
              </div>
          )}
      </div>
    );
  }
}
