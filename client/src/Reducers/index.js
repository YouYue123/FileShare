import {combineReducers} from 'redux'
import {REQUEST_FILE_LIST,RECEIVE_FILE_LIST,ERROR_FILE_LIST} from '../actions/fileListActions'
import {DRAG_INTO,DRAG_OUT,UPDATE_UPLOAD_PROGRESS} from '../actions/dragUploadActions'
const fileList = (state={
    list: [],
    loading: false,
    error: ''
  } ,action)=>{
  switch(action.type){
    case REQUEST_FILE_LIST:
    case RECEIVE_FILE_LIST:
    case ERROR_FILE_LIST:
      return action.fileList
    default:
      return state
  }
}
const uploadFormStyle = (state='drag-zone',action) =>{
  switch(action.type){
    case DRAG_INTO:
    case DRAG_OUT:
    return action.uploadFormStyle
    default:
      return state
  }
}
const uploadProgress = (state=0.0,action) => {
  switch(action.type){
    case UPDATE_UPLOAD_PROGRESS:
      return action.uploadProgress
    default:
      return state
  }
}
const fileShareApp = combineReducers({
  fileList,
  uploadProgress,
  uploadFormStyle
})

export default fileShareApp
