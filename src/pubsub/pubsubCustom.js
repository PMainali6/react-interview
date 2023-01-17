export function subscribe(eventName, callback) {
    const handler = (event) => callback(...event.detail)
    document.addEventListener(eventName, handler)

    function unsubscribe() {
        document.removeEventListener(eventName, handler)
    }

    return {
        unsubscribe
    }
}

export function publish(eventName, ...args) {
   const nativeEvent = new CustomEvent(eventName, { detail: args })
    document.dispatchEvent(nativeEvent)
}