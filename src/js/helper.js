import { TIMEOUT_SEC } from './config.js';
export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second !`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPromise = await fetch(url, {
      method: uploadData ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: uploadData ? JSON.stringify(uploadData) : undefined,
    });
    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
