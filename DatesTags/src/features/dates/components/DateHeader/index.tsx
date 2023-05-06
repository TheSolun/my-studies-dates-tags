import React from 'react';
import * as S from './styles';
import {TouchableOpacity} from 'react-native';
import {dateToString} from '../../utils/dates';

interface IDateHeaderProps {
  handleGoBack: () => void;
  date: Date;
}

export default ({handleGoBack, date}: IDateHeaderProps) => (
  <S.Container>
    <TouchableOpacity onPress={handleGoBack}>
      <S.X />
    </TouchableOpacity>
    <S.Title>{dateToString(date)}</S.Title>
  </S.Container>
);
