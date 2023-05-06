import React from 'react';
import * as S from './styles';
import {TouchableOpacity} from 'react-native';

interface IDatesHeaderProps {
  handleSignOut: () => void;
}

export default ({handleSignOut}: IDatesHeaderProps) => (
  <S.Container>
    <S.Title>Dates</S.Title>
    <TouchableOpacity onPress={handleSignOut}>
      <S.SignOutText>Sing Out</S.SignOutText>
    </TouchableOpacity>
  </S.Container>
);
