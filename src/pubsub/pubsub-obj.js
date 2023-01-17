// make use of web native event handler

function subscribe(eventName, callback) {
    const handler = (event) => {
        callback.apply(this, event.datail)
    }
    document.addEventListener(eventName, handler)
}

function publish(eventName, ...args) {
    let nativeEvent = new CustomEvent(eventName, { detail: args });
    document.dispatchEvent(nativeEvent);
}


subscribe("name", (a, b) => console.log(`${a} ${b}`));
publish("name", "hello", "Param");

