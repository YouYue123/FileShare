import React,{Component} from 'react';
import ReactDOM from 'react-dom';
export default class SideMenuList extends Component{
  constructor(){
    super();
  }
  render(){
    const menuList = [
      "Dashboard",
      "Manage",
      "Monitoring",
      "Auditing",
      "About Us"
    ];
    return(
      <div className="side-menu-list">
         {menuList.map((item,i) =>
           <div className={i===0?"row side-menu-item-selected":"row side-menu-item"} key={i}>
            {item}
           </div>
         )}
      </div>
    );
  }
}
