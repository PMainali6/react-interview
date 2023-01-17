function PubSub() {
    const events = new Map()

    function subscribe(eventName, handler) {
        if(events.has(eventName)) {
            const prevList = events.get(eventName);
            events.set(eventName, [...prevList, handler])
        } else {
            events.set(eventName, [handler])
        }


        function unsubscribe() {
            const prevList = events.get(eventName);
            const newList = prevList.filter(fn => fn !== handler);
            events.set(eventName, newList);
        }
        console.log(events);
        return {
            unsubscribe
        }
    }

    function publish(eventName, ...args) {
        if(events.has(eventName)) {
            const fnList = events.get(eventName);
            fnList.forEach(fn => fn.apply(this, args))
        }
    }

    return {
        subscribe,
        publish
    }
}

let pubsub = PubSub();

export {pubsub};