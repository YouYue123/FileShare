import React,{Component} from 'react';
import ReactDOM from 'react-dom';
export default class FilelistHeader extends Component{
  render(){
    return(
      <div className='file-list-header row'>
        <div className='col-xs-3'> Name </div>
        <div className='col-xs-9'> Modified Date </div>
      </div>
    );
  }
}
