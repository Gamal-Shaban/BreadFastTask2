/**
 * @format
 */

import 'react-native';
import React from 'react';
import {store} from '../src/redux/store';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {PostsScreen} from '../src/screens/posts';

// Note: test renderer must be required after react-native.

it('should Renders Posts Screen and MatchSnapShot', () => {
  const {toJSON} = render(
    <Provider store={store}>
      <PostsScreen />
    </Provider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
