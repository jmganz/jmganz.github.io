const scriptPromise = new Promise((resolve, reject) => {
  const script = document.createElement('script');
  document.body.appendChild(script);
  script.onload = resolve;
  script.onerror = reject;
  script.async = true;
  script.src = 'https://jonganz.com/js/fetchScript.js';
});

scriptPromise.then(() => { console.log("1"); });
