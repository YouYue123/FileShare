import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SideMenuBar from './SideMenuBar';
import SideMenuList from './SideMenuList';
const menuList = [
  "Dashboard",
  "Manage",
  "Monitoring",
  "Auditing",
  "About Us"
];
export default class SideMenu extends Component{
  render(){
    return(
      <div className="side-menu">
        <SideMenuBar />
        <SideMenuList menuList={menuList}/>
      </div>
    );
  }
}
