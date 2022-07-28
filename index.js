/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {AppContainer} from './AppContainer';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
