import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../../../../assets/css/top-menu.css'
export default class TopMenu extends Component{
  render(){
    const iconList = [
      "search",
      "alarm",
      "clock",
      "profile"
    ];
    return(
      <div className='row top-menu'>
        <div className='top-menu-container'>
          {iconList.map((item,i) =>
            <div className= {"col-xs-1 top-icon-"+ item} key={i}/>
          )}
        </div>
      </div>
    );
  }
}
