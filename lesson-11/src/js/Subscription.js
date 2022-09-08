class Subscription {
    constructor() {
        this.subscribersList = []
    }

    subscribe(handler) {
        this.subscribersList.push(handler)
    }

    notify(data) {
        for (let fn of this.subscribersList) {
            fn(data)
        }
    }
}

export default Subscription