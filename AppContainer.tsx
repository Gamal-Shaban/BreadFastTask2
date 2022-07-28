import React, {useEffect, useRef} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {AppDispatch, store} from './src/redux/store';
import {appLoaded} from './src/redux/slices/appStateSlice';
import {StyleSheet, View} from 'react-native';
import AppNavigation from './src/navigation';

const seconds = 2000;

export const AppContainer = () => {
  const isMounted = useRef(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!isMounted.current) {
      setTimeout(() => {
        dispatch(appLoaded());
      }, seconds);
    }
    isMounted.current = true;
  }, [dispatch]);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
