import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// TODO: Channels listing may be mapped data
// based on existing channels

class Channels extends Component {
	render() {
		return (
			<div className="channels-container">

				<div className="chat-rooms-list">
					<div className="channel"><Link to={'/chatwindow'}>General</Link></div>
					<div className="channel"><Link to={'/chatwindow'}>Entertainment</Link></div>
					<div className="channel"><Link to={'/chatwindow'}>Games</Link></div>
					<div className="channel"><Link to={'/chatwindow'}>Sports</Link></div>
					<div className="channel"><Link to={'/chatwindow'}>Music</Link></div>
				</div>

			</div>
		)
	}
}

export default Channels