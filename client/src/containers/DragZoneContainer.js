import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {onDrop, onDragLeave, onDragEnter} from '../actions/dragUploadActions'
import DragZone from '../components/MainBoard/UploadCard/DragZone';

class DragZoneContainer extends Component{
  constructor(props){
    super(props);
    this.onDragLeave = this.onDragLeave.bind(this)
    this.onDragEnter = this.onDragEnter.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  onDragLeave(e){
    e.preventDefault()
    this.props.dispatch(onDragLeave())
  }

  onDragEnter(e){
    e.preventDefault()
    this.props.dispatch(onDragEnter())
  }
  onDrop(accptedFiles,rejectedFiles){
    let files = accptedFiles;
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        formData.append('uploads[]', file, file.name);
    }
    this.props.dispatch(onDrop(formData))
  }
  render(){
    return(
      <DragZone onDrop={this.onDrop} onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave} styleName={this.props.uploadFormStyle} uploadProgress={this.props.uploadProgress} />
    )
  }
}

DragZoneContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  uploadFormStyle: PropTypes.string.isRequired,
  uploadProgress: PropTypes.number.isRequired
}
function mapStateToProps(state){
  const {uploadFormStyle,uploadProgress} = state
  return{
    uploadFormStyle,
    uploadProgress
  }
}

export default connect(mapStateToProps)(DragZoneContainer)
