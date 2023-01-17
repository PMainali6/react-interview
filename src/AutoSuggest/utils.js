export function debounce(callback, limit) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => callback.apply(this, arguments), limit);
    };
  }
  
  export function leadingDebounce(callback, limit) {
    let shouldWait = false;
  
    return function () {
      if (!shouldWait) {
        callback.apply(this, arguments);
        shouldWait = true;
      }
  
      setTimeout(() => (shouldWait = false), limit);
    };
  }
  
  export function throttle(callback, limit) {
    let lastRan;
    let timer;
    return function () {
      if (!lastRan) {
        callback.apply(this, arguments);
        lastRan = performance.now();
      } else {
        clearTimeout(timer);
        timer = setTimeout(() => {
          if (performance.now() - lastRan >= limit) {
            callback.apply(this, arguments);
            lastRan = performance.now();
          }
        }, limit - (performance.now() - lastRan));
      }
    };
  }
  
  export function delay(callback, delay) {
    return new Promise((resolve, _) => {
      setTimeout(() => resolve(callback()), delay);
    });
  }
  
  export const keyCodes = {
    up: 38,
    down: 40,
    enter: 13,
    backspace: 8
  };
  
  export function stringTrim(str) {
    return String(str).trim();
  }
  