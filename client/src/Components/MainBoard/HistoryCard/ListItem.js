import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class ListItem extends Component{
  constructor(){
    super();
    this.deleteFile = this.deleteFile.bind(this);
  }

  deleteFile(e){
    e.preventDefault();
    axios.delete("http://localhost:6004/files/" + this.props.fileInfo.name)
      .then((res) =>{
        console.log(res);
      })
      .catch((err) => {
         alert(err);
         console.error(err);
      })
  }
  render(){
    return(
      <tr>
        <th scope="row">{this.props.id + 1}</th>
        <td>{ new Date(this.props.fileInfo.time).toLocaleString()}</td>
        <td>{this.props.fileInfo.name}</td>
        <td>{Math.round(this.props.fileInfo.size / 1024 * 100) / 100} KB</td>
        <td>
          <a type="button" className="btn btn-primary" href= {"/" + this.props.fileInfo.name} download={this.props.fileInfo.name}>
            <span className="glyphicon glyphicon-download" aria-hidden="true"></span> Download
          </a>
          &nbsp;
          <button type="button" className="btn btn-danger" onClick={this.deleteFile}>
            <span className="glyphicon glyphicon-erase" aria-hidden="true"></span> Delete
          </button>
        </td>
      </tr>
    );
  }
}
