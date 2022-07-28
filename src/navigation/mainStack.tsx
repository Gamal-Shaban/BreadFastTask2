import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostsScreen} from '../screens/posts';
import {PostDetailsScreen} from '../screens/postDetails/postDetails';

const RootStack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name={'posts'} component={PostsScreen} />
      <RootStack.Screen name={'postsDetails'} component={PostDetailsScreen} />
    </RootStack.Navigator>
  );
};

export default MainStack;
