const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 3006})
const clientConnections = {}

let clientIdCounter = 0

function _log(argument) {
	console.log(argument)
}

function createClientId() {
    clientIdCounter++
    return clientIdCounter
}

function sendMessageToAll(message, clientId = null) {
	let connectionIds = Object.keys(clientConnections)
	if (connectionIds.length < 2) {
		return
	}

	connectionIds.forEach(c => {
		if (!clientId || (clientId !== Number(c))) {
			clientConnections[c].send(JSON.stringify(message))
		}
	})
}

_log('webSocket server start')

wss.on('connection', connection => {

	_log('WS: new connection')

	const clientId = createClientId()
    clientConnections[clientId] = connection

    sendMessageToAll({
    	command: 'syncdata'
    })

	connection.on('message', message => {
        const result = JSON.parse(message)

        _log('WS: new message from ' + clientId)
		_log(result)

		sendMessageToAll(result, clientId)	
	})

	connection.on('close', () => {
		_log('WS: close connection ' + clientId)
		delete clientConnections[clientId]
	})
})
