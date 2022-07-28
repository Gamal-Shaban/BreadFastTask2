import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLORS, IMAGES} from '../../utils/theme';
import {horizontalScale, verticalScale} from '../../utils/functions';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.LOADING_SPLASH} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
  },
  image: {
    width: horizontalScale(125),
    height: verticalScale(125),
    marginTop: verticalScale(-35),
    alignSelf: 'center',
  },
});
