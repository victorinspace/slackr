import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Title from '../Title'

// TODO: Channels listing will be mapped data
// based on existing channels

class Channels extends Component {
	render() {
		return (
			<div className="channels-container">
				
				<Title />
				<h3 className="page-title">Channels</h3>
				<ul className="channels-listings">
					<li className="channel"><Link to={'/chatwindow'}>Channel One</Link></li>
					<li className="channel"><Link to={'/chatwindow'}>Channel Two</Link></li>
					<li className="channel"><Link to={'/chatwindow'}>Channel Three</Link></li>
				</ul>

			</div>
		)
	}
}

export default Channels