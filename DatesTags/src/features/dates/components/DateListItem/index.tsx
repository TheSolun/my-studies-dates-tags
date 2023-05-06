import React from 'react';
import * as S from './styles';
import {dateToString} from '../../utils/dates';

interface IDateListItem {
  listIndex: number;
  date: Date;
  dateDescription?: string;
  onPress: () => void;
}

export default ({listIndex, date, dateDescription, onPress}: IDateListItem) => (
  <S.Container onPress={onPress}>
    <S.Row>
      <S.DateText>{dateToString(date)}</S.DateText>
      <S.IndexText>{listIndex + 1}</S.IndexText>
    </S.Row>
    {dateDescription && (
      <S.DescriptionText>{dateDescription}</S.DescriptionText>
    )}
  </S.Container>
);
