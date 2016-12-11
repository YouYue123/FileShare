import React,{Component} from 'react';
import ReactDOM from 'react-dom';
export default class SideMenuList extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="side-menu-list">
         {this.props.menuList.map((item,i) =>
           <div className={i===0?"row side-menu-item-selected":"row side-menu-item"} key={i}>
            {item}
           </div>
         )}
      </div>
    );
  }
}
