import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Movies from './Movies.js'

class Channels extends Component {
	render() {
		return (
			<div className="channels-container">

				<div className="chat-rooms-list">
					<Route><Link className="channel" to={'/chatwindow'}>General</Link></Route>
					<Route><Link className="channel" to={'/movies'} component={Movies}>Movies</Link></Route>
					<Route><Link className="channel" to={'/games'}>Games</Link></Route>
					<Route><Link className="channel" to={'/sports'}>Sports</Link></Route>
					<Route><Link className="channel" to={'/music'}>Music</Link></Route>
				</div>

			</div>
		)
	}
}

export default Channels