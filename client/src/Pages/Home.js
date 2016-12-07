import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MainBoard from '../Components/MainBoard/MainBoard';
import SideMenu from '../Components/SideMenu/SideMenu';
import UploadForm from '../Components/MainBoard/UploadCard/UploadForm';
import FileList from '../Components/MainBoard/HistoryCard/FileList';
import axios from 'axios';
export default class Home extends Component{

  constructor(){
    super();
    this.state = {
      files : []
    }
  }

  componentWillMount(){
    axios.get('http://localhost:6004/files')
      .then((res) =>{
        this.setState({
          files : res.data
        });
      })
      .catch((err) =>{
        console.log(err);
      })
  }

  render(){
    return(
      <div className="container-fluid">
        <SideMenu />
        <MainBoard fileList={this.state.files}/>
      </div>
    );
  }
}
