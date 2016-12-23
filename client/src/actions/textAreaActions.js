import {socket,config} from '../helpers/config'
import axios from 'axios'
export const TEXT_AREA_CHANGE = 'TEXT_AREA_CHANGE'
export const RECEIVE_TEXT = 'RECEIVE_TEXT'
export const getText = () => {
  return dispatch => {
    axios.get('/text')
      .then(res => dispatch(receiveText(res.data.text)))
      .catch(err => alert(err))
  }
}
export const changeText = (text) => {
  return dispatch => {
      axios.post('/text',{text:text,socket_id:socket.id})
        .then(res => console.log(res))
        .catch(err=> alert(err))
  }
}
export const receiveText = (text) => {
  return {
    type: RECEIVE_TEXT,
    text: text
  }
}
