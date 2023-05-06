import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #1f85de;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
`;

const Input = styled.TextInput.attrs(() => ({
  placeholderTextColor: 'white',
}))<{withMarginTop: boolean}>`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: white;
  border-radius: 10px;
  color: white;
  padding-horizontal: 10px;
  margin-top: ${({withMarginTop}) => (withMarginTop ? 10 : 0)}px;
`;

export const EmailInput = styled(Input)``;

export const PasswordInput = styled(Input).attrs(() => ({
  withMarginTop: true,
}))`
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: #1f85de;
  font-size: 18px;
  font-weight: 700;
`;
