import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #1f85de;
  padding: 10px;
  height: 100%;
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const IndexText = styled.Text`
  color: #363c41;
  font-size: 16px;
  font-weight: bold;
`;

export const DescriptionText = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: white;
  font-size: 16px;
`;
