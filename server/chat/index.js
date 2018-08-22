function runsocket(io) {

  io.on('connection', function(socket) {
		socket.on('sign in', function(name) {
			socket.name = name
		})

    socket.join('room')
    socket.join('general')
    socket.join('entertainment')
    socket.join('games') 
    socket.join('sports')
    socket.join('music')
    
		console.log('connected')
    socket.on('message', function(data) {
		const obj = Object.assign(data, {
			name: socket.name
		})
			
  	io.to('room').emit('message', obj)
    })
  })

}

export default runsocket