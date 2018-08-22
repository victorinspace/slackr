import express from 'express'
import sha512 from 'js-sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

router.post('/login', (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password).toString()

  const sql = `
		SELECT count(1)
		FROM users
		WHERE username = ? AND password = ?
  `

  conn.query(sql, [username, password], (err, results, fields) => {
  	if (results.length > 0) {
			const token = jwt.sign({"username":username}, config.get('jwt.secret'))
			console.log(token)
			res.json({
				token: token
			})
  	} else {
  		res.status(401).json({
  			message: 'Incorrect Username or Password.'
  		})
  	}
  })
})

router.post('/register', (req, res, next) => {
	const username = req.body.username
	const password = sha512(req.body.password).toString()

	console.log(username, password)

	const sql = `
		INSERT INTO users (username, password)
		VALUES (?, ?)
	`
	try {
		conn.query(sql, [username, password], (err, results, fields) => {
			if (err) console.log(err)
			res.json({
				message: 'User created.'
			})
		})
	} catch (e) {
		console.log(e)
	}
})

export default router