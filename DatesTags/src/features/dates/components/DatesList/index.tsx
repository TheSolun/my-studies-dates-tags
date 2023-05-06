import React from 'react';
import * as S from './styles';
import {IDate} from '../../types/dates.types';

interface IDatesListProps {
  dates: IDate[];
  handleRenderItem: (
    index: number,
    date: Date,
    description?: string,
  ) => JSX.Element;
}

export default ({dates: dates, handleRenderItem}: IDatesListProps) => (
  <S.FlatList
    data={dates}
    renderItem={({item, index}: {item: any; index: any}) =>
      handleRenderItem(index, item.date, item.description)
    }
    ItemSeparatorComponent={S.ListItemSeparator}
  />
);
