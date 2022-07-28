/**
 * @format
 */

import 'react-native';
import React from 'react';
import {store} from '../src/redux/store';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {SplashScreen} from '../src/screens/splash';

// Note: test renderer must be required after react-native.

it('should Renders Splash and MatchSnapShot', () => {
  const {toJSON} = render(
    <Provider store={store}>
      <SplashScreen />
    </Provider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
