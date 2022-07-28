import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/posts';

const RootStack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={'posts'}
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
    </RootStack.Navigator>
  );
};

export default MainStack;
