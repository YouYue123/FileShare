'use strict'
import io from 'socket.io-client'
export const config = {
  apiEndPoint : 'http://localhost:6001'
}

export const socket = io(config.apiEndPoint)
