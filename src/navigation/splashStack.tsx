import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../screens/splash';

const Stack = createNativeStackNavigator();

const SplashScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={'splash'}
      component={SplashScreen}
    />
  </Stack.Navigator>
);

export default SplashScreenStack;
