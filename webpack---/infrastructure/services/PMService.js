const PREFIX_MSG = "gatefi:"

export class PMService {
    target

    debug = false

    subscribes = {}

    constructor(target = window) {
        this.target = target
    }

    send(type, payload) {
        if (this.debug) console.log("[PM Widget] send", type)

        this.target.postMessage({
                type: this.__getTypeWithPrefix(type),
                payload,
            },
            "*"
        )
    }

    start() {
        window.addEventListener("message", this.listenerMessage.bind(this))
    }

    stop() {
        window.removeEventListener("message", this.listenerMessage.bind(this))
    }

    subscribe(type, callback) {
        if (!type) return
        if (!callback) return

        if (!this.subscribes[type]) this.subscribes[type] = []

        const exist = this.subscribes[type].find((c) => c === callback)
        if (!exist) this.subscribes[type].push(callback)
    }

    unsubscribe(type, callback) {
        if (!this.subscribes[type]) return

        this.subscribes[type] = this.subscribes[type].filter((c) => c !== callback)
    }

    clear() {
        this.subscribes = []
    }

    run(type, payload) {
        if (!this.subscribes[type]) return

        this.subscribes[type].forEach((callback) => callback(type, payload))
    }

    listenerMessage(e) {
        const {
            data
        } = e

        // if (this.debug) console.log("[PM Widget] raw msg", e)

        if (!e.isTrusted) return

        const message = data
        if (!message ||
            typeof message !== "object" ||
            typeof message.type !== "string" ||
            !message.type.startsWith(PREFIX_MSG)
        ) {
            return
        }

        if (this.debug) console.log("[PM Widget] receive", e.data)

        const type = this.__getType(message.type)
        this.run(type, message.payload)
    }

    __getTypeWithPrefix(type) {
        return `${PREFIX_MSG}${type}`
    }

    __getType(type) {
        return type.replace(PREFIX_MSG, "")
    }
}