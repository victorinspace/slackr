function runsocket(io) {

  io.on('connection', socket => {
    socket.join('room1')
    console.log('connected')

    socket.on('messsage room', (data) => {
    	socket.broadcast.to('room').emit('message room', data)
    })
  })
  
}

export default runsocket