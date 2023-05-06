import React from 'react';
import {AuthProvider} from '../features/auth/contexts/AuthContext';
import {DatesProvider} from '../features/dates/context/datesContext';

interface IProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default ({children}: IProviderProps) => (
  <AuthProvider>
    <DatesProvider>{children}</DatesProvider>
  </AuthProvider>
);
