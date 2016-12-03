import React,{Component} from 'react';
import ReactDOM from 'react-dom';
export default class HistoryCardContent extends Component{
  render(){
    return(
      <div className="row history-card-content">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Update Time</th>
              <th>Affected Records</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>29 NOV 2015</td>
              <td>200,112</td>
              <td>
                <button type="button" className="btn btn-danger">
                  <span className="glyphicon glyphicon-erase" aria-hidden="true"></span>  Revoke
                </button>
              </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>28 NOV 2015</td>
              <td>170,112</td>
              <td>
                <button type="button" className="btn btn-primary">
                  <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Detail&nbsp;&nbsp;&nbsp;
                </button>
              </td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>27 NOV 2015</td>
              <td>160,112</td>
              <td>
                <button type="button" className="btn btn-primary">
                  <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Detail&nbsp;&nbsp;&nbsp;
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
