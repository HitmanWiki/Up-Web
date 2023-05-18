const Centrifuge = require("centrifuge")

export class WebSocketClient {
    client = null

    constructor() {
        this.client = new Centrifuge(process.env.WS_URL)
    }

    connect(token) {
        this.client.setToken(token)

        this.client.connect()
    }

    disconnect() {
        this.client.disconnect()
        this.client.removeAllListeners()
    }

    subscribe(type, callback) {
        this.client.subscribe(type, callback)
        return () => {}
    }
}