function runsocket(io) {

  io.on('connection', function(socket) {
		socket.on('sign in', function(name) {
			socket.name = name
		})

    socket.join('room')
    
		console.log('connected')
    socket.on('message', function(data) {
			const obj = Object.assign(data, {
				name: socket.name
			})
			
    	io.to('room').emit('message', obj)
    })

    // console.log('connected')
    // socket.on('message', function(data) {
    // 	console.log('receiving message')
    // 	io.to('room').emit('message', data)
    // })
  })

}

export default runsocket