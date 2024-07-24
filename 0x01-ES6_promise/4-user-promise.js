export default function signUpUser(firstName, lastName) {
  const promise =  new Promise((resolve) => {
    setTimeout(() => {
      const person = {
        firstName,
        lastName,
      };
      resolve(person);
    }, 1000);
  });
  promise.then(() => {
    console.log(promise);
  });
}
