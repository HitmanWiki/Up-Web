import {
    WebSocketClient
} from "infrastructure/services/WebSocketClient"

const wsClient = new WebSocketClient()

class WsService {
    _subscribers = []

    _unsubscribeChannel = null

    connect(userId, token) {
        wsClient.connect(token)
        this._unsubscribeChannel = wsClient.subscribe(
            `gatefi:user#${userId}`,
            this.handlerMsg.bind(this)
        )
    }

    disconnect() {
        if (this._unsubscribeChannel) this._unsubscribeChannel()

        wsClient.disconnect()
    }

    handlerMsg({
        data
    }) {
        this._subscribers.forEach((subscriber) => {
            if (subscriber.type !== data.type) return

            subscriber.callback(data.payload)
        })
    }

    subscribe(type, callback) {
        const subscriber = {
            type,
            callback,
        }
        this._subscribers.push(subscriber)

        return () => this.unsubscribe(subscriber)
    }

    unsubscribe(subscriber) {
        this._subscribers = this._subscribers.filter((s) => s !== subscriber)
    }
}

export const wsService = new WsService()