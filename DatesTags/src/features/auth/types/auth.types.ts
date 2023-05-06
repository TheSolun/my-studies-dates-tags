import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface IAuthUser extends FirebaseAuthTypes.User {}

interface IAuthContextState {
  authUser: IAuthUser | null;
}

export interface IAuthContextData {
  state: IAuthContextState;
  signIn: ({ email, password }: { email: string; password: string }) => any;
  signOut: () => void;
}
