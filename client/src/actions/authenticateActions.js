import axios from 'axios'
import {config} from '../helpers/config'
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN'

export const receiveToken = (token) => {
  return{
    type: RECEIVE_TOKEN,
    token : token
  }
}

export const authenViaVoice = (voice) => {
  return dispatch => {
    axios.post('/voice',voice)
    .then(res => dispatch(this.receiveToken(res.data.token)))
    .catch(err => alert(err))
  }
}
