// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise(((resolve, reject) => {
    if (time > 2000) {
      reject(new Error('This time is too much !'));
    }
    const timeEnd = Date.now() + time;
    setInterval(() => {
      if (timeEnd < Date.now()) {
        resolve(time);
      }
    }, 50);
  }));
}

export function asyncDelay(time) {
  const makeRequest = async () => {
    const timeEnd = Date.now() + 500;
    await setInterval((resolve) => {
      if (timeEnd < Date.now()) {
        resolve(time);
      }
    }, 50);
    return time;
  };
  return makeRequest();
}
