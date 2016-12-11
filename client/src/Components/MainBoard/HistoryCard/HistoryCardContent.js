import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ListItemContainer from '../../../containers/ListItemContainer';
export default class HistoryCardContent extends Component{
  render(){

    //console.log(this.props.fileList);
    const List = this.props.fileList.map((file,i) => {
      return <ListItemContainer fileInfo={file} key={i} id={i}/>
    });
    return(
      <div className="row history-card-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Upload Time</th>
              <th>File Name</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {List}
          </tbody>
        </table>
      </div>
    );
  }
}
