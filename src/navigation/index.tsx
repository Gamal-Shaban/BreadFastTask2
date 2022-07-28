import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import MainStack from './mainStack';
import {SafeAreaView, StyleSheet} from 'react-native';
import {initialStatesType} from '../types';
import SplashScreenStack from './splashStack';

const AppNavigation = () => {
  const {isLoaded} = useSelector((state: initialStatesType) => ({
    isLoaded: state?.appState?.isLoaded,
  }));
  return (
    <NavigationContainer>
      {isLoaded ? (
        <SafeAreaView style={styles.container}>
          <MainStack />
        </SafeAreaView>
      ) : (
        <SplashScreenStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
