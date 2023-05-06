import React, { useState } from 'react';
import * as S from './styles';

interface ISignInFormProps {
  handleSignIn: (email: string, password: string) => void;
}

export default ({ handleSignIn }: ISignInFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <S.Container>
      <S.EmailInput placeholder="E-mail" value={email} onChangeText={setEmail} />
      <S.PasswordInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <S.Button onPress={() => handleSignIn(email, password)}>
        <S.ButtonText>ENTRAR</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};
