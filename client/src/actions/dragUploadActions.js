import axios from 'axios'
import {showNotification} from '../helpers/notification'
import {config} from '../helpers/config'
import {getFileList} from './fileListActions'
export const DRAG_INTO = 'DRAG_INTO'
export const DRAG_OUT = 'DRAG_OUT'
export const DRAG_UPLOAD = 'DRAG-UPLOAD'
export const UPDATE_UPLOAD_PROGRESS = 'UPDATE_UPLOAD_PROGRESS'
export const onDragEnter = () => {
  return {
    type: DRAG_INTO,
    uploadFormStyle : 'drag-zone-enter'
  }
}

export const onDragLeave = () => {
  return{
    type: DRAG_OUT,
    uploadFormStyle : 'drag-zone'
  }
}

function trackUploadProgress(percentCompleted){
  return{
    type: UPDATE_UPLOAD_PROGRESS,
    uploadProgress : percentCompleted
  }
}

export const onDrop = (formData) => {
  return dispatch=>{

    var config = {
           onUploadProgress: (progressEvent) => {
             var percentCompleted = progressEvent.loaded / progressEvent.total * 100
             if(isNaN(percentCompleted) === false){
               dispatch(trackUploadProgress(percentCompleted))
             }
           }
    };
    axios.post(config.apiEndPoint + '/upload',formData,config)
      .then((res) => {
        dispatch(onDragLeave())
        showNotification('upload successful')
      })
      .catch((err) => {
        alert(err);
      });

  }
}
