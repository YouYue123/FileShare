import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SideMenuBar from './SideMenuBar';
import SideMenuList from './SideMenuList';
export default class SideMenu extends Component{
  render(){
    return(
      <div className="side-menu">
        <SideMenuBar />
        <SideMenuList />
      </div>
    );
  }
}
