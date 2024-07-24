import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let user = {};

  try {
    const photo = await uploadPhoto();
    const newUser = await createUser();
    user = { photo, newUser };
  } catch (err) {
    user = { photo: null, user: null };
  }
  return user;
}
