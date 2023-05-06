import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
`;

export const X = styled.Text.attrs(() => ({children: 'X'}))`
  color: #363c41;
  font-size: 20px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  color: #1f85de;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;
