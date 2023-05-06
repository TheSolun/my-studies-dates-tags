import React from 'react';
import SignInForm from '../../components/SignInForm';
import * as S from './styles';
import { useAuth } from '../../contexts/AuthContext';

export default () => {
  const { signIn } = useAuth();

  const handleSignIn = (email: string, password: string) => {
    signIn({ email, password });
  };

  return (
    <S.Container>
      <SignInForm handleSignIn={handleSignIn} />
    </S.Container>
  );
};
