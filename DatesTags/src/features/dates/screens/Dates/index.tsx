import React from 'react';
import {useDates} from '../../context/datesContext';
import {useAuth} from '../../../auth/contexts/AuthContext';
import * as C from '../../components';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const {signOut} = useAuth();
  const {state} = useDates();
  const navigation = useNavigation<any>();

  return (
    <>
      <C.DatessHeader handleSignOut={signOut} />
      <C.DatesList
        dates={state.dates}
        // eslint-disable-next-line react/no-unstable-nested-components
        handleRenderItem={(index, date, description) => (
          <C.DateListItem
            listIndex={index}
            date={date}
            dateDescription={description}
            onPress={() => navigation.navigate('Date')}
          />
        )}
      />
    </>
  );
};
