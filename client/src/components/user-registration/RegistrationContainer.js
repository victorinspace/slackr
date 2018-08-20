import React, { Component } from 'react'

import Title from '../Title'
import Registration from './Registration'

class RegistrationContainer extends Component {
	render() {
		return (
			<div className='registration-container'>
				
				<Title />
				<Registration />

			</div>
		)
	}
}

export default RegistrationContainer