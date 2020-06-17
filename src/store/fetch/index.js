export default (method, url, body) => {
  return fetch(url, { 
    method, 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
}