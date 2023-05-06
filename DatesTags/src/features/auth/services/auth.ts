import firebase from '../../shared/services/firebase';

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    throw error;
  }
};

export const onAuthStateChanged = (listener) => firebase.auth().onAuthStateChanged(listener);
