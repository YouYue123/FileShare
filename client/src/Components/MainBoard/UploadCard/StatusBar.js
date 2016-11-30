import React,{Component} from 'react';
import ReactDOM from 'react-dom';
export default class StatusBar extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: this.props.progress}}>{this.props.progress}</div>
      </div>
    );
  }
}
