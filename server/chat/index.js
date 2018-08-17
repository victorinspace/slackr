function runsocket(io) {

  io.on('connection', function(socket) {
    socket.join('room')
    
    console.log('connected')
    socket.on('message', function(data) {
    	console.log('receiving message')
    	io.to('room').emit('message', data)
    })
  })

}

export default runsocket