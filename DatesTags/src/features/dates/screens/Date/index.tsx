import React from 'react';
import * as C from '../../components';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  return (
    <>
      <C.DateHeader
        handleGoBack={() => navigation.goBack()}
        date={new Date()}
      />
    </>
  );
};
