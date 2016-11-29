import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import UploadForm from './UploadForm';
import FileList from './FileList';
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
      <div>
  
        <FileList fileList={this.state.files} />
      </div>
    );
  }
}
