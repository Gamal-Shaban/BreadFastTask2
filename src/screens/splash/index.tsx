import React from 'react';
import {Image, View} from 'react-native';
import {IMAGES} from '../../theme/theme';
import {styles} from './styles';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.LOADING_SPLASH} />
    </View>
  );
};
