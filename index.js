const path = require('path')
const http = require('http')
// const https = require('node:https')
const mysql = require('mysql')
const fs = require('fs')

const contentType = {
	'.css': 'text/css',
	'.png': 'image/png',
	'.js': 'text/javascript',
	'.json': 'application/json'
}

const tableName = 'fp_planing'
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
})

connection.connect()

const selectFPlaningByDate = (startDate, toDate) => {

	connection.query(`SELECT * FROM ${tableName} WHERE date > ? AND date < ?`, [startDate, toDate], (err, rows) => {
		console.log(rows)
		connection.end()
	})
}

const insertFPlaning = (fdata) => {

	console.log(fdata)
	let sqlRow = `INSERT INTO ${tableName} (sum, type, shopli, status, date) VALUES ?`
	connection.query(sqlRow, [fdata], (err, result) => {
		if (err) throw err
		return result.affectedRows
	})
}

// const options = {
// 	key: fs.readFileSync('key.pem').toString(),
// 	cert: fs.readFileSync('cert.pem').toString()
// }

// const server = https.createServer(options, (req, res) => {
const server = http.createServer((req, res) => {
	console.log(req.method + ': ' + req.url)
	if (('GET' === req.method) && (('/index.html' === req.url) || ('/' === req.url))) {
		res.writeHead(200, {'Content-type':'text/html;charset=utf-8'})
		fs.readFile(
			path.join(__dirname, '', 'index.html'),
			'utf-8',
			(err, content) => {
				if (err) throw err
				res.end(content)
			}
		)
		
	} else if (('POST' === req.method) && ('/fpapi/fpv2/create' === req.url)) {

		let body = ''
		let dataValues = []
	    req.on('data', chunk => {
			body += chunk.toString()
	    })
	    req.on('end', () => {
			let requestBody = JSON.parse(body)
			console.log(requestBody)
			requestBody.forEach(i => {
				let outArr = [
					i.sum,
					i.typeStr,
					(i.desc) ? i.desc : '',
					(!i.status) ? 'pending' : i.status,
					i.date
				]
				dataValues.push(outArr)
			})
			let countRows = insertFPlaning(dataValues)
			res.writeHead(200, { 'Content-Type': 'text/plain' })
			res.end(countRows ?? '0')
	    })
	} else if (('POST' === req.method) && ('/fpapi/fpv2/get' === req.url)) {

		let body = ''
	    req.on('data', chunk => {
			body += chunk.toString()
	    })
	    req.on('end', () => {
			let requestBody = JSON.parse(body)
			console.log(requestBody)
			
			let rows = selectFPlaningByDate(requestBody.from, requestBody.to)
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify(rows))
	    })
	} else if ((req.url.indexOf('/assets-fp/') !== -1) || ('/manifest.json' === req.url) || ('/sw.js' === req.url)) {
		const extname = String(path.extname(req.url)).toLowerCase()
		fs.readFile('.' + req.url, (err, content) => {
			if (err) {
				throw err
			}
			else {
				res.writeHead(200, {'Content-type': contentType[extname]})
				res.end(content)
			}
		})

	} else {
		console.log('222: ', req.url)
		res.end()
	}
})

const PORT = process.env.PORT || 3005

server.listen(PORT, () => {
	console.log('server started: ' + PORT)
})
