import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../features/auth/screens/SignIn';
import {useAuth} from '../features/auth/contexts/AuthContext';
import Dates from '../features/dates/screens/Dates';
import Date from '../features/dates/screens/Date';

const Stack = createNativeStackNavigator();

export default () => {
  const {
    state: {authUser},
  } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {authUser === null ? (
          <Stack.Screen name="SignIn" component={SignIn} />
        ) : (
          <>
            <Stack.Screen name="Dates" component={Dates} />
            <Stack.Screen name="Date" component={Date} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
