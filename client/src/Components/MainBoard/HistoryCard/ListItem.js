import React,{Component} from 'react';
export default class ListItem extends Component{
  render(){
    console.log(this.props)
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
          <button type="button" className="btn btn-danger" onClick={this.props.onClickDelete}>
            <span className="glyphicon glyphicon-erase" aria-hidden="true"></span> Delete
          </button>
        </td>
      </tr>
    );
  }
}
