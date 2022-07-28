import React from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {resetComments} from '../redux/slices/commetsSlice';
import {COLORS, IMAGES} from '../theme/theme';
import {
  horizontalScale,
  normalizeFontSize,
  verticalScale,
} from '../utils/responsiveUtils';

export const HeaderDetails = () => {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => {
          goBack();
          dispatch(resetComments());
        }}>
        <Image source={IMAGES.back} style={styles.backImage} />
      </Pressable>

      <Text style={styles.title}>Post Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingRight: horizontalScale(60),
    paddingLeft: horizontalScale(20),
    borderBottomColor: COLORS.GRAY_II,
    borderBottomWidth: verticalScale(0.5),
    paddingTop: Platform.OS === 'ios' ? verticalScale(10) : verticalScale(25),
  },
  backButton: {
    height: verticalScale(40),
    width: horizontalScale(40),
  },
  backImage: {
    height: verticalScale(25),
    width: horizontalScale(25),
  },
  title: {
    fontSize: normalizeFontSize(20),
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
});
