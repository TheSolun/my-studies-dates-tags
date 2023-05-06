import firebase from '../../shared/services/firebase';
import {IUserData} from '../types/user.types';

export const fetchUserDataByID = async (
  id: string,
): Promise<IUserData | undefined> => {
  const documentData = (
    await firebase.firestore().collection('users').doc(id).get()
  ).data();
  return documentData
    ? {email: documentData.email, name: documentData.name}
    : undefined;
};
