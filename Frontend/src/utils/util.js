let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

const fetchAPI = url => {
  console.log(url);
  return fetch(url, requestOptions);
};

const status = res => {
  if (res.status === 200) {
    return Promise.resolve(res);
  } else {
    return Promise.reject(new Error(res.statusText));
  }
};

const json = res => res.json();

export { fetchAPI, status, json };
