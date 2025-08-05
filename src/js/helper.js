import { TIMEOUT_SEC } from './config.js';
export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second !`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPromise = await fetch(url);
    const res = await Promise.race([fetchPromise, timeout(1)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
