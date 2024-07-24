export default function signUpUser(firstName, lastName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const person = {
                firstName: firstName,
                lastName: lastName,
            };
            resolve(person);
        }, 1000);
    }).then((person) => {
        console.log(`${person.firstName} ${person.lastName}`);
    });
  }
