import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { USER } from '../../shared/constants/presist';
import * as auth from '../services/auth';
import { IAuthContextData, IAuthUser as IAuthUser } from '../types/auth.types';

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState<IAuthUser | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setAuthUser(user);
        await AsyncStorage.setItem(USER, JSON.stringify(user));
      } else {
        setAuthUser(null);
        await AsyncStorage.removeItem(USER);
      }
    });
    return unsubscribe;
  }, []);

  const signIn = ({ email, password }: { email: string; password: string }) => {
    const treatError = (message: string) => {
      Alert.alert('LOGIN ERROR', message);
    };
    if (!email || !password) {
      treatError('email and password are required');
      return;
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setAuthUser(user);
      })
      .catch((error) => {
        treatError(error.toString());
      });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(async () => {
        setAuthUser(null);
      })
      .catch((error) => {
        Alert.alert('LOGOUT ERROR', error.toString());
      });
  };

  const value = {
    state: { authUser },
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
