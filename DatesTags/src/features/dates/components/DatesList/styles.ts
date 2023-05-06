import styled from 'styled-components/native';
import {FlatList as RNFlatList} from 'react-native';

export const FlatList = styled(RNFlatList).attrs(() => ({
  contentContainerStyle: {
    padding: 10,
  },
}))``;

export const ListItemSeparator = styled.View`
  height: 10px;
`;
