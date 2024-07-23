export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promise) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error());
      }
    }, 1000);
  }).then((response) => {
    console.log('Got a response from the API');
    console.log(response);
    return response;
  }).catch((error) => {
    console.log('Got a response from the API');
    console.error(error);
    throw error;
  });
}
