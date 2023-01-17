const list = [
    "apple",
    "appreciate",
    "applaude",
    "apply",
    "app",
    "appsmith",
    "apprehensive",
    "application",
    "appointment"
  ];
  
  const suggestion = [
    "Apple M1 MacBook Pro",
    "iPhone 14 Pro 256 GB",
    "Ipod Pro Gen 2",
    "Google Pixel 7 Pro",
    "Samsung Galaxy Flip 4",
    "Fujifilm X-100 V",
    "Leica M11"
  ];
  
  function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(list);
      }, 1000);
    });
  }
  
  export { getData, suggestion };
  