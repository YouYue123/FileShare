import axios from 'axios'
import {showNotification} from '../helpers/notification'
import {config} from '../helpers/config'
export const REQUEST_FILE_LIST = 'REQUEST_FILE_LIST'
export const RECEIVE_FILE_LIST = 'RECEIVE_FILE_LIST'
export const ERROR_FILE_LIST = 'ERROR_FILE_LIST'
export const DELETE_FILE = 'DELETE_FILE'
function requestFileList(){
  return{
    type : REQUEST_FILE_LIST,
    fileList:{
      loading:true,
      error: '',
      receiveAt: Date.now(),
      list: []
    }
  }
}

function receiveFileList(response){
  return{
    type: RECEIVE_FILE_LIST,
    fileList:{
      loading: false,
      error: '',
      receiveAt:Date.now,
      list: response.data
    }
  }
}

function errorFileList(error){
  return{
    type : ERROR_FILE_LIST,
    fileList:{
      loading: false,
      error,
      recieveAt: Date.now(),
      list: []
    }
  }
}

export function getFileList(){
    return dispatch => {
      dispatch(requestFileList())
      return axios.get('/files')
          .then(response => dispatch(receiveFileList(response)))
          .catch(error => dispatch(errorFileList(error)))
    }
}
export function deleteFile(fileName){
    return dispatch => {
      axios.delete('/files/' + fileName)
        .then((res) =>{
          showNotification('delete successful')
        })
        .catch((err) => {
           alert(err);
        })
    }
}
