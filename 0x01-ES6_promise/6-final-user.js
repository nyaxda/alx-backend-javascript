import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const profile1 = await signUpUser(firstName, lastName);
  const profile2 = await uploadPhoto(fileName);
  return { profile1, profile2 };
}
