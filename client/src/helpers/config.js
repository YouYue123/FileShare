'use strict'
import io from 'socket.io-client'
import axios from 'axios'
axios.defaults.baseURL ='http://localhost:6001'
axios.defaults.headers.common['Authorization'] = ''
export const socket = io(axios.defaults.baseURL)
